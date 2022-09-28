import { useEffect, useState } from 'react';
import { useContext } from 'react';
import Bills from "../../Contexts/Bills";
import Line from './Line';



function List() {

    const [supplier, setSupplier] = useState('0');
    const [sort, setSort] = useState('default');

    const { bills, suppliers, setBills } = useContext(Bills);

    useEffect(() => {
        if ('0' === supplier) {
            setBills(b => b?.map(bill => ({ ...bill, show: true })));
        } else {
            setBills(b => b?.map(bill => parseInt(supplier) === bill.sid ? { ...bill, show: true } : { ...bill, show: false }))
        }
    }, [supplier, setBills]);

    useEffect(() => {
        switch (sort) {
            case 'default':
                setBills(bi => [...bi ?? []].sort((a, b) => a.row - b.row));
                break;
            case 'total_asc':
                setBills(bi => [...bi ?? []].sort((a, b) => a.total - b.total));
                break;
            case 'total_desc':
                setBills(bi => [...bi ?? []].sort((a, b) => b.total - a.total));
                break;
            case 'surname_asc':
                setBills(bi => [...bi ?? []].sort((a, b) => a.surname.localeCompare(b.surname)));
                break;
            case 'surname_desc':
                setBills(bi => [...bi ?? []].sort((a, b) => b.surname.localeCompare(a.surname)));
                break;
            default:
        }
    }, [sort, setBills]);

    return (
        <div className="card m-4">
            <h5 className="card-header">Bills List</h5>
            <div className="container">
                <div className="row">
                    <div className="col-3 mt-3">
                        <label className="form-label">Suppliers Filter</label>
                    </div>
                    <div className="col-5 mt-3">
                        <select className="form-select" value={supplier} onChange={e => setSupplier(e.target.value)}>
                            <option value={0}>Show All</option>
                            {
                                suppliers?.map(s => <option key={s.id} value={s.id}>{s.title}</option>)
                            }
                        </select>
                    </div>
                    <div className="col-4 mt-3"></div>
                    <div className="col-3 mt-3">
                        <label className="form-label">Total Sort</label>
                    </div>
                    <div className="col-5 mt-3">
                        <select className="form-select" value={sort} onChange={e => setSort(e.target.value)}>
                            <option value="default">Default</option>
                            <option value="total_asc">Total 1 - 9</option>
                            <option value="total_desc">Total 9 - 1</option>
                            <option value="surname_asc">Surname A - Z</option>
                            <option value="surname_desc">Surname Z -A</option>
                        </select>
                    </div>
                    <div className="col-4 mt-3"></div>
                </div>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    {
                        bills?.map(b => b.show ? <Line key={b.id} bill={b} /> : null)
                    }
                </ul>
            </div>
        </div>

    );
}

export default List;