import React, { useState } from "react"
import axios from "axios";
import "./AddDepartment.css"

export default function AddDepartment() {

  const [CodeID, setCodeID] = useState("");
  const [DepartmentName, setDepartmentName] = useState("");
  const [Designation, setDesignation] = useState("");
  const [BasicSalary, setBasicSalary] = useState("");
  

  function sendData(e) {

    e.preventDefault();

    //alert("Insert");
    const newDepartment = {

      CodeID,
      DepartmentName,
      Designation,
      BasicSalary
     
    }

    axios.post("http://localhost:5000/department/add",newDepartment).then(() => {
      alert("Department Added")
    }).catch((err) => {
      alert(err);
    })
  

  //console.log(newEmployee);
  }



  return (
    <div className="container" id="container3">
      
      <div className="row">
              <div className="col-md-8 mx-auto">

                  <div className="card">
                      <div className="card-body">
                          <div className="row">
                              <div className="col">
                                  <center>
                                      <h3 >ADD DEPARTMENT</h3>
                                  </center>
                              </div>
                          </div>

                          <div className="row">
                              <div className="col">
                                  <hr />
                              </div>
                          </div>
            <form className="full-window" onSubmit={sendData}>
        
        <div className="col-md-7">
          <label for="validationDefault03" className="form-label">Code ID </label>
          <input type="text" name="CodeID" className="form-control" id="validationDefault03" 
           onChange={(e)=>{
            setCodeID(e.target.value);
          }} required/>
         
        </div>
        <div></div>
        <div className="col-md-4">
          <label for="validationDefault04" className="form-label">DepartmentName</label>
          <input type="text" name="DepartmentName"  className="form-control" id="validationDefault04"  
           onChange={(e)=>{
            setDepartmentName(e.target.value);
          }} required/>
          
        </div>
        <div className="col-md-4">
          <label for="validationDefault05" className="form-label">Designation</label>
          <input type="text" name="Designation" className="form-control" id="validationDefault05" 
           onChange={(e)=>{
            setDesignation(e.target.value);
          }} required/>
          
        </div>
        <div className="col-md-4">
          <label for="validationDefault06" className="form-label">Basic Salary</label>
          <input type="text" name="BasicSalary" className="form-control" id="validationDefault06"
           onChange={(e)=>{
            setBasicSalary(e.target.value);
          }} required/>
          
        </div>
        
        <div className="col">
         
        </div> <button className="btn btn-primary"  type="submit">Submit</button>
      
      </form>
    </div>
    </div>
    </div>
    </div>
   
    </div>
         
    )
}
