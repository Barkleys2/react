import { useEffect, useState } from 'react';
import './App.scss';
import Create from './Components/Create';
import DataContext from './Components/DataContext';
import Edit from './Components/Edit';
import List from './Components/List';
import Messages from './Components/Messages';
import { create, destroy, read, update } from './Functions/localStorage';
import { v4 as uuidv4 } from 'uuid';
import Delete from './Components/Delete';

const key = 'movies';


function App() {

  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [movies, setMovies] = useState(null);
  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [modalDelData, setModalDelData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [msgs, setMsgs] = useState([]);

  // READ
  useEffect(() => {
    setMovies(read(key));
  }, [lastUpdate]);


  // CREATE
  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(key, createData);
    setLastUpdate(Date.now());
    makeMsg('Oh, new movie (' + createData.title + ') is here!')
  }, [createData]);

  // DELETE
  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    destroy(key, deleteData.id);
    setLastUpdate(Date.now());
    makeMsg('Oh no, movie (' + deleteData.title + ') gone!')
  }, [deleteData]);

  // EDIT
  useEffect(() => {
    if (null === editData) {
      return;
    }
    update(key, editData, editData.id);
    setLastUpdate(Date.now())
  }, [editData]);


  const makeMsg = text => {

    const msg = {
      id: uuidv4(),
      text
    }
    setMsgs(m => [...m, msg]);
    setTimeout(() => {
      setMsgs(m => m.filter(mes => mes.id !== msg.id));
    }, 6000);
  }

  return (
    <DataContext.Provider value={{
      setCreateData,
      movies,
      setDeleteData,
      modalData,
      setModalData,
      setEditData,
      msgs,
      setMsgs,
      modalDelData,
      setModalDelData
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
      <Messages />
      <Delete />
    </DataContext.Provider>
  );
}

export default App;