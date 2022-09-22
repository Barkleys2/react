import { useContext } from 'react';
import Consumers from "../../Contexts/Consumers";
import Line from './Line';



function List() {

    const { suppliers } = useContext(Consumers);

    return (
        <div className="card m-4">
            <h5 className="card-header">Consumers List</h5>
            <div className="card-body">
                <ul className="list-group">
                    {
                        suppliers?.map(s => <Line key={s.id} supplier={s} />)
                    }
                </ul>
            </div>
        </div>

    );
}

export default List;