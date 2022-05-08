import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import "./AllDepartments.css";
import Modle from './Depmodal';
//import ItemcardMat from "./ItemcardMat"; 
//import dataMat from "./dataMat";

const AllDepartments = (props) => {
    const [departments, setDepartments] = useState([]);
    const [depDet, setDepDet] = useState("");
    const [editForm, showEditForm] = useState(false);
    // search function
    const [results, setResults] = useState([])
    const [searchInput, setSearchInput] = useState('')

    useEffect(() => {
        loadUsers();
    }, []);
    //on page load display all records
    const loadUsers = async () => {
        const result = await axios.get('http://localhost:5000/department/');
        setDepartments(result.data.reverse());
    };

    function deleteDepartments(id) {
        // if(
        //     window.confirm("Are you sure that you wanted to delete that Employee")
        // )
        axios.delete(`http://localhost:5000/department/delete/${id}`).then(() => {
            /*alert("Delete Successful");*/

        }).catch((err) => {
            console.log(err);
        })

        window.location.reload();
        alert("Department deleted successfully!");

    }

    //define useEffect method for filter data for search function
    useEffect(() => {

        if (searchInput === '') {
            setResults(departments)
        } else {
            let results = departments.filter(
                (department) =>
                    department.CodeID.toLowerCase().includes(searchInput) ||
                    department.DepartmentName.toLowerCase().includes(searchInput) ||
                    department.Designation.toLowerCase().includes(searchInput)


            )
            setResults(results)
        }
    }, [searchInput, departments])

    //start of the return   

    return (
        <div className="container" id="container7">


            {/*start of the table view card*/}
            <div className="col d-flex justify-content-center">
                <div className="card5" style={{ width: "1200px" }}>



                    <div className="card-body">
                        <h5 className="card-title">All Department Details</h5>
                        <h6 className="card-subtitle mb-2 text-muted">* This is the entire employee details of the company..!</h6>
                        {/*Search Function*/}

                        {/*<input className='form-control' type='search' placeholder='Search inventory' name='searchQue' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>*/}
                        <div class="input-group rounded" style={{ width: '500px', alignContent: 'center' }}>
                            <input type="search" className="form-control rounded" placeholder="Search department here.." aria-label="Search"
                                aria-describedby="search-addon" name='searchQue' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                            <span class="input-group-text border-0" id="search-addon">
                                <i class="fas fa-search"></i>
                            </span>
                        </div><br />

                        {/*Table view for display all the data*/}
                        <table className="table table-hover table-bordered border-primary">
                            <thead>
                                <tr>


                                    <th scope="col">CodeID</th>
                                    <th scope="col">DepartmentName</th>
                                    <th scope="col">Designation</th>
                                    <th scope="col">BasicSalary</th>


                                </tr>
                            </thead>
                            <tbody>
                                {results.map((user, index) => (
                                    <tr className="raw1">{/*<td>{user._id}</td>*/}

                                        <td>{user.CodeID}</td>
                                        <td>{user.DepartmentName}</td>
                                        <td>{user.Designation}</td>
                                        <td>{user.BasicSalary}</td>
                                        
                                        <td>


                                            <th scope="col">
                                                {/* <Link className="edit" to={`/update/${user._id}`} > */}
                                                <button className="btn btn-primary" onClick={() => {
                                                    showEditForm(true);
                                                    setDepDet(user)
                                                }}>Update</button>

                                                {/* </Link></th> */}</th>
                                            <th></th>
                                            <th scope="col">
                                                <Link className="delete" onClick={() => deleteDepartments(user._id)}>

                                                    <button type="submit" name="delete_btn" className="btn btn-danger">Delete</button>
                                                </Link>
                                            </th>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <table>
            <tr><th>
            <a href="/addD" button type="submit" className="btn btn-success">Add Department</a></th>
            <th></th>
           
            </tr></table>

                        <Modle
                            show={editForm}
                            onHide={() => showEditForm(false)}
                            depDet={depDet}
                        />
                    </div>
                </div>

            </div>
        </div>

    )

}

export default AllDepartments;

