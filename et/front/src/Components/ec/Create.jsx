import { useState, useContext } from 'react';
import Consumers from '../../Contexts/Consumers';

function Create() {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [number, setNumber] = useState('');
    const [supplier, setSupplier] = useState(0);

    const { setCreateData, suppliers } = useContext(Consumers);

    const add = () => {
        setCreateData({
            name,
            surname,
            number,
            supplier: parseInt(supplier)
        });
        setName('');
        setSurname('');
        setNumber('');
        setSupplier(0);
    }

    return (
        <div className="card m-4">
            <h5 className="card-header">New Consumer</h5>
            <div className="card-body">
                <div className="mb-3">
                    <label className="form-label">Consumer Name</label>
                    <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Consumer Surname</label>
                    <input type="text" className="form-control" value={surname} onChange={e => setSurname(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Counter Number</label>
                    <input type="text" className="form-control" value={number} onChange={e => setNumber(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Suppliers</label>
                    <select className="form-select" value={supplier} onChange={e => setSupplier(e.target.value)}>
                        <option value={0} disabled>Choose from list</option>
                        {
                            suppliers?.map(s => <option key={s.id} value={s.id}>{s.title}</option>)
                        }
                    </select>
                </div>
                <button onClick={add} type="button" className="btn btn-outline-success">Add</button>
            </div>
        </div>
    );
}

export default Create;