import React, { useEffect, useState } from "react"
import axios from "axios";
import "./AddEmployee.css";
export default function AddEmployee() {

  const [EmployeeID, setEmployeeID] = useState("");
  const [EmployeeName, setEmployeeName] = useState("");
  const [CodeID, setCodeID] = useState("");
  const [DepartmentName, setDepartmentName] = useState("");
  const [Designation, setDesignation] = useState("");
  const [BasicSalary, setBasicSalary] = useState("");
  const [ContactNo, setContactNo] = useState("");
  const [Email, setEmail] = useState("");
  const [DateOfBirth, setDateOfBirth] = useState("");
  const [AccountNo, setAccountNo] = useState("");
  const [Address, setAddress] = useState("");
  const [Password, setPassword] = useState("");

  const [Department, setDepartment] = useState('')

  // const Get =()=>{

  //   axios.get(`http://localhost:5000/department/get/${CodeID}`).then((res) => {
  //   setDepartment(res.data)
  // }).catch((err)=>console.log(err))}

  

  const Go = (e) => {
    e.preventDefault();
    // Get();
    // alert("Department");
    
    setDepartmentName(Department[0].DepartmentName);
    setDesignation(Department[0].Designation);
    setBasicSalary(Department[0].BasicSalary)
   
    // console.log(Department[0].BasicSalary);
  }


  useEffect(()=>{axios.get(`http://localhost:5000/department/get/${CodeID}`).then((res) => {
    setDepartment(res.data)
  }).catch((err)=>console.log(err))},[CodeID])

  function sendData(e) {

    e.preventDefault();

    //alert("Insert");
    const newEmployee = {
      EmployeeID,
      EmployeeName,
      CodeID,
      DepartmentName,
      Designation,
      BasicSalary,
      ContactNo,
      Email,
      DateOfBirth,
      AccountNo,
      Address,
      Password
    }

    axios.post("http://localhost:5000/employee/add", newEmployee).then(() => {
      alert("Employee Added")
    }).catch((err) => {
      alert(err);
    })


    //console.log(newEmployee);
  }

  //const welcomePicture =new URL("./images/welcome.jpg",import.meta.url);

  return (


    <div className="container" id="container1">

      <div className="row">
        <div className="col-md-8 mx-auto">

          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col" id="header">
                  <center>
                    <h3 >ADD MEMBER</h3>
                  </center>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <hr />
                </div>
              </div>

              <form className="row g-3" id="form-color" >
                <div className="col-md-6">
                  <label for="validationDefault01" className="form-label">Employee ID</label>
                  <input type="text" name="EmployeeID" className="form-control" id="validationDefault01" placeholder="emp ID"
                    onChange={(e) => {
                      setEmployeeID(e.target.value);
                    }} />
                </div>
                <div className="col-md-6">
                  <label for="validationDefault02" className="form-label">Employee Name</label>
                  <input type="text" name="EmployeeName" className="form-control" id="validationDefault02" placeholder="emp name"
                    onChange={(e) => {
                      setEmployeeName(e.target.value);
                    }} />

                </div>
                <div className="col-md-7">
                  <label for="validationDefault03" className="form-label">Code ID <button class="btn btn-primary"
                    onClick={(e) => Go(e)}>Go</button></label>
                  <input type="text" name="CodeID" className="form-control" id="validationDefault03"
                    onChange={(e) => {
                      setCodeID(e.target.value);
                    }} required/>

                </div>
                <div></div>
                <div className="col-md-4">
                  <label for="validationDefault04" className="form-label">DepartmentName</label>
                  <input type="text" name="DepartmentName" className="form-control" value={DepartmentName} id="validationDefault04"
                    onChange={(e) => {
                      setDepartmentName(e.target.value);
                    }}readOnly />

                </div>
                <div className="col-md-4">
                  <label for="validationDefault05" className="form-label">Designation</label>
                  <input type="text" name="Designation" className="form-control" value={Designation} id="validationDefault05"
                    onChange={(e) => {
                      setDesignation(e.target.value);
                    }} readOnly/>

                </div>
                <div className="col-md-4">
                  <label for="validationDefault06" className="form-label">Basic Salary</label>
                  <input type="text" name="BasicSalary" className="form-control" value={BasicSalary} id="validationDefault06"
                    onChange={(e) => {
                      setBasicSalary(e.target.value);
                    }} />

                </div>
                <div className="col-md-6">
                  <label for="validationDefault07" className="form-label">Contact Number</label>
                  <input type="text" name="ContactNumber" className="form-control" id="validationDefault07" placeholder="07XXXXXXXX" TextMode="Phone" pattern="[0]{1}[0-7]{1}[0-9]{8}"
                    onChange={(e) => {
                      setContactNo(e.target.value);
                    }} />

                </div>
                <div className="col-md-6">
                  <label for="validationDefault13" className="form-label">Email</label>
                  <div className="input-group">
                    <span className="input-group-text" id="inputGroupPrepend2">@</span>
                    <input type="text" name="Email" class="form-control" id="validationDefault13"
                      aria-describedby="inputGroupPrepend2" TextMode="Email" placeholder="abc@gmail.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }} />

                  </div>
                </div>
                <div className="col-md-6">
                  <label for="validationDefault08" className="form-label">Date of Birth</label>
                  <input type="text" name="DateofBirth" className="form-control" id="validationDefault08" placeholder="dob" TextMode="Date"
                    onChange={(e) => {
                      setDateOfBirth(e.target.value);
                    }} />

                </div>
                <div className="col-md-6">
                  <label for="validationDefault09" className="form-label">Account no</label>
                  <input type="text" name="Accountno" className="form-control" id="validationDefault09"
                    aria-describedby="inputGroupPrepend2" placeholder="account no" TextMode="Phone" pattern="[0-9]{10}" title="Must have at 10 numbers"
                    onChange={(e) => {
                      setAccountNo(e.target.value);
                    }} />

                </div>
                <div className="col-md-6">
                  <label for="validationDefault10" className="form-label">Address</label>
                  <input type="text" name="Address" className="form-control" id="validationDefault10" placeholder="address"
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }} />

                </div>
                <div className="col-md-6">
                  <label for="validationDefault11" className="form-label">Password</label>
                  <input type="text" name="Password" className="form-control" id="validationDefault11" placeholder="pwd"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }} />

                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck12" />
                    <label className="form-check-label" for="invalidCheck2">
                      Agree to terms and conditions
                    </label>
                  </div>
                </div>

                <div className="col">

                </div> <button className="btn btn-primary" type="submit" onClick={sendData}>Submit</button>

              </form>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}
