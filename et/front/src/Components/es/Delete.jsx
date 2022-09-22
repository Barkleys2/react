import { useContext } from "react";
import DataContext from "./DataContext";

function Delete() {

    const {modalDelData, setModalDelData, setDeleteData} = useContext(DataContext);

    const yes = () => {
        setDeleteData(modalDelData);
        setModalDelData(null);
    }

    if (null === modalDelData) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Are you sure?</h5>
                        <button onClick={() => setModalDelData(null)} type="button" className="btn-close"></button>
                    </div>
                    <div className="modal-footer">
                        <button onClick={() => setModalDelData(null)} type="button" className="btn btn-secondary">Close</button>
                        <button onClick={yes} type="button" className="btn btn-primary">Yes, do it</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delete;