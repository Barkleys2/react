import { useState, useEffect } from 'react';
import Cats from '../../Contexts/Cats';
import Create from './Create';
import List from './List';
import axios from 'axios';
import Edit from './Edit';
import { authConfig } from '../../Functions/auth';

function Main() {

    const [lastUpdate, setLastUpdate] = useState(Date.now());
    const [createData, setCreateData] = useState(null);
    const [cats, setCats] = useState(null);
    const [deleteData, setDeleteData] = useState(null);
    const [modalData, setModalData] = useState(null);
    const [editData, setEditData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3003/server/cats', authConfig())
        .then(res => {
            setCats(res.data);
        })
    }, [lastUpdate]);

    useEffect(() => {
        if (null === createData) {
            return;
        }
        axios.post('http://localhost:3003/server/cats', createData, authConfig())
        .then(res => {
            setLastUpdate(Date.now());
        });
    }, [createData]);

    useEffect(() => {
        if (null === deleteData) {
            return;
        }
        axios.delete('http://localhost:3003/server/cats/'+ deleteData.id, authConfig())
        .then(res => {
            setLastUpdate(Date.now());
        });
    }, [deleteData]);

    useEffect(() => {
        if (null === editData) {
            return;
        }
        axios.put('http://localhost:3003/server/cats/'+ editData.id, editData, authConfig())
        .then(res => {
            setLastUpdate(Date.now());
        });
    }, [editData]);


    return (
        <Cats.Provider value={{
            setCreateData,
            cats,
            setDeleteData,
            modalData,
            setModalData,
            setEditData
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
            <Edit />
        </Cats.Provider>
    )
}

export default Main;