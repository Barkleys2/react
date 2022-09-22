import { useContext } from 'react';
import Consumers from '../../Contexts/Consumers';


function Line({ supplier }) {

    const { setDeleteData, setModalData } = useContext(Consumers);

    return (
        <li className="list-group-item">
            <div className="line">
                <div className="line__content">
                    <div className="line__content__title">
                        {supplier.title}
                    </div>
                    <div className="line__content__info">
                        {supplier.price} eur/kWh
                    </div>

                </div>
                <div className="line__buttons">
                    <button onClick={() => setModalData(supplier)} type="button" className="btn btn-outline-success">Edit</button>
                    <button onClick={() => setDeleteData(supplier)} type="button" className="btn btn-outline-danger">Delete</button> 
                </div>
            </div>
        </li>
    )
}

export default Line;