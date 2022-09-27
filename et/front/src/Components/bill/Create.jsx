import { useRef } from 'react';
import { useState, useContext } from 'react';
import Bills from '../../Contexts/Bills';

function Create() {

    const [supplier, setSupplier] = useState('0');

    const [consumerId, setConsumerId] = useState('0');
    const invoice = useRef();
    const [kwh, setKwh] = useState('');
    const total = useRef();

    const { setCreateData, suppliers } = useContext(Bills);

    const add = () => {
        setCreateData({
            consumerId,
            invoice,
            kwh,
            total
        });
        setConsumerId('0');
        setKwh('');
    }

    return (
        <div className="card m-4">
            <h5 className="card-header">New Bill</h5>
            <div className="card-body">
                <div className="mb-3">
                    <label className="form-label">Suppliers</label>
                    <select className="form-select" value={supplier} onChange={e => setSupplier(e.target.value)}>
                        <option value={0} disabled>Choose from list</option>
                        {
                            suppliers?.map(s => <option key={s.id} value={s.id}>{s.title}</option>)
                        }
                    </select>
                </div>
                {/* <div className="mb-3">
                    <label className="form-label">Supplier Title</label>
                    <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price per kWh</label>
                    <input type="text" className="form-control" value={price} onChange={e => setPrice(e.target.value)} />
                </div> */}
                <button onClick={add} type="button" className="btn btn-outline-success">Add</button>
            </div>
        </div>
    );
}

export default Create;