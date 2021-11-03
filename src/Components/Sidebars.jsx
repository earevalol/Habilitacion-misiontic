import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import {Link} from 'react-router-dom'

const Sidebars = () => {
    const {logout, user} = useAuth0()


    return (
        <div className="container-fluid">
    <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <Link to='/dash'>
                <a  className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">Autopartes</span>
                </a>
                    </Link>
                <hr/>
                <a  className="d-flex align-items-center text-white text-decoration-none " id="dropdownUser1" >
                        <img src={user.picture} alt="hugenerd" width="30" height="30" className="rounded-circle"/>
                        <span className="d-none d-sm-inline mx-1">{user.name}</span>
                    </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <Link to='/' ><a href="#" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                        </a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/productos'>
                        <a  className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Producto</span>
                        </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/ventas'>
                        <a  className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Ventas</span>

                        </a>
                        </Link>

                    </li>
                    <li className="nav-item">
                        <Link to='/roles'>
                        <a  className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Roles</span>
                        </a>
                        </Link>
                    </li>
                   
                </ul>
                <hr/>
               
            </div>
        </div>
        
    </div>
</div>
    )
}

export default Sidebars
