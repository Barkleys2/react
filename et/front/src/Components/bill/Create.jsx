import { useState, useContext, useEffect, useCallback } from 'react';
import Bills from '../../Contexts/Bills';
import rand from '../../Functions/rand';

function Create() {

    const [supplier, setSupplier] = useState('0');

    const [consumerId, setConsumerId] = useState('0');
    const [invoice, setInvoice] = useState('');
    const [kwh, setKwh] = useState('');
    const [total, setTotal] = useState('0');

    const { setCreateData, suppliers, consumers, setConsumers } = useContext(Bills);

    const add = () => {
        setCreateData({
            consumerId: parseInt(consumerId),
            invoice,
            kwh: parseInt(kwh),
            total: parseFloat(total)
        });
        setConsumerId('0');
        setSupplier('0');
        setKwh('');
    }

    const makeTotal = useCallback((supplier, kwh) => {
        if (0 === parseInt(supplier)) {
            setTotal(0);
        } else {
            const t = suppliers.find(s => s.id === parseInt(supplier))?.price;

            let n = parseFloat(t) * parseInt(kwh === '' ? 0 : kwh);

            setTotal(n.toFixed(2));
        }
    }, [suppliers]);

    const makeInv = useCallback(supplier => {
        if (0 === parseInt(supplier)) {
            setInvoice('');
        } else {
            const t = suppliers.find(s => s.id === parseInt(supplier))?.title; 
            let n = ((t[0] + t[1]).toUpperCase() + rand(1, 99999999)).padStart(8, '0');
            setInvoice(n);
        }
    }, [suppliers]);

    useEffect(() => {
        makeTotal(supplier, kwh);
    }, [supplier, kwh, makeTotal])

    useEffect(() => {
        setConsumerId('0');
        makeInv(supplier);
        setConsumers(c => c?.map(one => one.supplier_id === parseInt(supplier) ? { ...one, show: true } : { ...one, show: false }))
    }, [supplier, setConsumers, setConsumerId, makeInv]);



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
                <div className="mb-3">
                    <label className="form-label">Consumer</label>
                    <select className="form-select" value={consumerId} onChange={e => setConsumerId(e.target.value)}>
                        <option value={0} disabled>Choose from list</option>
                        {
                            consumers?.map(c => c.show ? <option key={c.id} value={c.id}>{c.name} {c.surname}</option> : null)
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Invoice</label>
                    <input type="text" className="form-control" value={consumerId !== '0' ? invoice : ''} readOnly={true} />
                </div>

                 <div className="mb-3">
                    <label className="form-label">kWh</label>
                    <input type="text" className="form-control" value={kwh} onChange={e => setKwh(e.target.value.replace(/[^\d]/, ''))} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Total</label>
                    <input type="text" className="form-control" value={total} readOnly={true} />
                </div>
                <button onClick={add} type="button" className="btn btn-outline-success">Add</button>
            </div>
        </div>
    );
}

export default Create;