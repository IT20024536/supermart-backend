// import React, { useState } from "react"
// import axios from "axios";
// import "./AddEmployee.css";
// export default function EmpProfile() {

//     const [EmployeeID, setEmployeeID] = useState("");
//     const [EmployeeName, setEmployeeName] = useState("");
//     const [CodeID, setCodeID] = useState("");
//     const [DepartmentName, setDepartmentName] = useState("");
//     const [Designation, setDesignation] = useState("");
//     const [BasicSalary, setBasicSalary] = useState("");
//     const [ContactNo, setContactNo] = useState("");
//     const [Email, setEmail] = useState("");
//     const [DateOfBirth, setDateOfBirth] = useState("");
//     const [AccountNo, setAccountNo] = useState("");
//     const [Address, setAddress] = useState("");
//     const [Password, setPassword] = useState("");




//     function sendData(e) {

//         e.preventDefault();

//         //alert("Insert");
//         const newEmployee = {
//             EmployeeID,
//             EmployeeName,
//             CodeID,
//             DepartmentName,
//             Designation,
//             BasicSalary,
//             ContactNo,
//             Email,
//             DateOfBirth,
//             AccountNo,
//             Address,
//             Password
//         }

//         axios.post("http://localhost:5000/employee/add", newEmployee).then(() => {
//             alert("Employee Added")
//         }).catch((err) => {
//             alert(err);
//         })


//         //console.log(newEmployee);
//     }

//     //const welcomePicture =new URL("./images/welcome.jpg",import.meta.url);

//     return (
//         <div class="container-fluid">
//             <div class="row">
//                 <div class="col-md-5">

//                     <div class="card">
//                         <div class="card-body">



//                             <div class="row">
//                                 <div class="col">
//                                     <center>
//                                         <h3 >Your Profile</h3>
//                                     </center>
//                                 </div>
//                             </div>

//                             <div class="row">
//                                 <div class="col">
//                                     <hr />
//                                 </div>
//                             </div>

//                             <form className="row g-3" id="form-color" onSubmit={sendData}>
//                                 <div className="col-md-6">
//                                     <label for="validationDefault01" className="form-label">Employee ID</label>
//                                     <input type="text" name="EmployeeID" className="form-control" id="validationDefault01" placeholder="emp ID"
//                                         onChange={(e) => {
//                                             setEmployeeID(e.target.value);
//                                         }} required />
//                                 </div>
//                                 <div className="col-md-6">
//                                     <label for="validationDefault02" className="form-label">Employee Name</label>
//                                     <input type="text" name="EmployeeName" className="form-control" id="validationDefault02" placeholder="emp name"
//                                         onChange={(e) => {
//                                             setEmployeeName(e.target.value);
//                                         }} required />

//                                 </div>
//                                 <div className="col-md-7">
//                                     <label for="validationDefault03" className="form-label">Code ID <button class="btn btn-primary"
//                                         type="Go">Go</button></label>
//                                     <input type="text" name="CodeID" className="form-control" id="validationDefault03"
//                                         onChange={(e) => {
//                                             setCodeID(e.target.value);
//                                         }} required />

//                                 </div>
//                                 <div></div>
//                                 <div className="col-md-4">
//                                     <label for="validationDefault04" className="form-label">DepartmentName</label>
//                                     <input type="text" name="DepartmentName" className="form-control" id="validationDefault04"
//                                         onChange={(e) => {
//                                             setDepartmentName(e.target.value);
//                                         }} required />

//                                 </div>
//                                 <div className="col-md-4">
//                                     <label for="validationDefault05" className="form-label">Designation</label>
//                                     <input type="text" name="Designation" className="form-control" id="validationDefault05"
//                                         onChange={(e) => {
//                                             setDesignation(e.target.value);
//                                         }} required />

//                                 </div>
//                                 <div className="col-md-4">
//                                     <label for="validationDefault06" className="form-label">Basic Salary</label>
//                                     <input type="text" name="BasicSalary" className="form-control" id="validationDefault06"
//                                         onChange={(e) => {
//                                             setBasicSalary(e.target.value);
//                                         }} required />

//                                 </div>
//                                 <div className="col-md-6">
//                                     <label for="validationDefault07" className="form-label">Contact Number</label>
//                                     <input type="text" name="ContactNumber" className="form-control" id="validationDefault07" placeholder="07XXXXXXXX" TextMode="Phone" pattern="[0]{1}[0-7]{1}[0-9]{8}"
//                                         onChange={(e) => {
//                                             setContactNo(e.target.value);
//                                         }} required />

//                                 </div>
//                                 <div className="col-md-6">
//                                     <label for="validationDefault13" className="form-label">Email</label>
//                                     <div className="input-group">
//                                         <span className="input-group-text" id="inputGroupPrepend2">@</span>
//                                         <input type="text" name="Email" class="form-control" id="validationDefault13"
//                                             aria-describedby="inputGroupPrepend2" TextMode="Email" placeholder="abc@gmail.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
//                                             onChange={(e) => {
//                                                 setEmail(e.target.value);
//                                             }} required />

//                                     </div>
//                                 </div>
//                                 <div className="col-md-6">
//                                     <label for="validationDefault08" className="form-label">Date of Birth</label>
//                                     <input type="text" name="DateofBirth" className="form-control" id="validationDefault08" placeholder="dob" TextMode="Date"
//                                         onChange={(e) => {
//                                             setDateOfBirth(e.target.value);
//                                         }} required />

//                                 </div>
//                                 <div className="col-md-6">
//                                     <label for="validationDefault09" className="form-label">Account no</label>
//                                     <input type="text" name="Accountno" className="form-control" id="validationDefault09"
//                                         aria-describedby="inputGroupPrepend2" placeholder="account no" TextMode="Phone" pattern="[0-9]{10}" title="Must have at 10 numbers"
//                                         onChange={(e) => {
//                                             setAccountNo(e.target.value);
//                                         }} required />

//                                 </div>
//                                 <div className="col-md-6">
//                                     <label for="validationDefault10" className="form-label">Address</label>
//                                     <input type="text" name="Address" className="form-control" id="validationDefault10" placeholder="address"
//                                         onChange={(e) => {
//                                             setAddress(e.target.value);
//                                         }} required />

//                                 </div>
//                                 <div className="col-md-6">
//                                     <label for="validationDefault11" className="form-label">Password</label>
//                                     <input type="text" name="Password" className="form-control" id="validationDefault11" placeholder="pwd"
//                                         onChange={(e) => {
//                                             setPassword(e.target.value);
//                                         }} required />

//                                 </div>
//                                 <div className="col-12">
//                                     <div className="form-check">
//                                         <input className="form-check-input" type="checkbox" value="" id="invalidCheck12" />
//                                         <label className="form-check-label" for="invalidCheck2">
//                                             Agree to terms and conditions
//                                         </label>
//                                     </div>
//                                 </div>

//                                 <div className="col">

//                                 </div> <button className="btn btn-primary" type="submit">Update</button>

//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>

//     )
// }

// <div class="col-md-7">
//     <div class="card">
//         <div class="card-body">

//             <div class="row">
//                 <div class="col">
//                     <center>
//                         <h3>Salary Details</h3>

//                     </center>
//                 </div>
//             </div>



//             <div class="row">
//                 <div class="col">
//                     <hr />
//                 </div>
//             </div>
//             <div class="row">
//                 <div class="col">
                    





//                 </div>
//             </div>
//         </div>
//     </div>
// </div>

