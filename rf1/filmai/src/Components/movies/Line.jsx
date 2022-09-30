import { useContext } from 'react';
import Consumers from '../../Contexts/Consumers';


function Line({ consumer }) {

    const { setDeleteData, setModalData, suppliers } = useContext(Consumers);

    return (
        <li className="list-group-item">
            <div className="line">
                <div className="line__content">
                    <div className="line__content__title">
                        {consumer.name} {consumer.surname}
                    </div>
                    <div className="line__content__info">
                        {consumer.counter_number}
                    </div>
                    <div className="line__content__info">
                        {suppliers.find(s => s.id === consumer.supplier_id)?.title}
                    </div>

                </div>
                <div className="line__buttons">
                    <button onClick={() => setModalData(consumer)} type="button" className="btn btn-outline-success">Edit</button>
                    <button onClick={() => setDeleteData(consumer)} type="button" className="btn btn-outline-danger">Delete</button> 
                </div>
            </div>
        </li>
    )
}

export default Line;