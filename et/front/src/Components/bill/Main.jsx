import { useState, useEffect } from 'react';
import Bills from '../../Contexts/Bills';
import Create from './Create';
import List from './List';
import axios from 'axios';

function Main() {

    const [lastUpdate, setLastUpdate] = useState(Date.now());
    const [createData, setCreateData] = useState(null);
    const [bills, setBills] = useState(null);
    const [deleteData, setDeleteData] = useState(null);

    const [consumers, setConsumers] = useState(null);
    const [suppliers, setSuppliers] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3003/server/bills')
        .then(res => {
            setBills(res.data.map((c, i) => ({...c, show: true, row: i})));
        })
    }, [lastUpdate]);
     useEffect(() => {
        axios.get('http://localhost:3003/server/suppliers')
            .then(res => {
                setSuppliers(res.data);
            })
    }, []);
    useEffect(() => {
        axios.get('http://localhost:3003/server/consumers')
            .then(res => {
                setConsumers(res.data.map(c => ({...c, show: false})));
            })
    }, []);


    useEffect(() => {
        if (null === createData) {
            return;
        }
        axios.post('http://localhost:3003/server/bills', createData)
        .then(res => {
            setLastUpdate(Date.now());
        });
    }, [createData]);

    useEffect(() => {
        if (null === deleteData) {
            return;
        }
        axios.delete('http://localhost:3003/server/bills/'+ deleteData.id)
        .then(res => {
            setLastUpdate(Date.now());
        });
    }, [deleteData]);


    return (
        <Bills.Provider value={{
            setCreateData,
            bills,
            setDeleteData,
            consumers,
            setConsumers,
            suppliers,
            setBills
        }}>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Create />
                    </div>
                    <div className="col-8">
                        <List />
                    </div>
                </div>
            </div>
        </Bills.Provider>
    )
}

export default Main;