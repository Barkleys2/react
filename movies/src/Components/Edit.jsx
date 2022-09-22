import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import genres from '../Data/genres';
import DataContext from './DataContext';

function Edit() {

    const { modalData, setModalData, setEditData } = useContext(DataContext);
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('0');
    const [year, setYear] = useState('');


    useEffect(() => {
        if (null === modalData) {
            return;
        }
        setTitle(modalData.title);
        setGenre(modalData.genre);
        setYear(modalData.year);

    }, [modalData]);

    const save = () => {
        setEditData({
            title,
            genre: parseInt(genre),
            year,
            id: modalData.id
        });
        setModalData(null);
    }


    if (null === modalData) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Movie</h5>
                        <button onClick={() => setModalData(null)} type="button" className="btn-close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="card m-4">

                            <div className="card-body">
                                <div className="mb-3">
                                    <label className="form-label">Movie Title</label>
                                    <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Genre</label>
                                    <select className="form-select" value={genre} onChange={e => setGenre(e.target.value)}>
                                        <option value={0} disabled>Choose from list</option>
                                        {
                                            genres.map(g => <option key={g.id} value={g.id}>{g.type}</option>)
                                        }
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Movie Year</label>
                                    <input type="text" className="form-control" value={year} onChange={e => setYear(e.target.value)} />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button onClick={() => setModalData(null)} type="button" className="btn btn-secondary">Close</button>
                        <button onClick={save} type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit;