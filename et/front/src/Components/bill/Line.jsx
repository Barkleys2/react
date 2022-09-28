import { useContext } from 'react';
import Bills from '../../Contexts/Bills';


function Line({ bill }) {

    const { setDeleteData } = useContext(Bills);

    return (
        <li className="list-group-item">
            <div className="line">
                <div className="line__content">
                    <div className="line__content__title">
                        {bill.title}
                    </div>
                    <div className="line__content__title">
                        {bill.invoice}
                    </div>
                    <div className="line__content__info">
                        {bill.name} {bill.surname}
                    </div>
                    <div className="line__content__info">
                        {bill.kwh} kWh {bill.total} eur
                    </div>

                </div>
                <div className="line__buttons">
                    <button onClick={() => setDeleteData(bill)} type="button" className="btn btn-outline-danger">Delete</button> 
                </div>
            </div>
        </li>
    )
}

export default Line;