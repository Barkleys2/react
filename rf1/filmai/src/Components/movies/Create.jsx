import { useState, useContext } from 'react';
import Movies from '../../Contexts/Movies';

function Create() {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [number, setNumber] = useState('');
    const [cat, setCat] = useState(0);

    const { setCreateData, cats } = useContext(Movies);

    const add = () => {
        setCreateData({
            name,
            surname,
            number,
            cat: parseInt(cat)
        });
        setName('');
        setSurname('');
        setNumber('');
        setCat(0);
    }

    return (
        <div className="card m-4">
            <h5 className="card-header">New Movie</h5>
            <div className="card-body">
                <div className="mb-3">
                    <label className="form-label">Movie Name</label>
                    <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Movie Surname</label>
                    <input type="text" className="form-control" value={surname} onChange={e => setSurname(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Counter Number</label>
                    <input type="text" className="form-control" value={number} onChange={e => setNumber(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Cats</label>
                    <select className="form-select" value={cat} onChange={e => setCat(e.target.value)}>
                        <option value={0} disabled>Choose from list</option>
                        {
                            cats?.map(s => <option key={s.id} value={s.id}>{s.title}</option>)
                        }
                    </select>
                </div>
                <button onClick={add} type="button" className="btn btn-outline-success">Add</button>
            </div>
        </div>
    );
}

export default Create;