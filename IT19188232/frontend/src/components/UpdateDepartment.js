import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';



function UpdateDepartment(depDet) {


    let history = useHistory();
    const {id} = depDet.depDet._id;
    const [users, setUsers] = useState({

        
        CodeID: depDet.depDet.CodeID,
        DepartmentName:depDet.depDet.DepartmentName,
        Designation:depDet.depDet.Designation ,
        BasicSalary: depDet.depDet.BasicSalary,
        

    });
    
    console.log(depDet.depDet._id)
    //const [EmpID, setEmpID] = useState(empDet.EmployeeID);

    const { CodeID, DepartmentName, Designation, BasicSalary } = users;
    const onInputChange = e => {
        setUsers({ ...users, [e.target.name]: e.target.value });
    };

    console.log(depDet)

    useEffect(() => {
        loadUser();
        
    }, []);

    const onSubmit = async (e) => {
        // e.preventDefault();

        await axios.put(`http://localhost:5000/department/update/${depDet.depDet._id}`, users).then
        (()=>{alert("updated successfully!")})
        // history.push('/all');
        
        console.log("err")

    };


    const loadUser = async () => {

        const result = await axios.get(`http://localhost:5000/department/gets/${id}`);
        setUsers(result.data);

    };


    return (
        <div className="container">
            <div className="col d-flex justify-content-center">
                <div className="card3">
                    <div className="col-md-8 mt-4 mx-auto">

                        <h3 className="h3 mb-3 font-weight-normal">Update  Department</h3>
                        <form className="needs-validation" onSubmit={e => onSubmit(e)}>
                            <div className="form-group" style={{ marginBottom: '15px' }} align="left">

                                {/* <label style={{ marginBottom: '5px' }} className="textfield1">Item ID</label><br /> */}

                                {/* <input type="text" className="form-control" name="id" value={id} onChange={(e) => onInputChange(e)} readOnly required /> */}

                            </div>

                            {/* <div className="form-group" style={{ marginBottom: '15px' }} align="left">
                                <label for="id" className="form-label" style={{ marginBottom: '5px' }} >EmployeeID</label>
                                <input type="text" className="form-control"  name="EmployeeID" value={EmployeeID} onChange={(e) => onInputChange(e)} readOnly required />
                            </div>
                            <div className="form-group" style={{ marginBottom: '15px' }} align="left">
                                <label for="EmployeeName" className="form-label" style={{ marginBottom: '5px' }} >EmployeeName</label>
                                <input type="text" className="form-control" id="EmployeeName" name="EmployeeName" value={EmployeeName} onChange={(e) => onInputChange(e)} readOnly required />
                                <p className="warnmsg"></p></div> */}
                            <div className="form-group" style={{ marginBottom: '15px' }} align="left">
                                <label for="id" className="form-label" style={{ marginBottom: '5px' }} >CodeID</label>
                                <input type="text" className="form-control"  name="CodeID" value={CodeID} onChange={(e) => onInputChange(e)} readOnly  required />
                                </div>


                            <div className="form-group" style={{ marginBottom: '15px' }} align="left">
                                <label for="DepartmentName" className="form-label" style={{ marginBottom: '5px' }} >DepartmentName</label>
                                <input type="text" className="form-control" id="DepartmentName" name="DepartmentName" value={DepartmentName} onChange={(e) => onInputChange(e)} readOnly required />
                                <span className="validity"></span>
                            </div>

                            <div className="form-group" style={{ marginBottom: '15px' }} align="left">
                                <label for="Designation" className="form-label" style={{ marginBottom: '5px' }}>Designation</label>
                                <input type="text" className="form-control" id="Designation" name="Designation" value={Designation} onChange={(e) => onInputChange(e)}readOnly  required />
                                <span className="validity"></span>
                            </div>
                             <div className="form-group" style={{ marginBottom: '15px' }} align="left">
                                <label for="BasicSalary" className="form-label" style={{ marginBottom: '5px' }} >Basic Salary</label>
                                <input type="text" className="form-control" id="BasicSalary" name="BasicSalary" value={BasicSalary} onChange={(e) => onInputChange(e)} required />
                                <span className="validity"></span>
                            </div>
                            {/* <div className="form-group" style={{ marginBottom: '15px' }} align="left">
                                <label for="ContactNo" className="form-label" style={{ marginBottom: '5px' }} >ContactNo</label>
                                <input type="text" className="form-control" id="ContactNo" name="ContactNo" value={ContactNo} onChange={(e) => onInputChange(e)} readOnly required />
                                <span className="validity"></span>
                            </div>
                            <div className="form-group" style={{ marginBottom: '15px' }} align="left">
                                <label for="Email" className="form-label" style={{ marginBottom: '5px' }} >Email</label>
                                <input type="text" className="form-control" id="Email" name="Email" value={Email} onChange={(e) => onInputChange(e)} readOnly required />
                                <span className="validity"></span>
                            </div>
                            <div className="form-group" style={{ marginBottom: '15px' }} align="left">
                                <label for="DateOfBirth" className="form-label" style={{ marginBottom: '5px' }}>DateOfBirth</label>
                                <input type="text" className="form-control" id="dateOfBirth" name="DateOfBirth" value={DateOfBirth} onChange={(e) => onInputChange(e)} readOnly required />
                                <span className="validity"></span>
                            </div>
                            <div className="form-group" style={{ marginBottom: '15px' }} align="left">
                                <label for="AccountNo" className="form-label" style={{ marginBottom: '5px' }} >AccountNo</label>
                                <input type="text" className="form-control" id="AccountNo" name="AccountNo" value={AccountNo} onChange={(e) => onInputChange(e)} readOnly required />
                                <span className="validity"></span>
                            </div>
                            <div className="form-group" style={{ marginBottom: '15px' }} align="left">
                                <label for="Address" className="form-label" style={{ marginBottom: '5px' }} >Address</label>
                                <input type="text" className="form-control" id="Address" name="Address" value={Address} onChange={(e) => onInputChange(e)} readOnly required />
                                <span className="validity"></span>
                            </div>  */}
                            <table>
                                <tr>
                                    <th>
                                        <button type="submit" className="btn btn-success">Update and Save</button></th><th></th>
                                    
                                    
                                </tr></table>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default UpdateDepartment;