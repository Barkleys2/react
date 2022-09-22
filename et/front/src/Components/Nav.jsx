import { NavLink } from "react-router-dom";

function Nav() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container-fluid">
                            <span className="navbar-brand">Electro City</span>
                            <div className="collapse navbar-collapse">
                                <div className="navbar-nav">
                                    <NavLink to="home" className={ ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
                                    <NavLink to="suppliers" className={ ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Suppliers</NavLink>
                                    <NavLink to="consumers" className={ ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Consumers</NavLink>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Nav;