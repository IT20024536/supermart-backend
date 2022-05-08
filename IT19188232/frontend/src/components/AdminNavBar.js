import React from "react";
//import{link} from 'react-router-dom';

function AdminNavBar(){

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                    {/* <a className="navbar-brand" href="#">
                        Reviewer</a> */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                             aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            {/* <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/dashboard">Admin DashBoard </a>
                            </li> */}
                            {/* <li className="nav-item">
                                <a className="nav-link" href="/">AllEmployees</a>
                                
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/add">Add Employee</a>
                            </li> */}
                             
                            {/* { <li className="nav-item">
                                <a className="nav-link" href="/addD">Add Department</a>
                            </li>}
                             <li className="nav-item">
                                <a className="nav-link" href="/alld">All Department</a>
                            </li> */}
                            <li className="nav-item">
                                <a className="nav-link" href="/dash">AdminDashBoard</a>
                            </li>
                            {/* { <li className="nav-item">
                                <a className="nav-link" href="/prop">EmpProfile</a>
                            </li> } */}
                            {/* <li className="nav-item">
                                <a className="nav-link" href="/addS">AddSalary</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/alls">AllSalaries</a>
                            </li>   */}
                        </ul>
                    </div>
                    <div className="float-right">
                        <form className="form-inline my-2 my-lg-0">
                            <button className="btn btn-outline-success my-2 my-sm-1" type="submit">Log Out</button>
                        </form>
                    </div>
                </nav>
            
    )
}

export default AdminNavBar;