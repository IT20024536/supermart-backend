import React, { useState,useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import "./AllSalaries.css";
import Modle from './Salmodal';
//import ItemcardMat from "./ItemcardMat"; 
//import dataMat from "./dataMat";

const AllSalaries=(props)=>{
    const [salaries, setSalaries] = useState([]);
    const [salDet, setSalDet] = useState("");
    const [editForm, showEditForm] = useState(false);
      // search function
  const [results, setResults] = useState([])
  const [searchInput, setSearchInput] = useState('')

    useEffect(()=>{
        loadUsers();
    },[]);
 //on page load display all records
    const loadUsers = async ()=>{
        const result = await axios.get('http://localhost:5000/salary/');
        setSalaries(result.data.reverse());
    };

    function deleteSalaries(id){
        // if(
        //     window.confirm("Are you sure that you wanted to delete that Employee")
        // )
        axios.delete(`http://localhost:5000/salary/delete/${id}`).then(()=>{
        /*alert("Delete Successful");*/
        
        }).catch((err)=>{
            console.log(err);
        })
        
        window.location.reload();
        alert("Salary deleted successfully!");
        
    }
  
//define useEffect method for filter data for search function
useEffect(() => {

  if (searchInput === '') {
    setResults(salaries)
  } else {
    let results =salaries.filter(
      (salaries) =>
      salaries.EmployeeID.toLowerCase().includes(searchInput) ||
      salaries.EmployeeName.toLowerCase().includes(searchInput) 
       
   

      )
      setResults(results)
}
}, [searchInput, salaries])

 //start of the return   

    return (
      <div className="container" id="container6">


{/*start of the table view card*/}
<div className="col d-flex justify-content-center">
  <div className="card5" style={{width:"1200px"}}>
 


  <div className="card-body">
  <h5 className="card-title">All Salary Details</h5>
  <h6 className="card-subtitle mb-2 text-muted">* This is the entire employee salary details of the company..!</h6>
  {/*Search Function*/}

{/*<input className='form-control' type='search' placeholder='Search inventory' name='searchQue' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>*/}
<div class="input-group rounded"  style={{width:'500px', alignContent:'center'}}>
  <input type="search" className="form-control rounded" placeholder="Search employee here.." aria-label="Search"
  aria-describedby="search-addon"  name='searchQue' value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} />
  <span class="input-group-text border-0" id="search-addon">
    <i class="fas fa-search"></i>
  </span>
</div><br/>

  {/*Table view for display all the data*/}
  <table className="table table-hover table-bordered border-primary">
  <thead>
    <tr>
      {/*<th scope="col">Item ID</th>*/}
      <th scope="col">EmployeeID</th>
        <th scope="col">EmpName</th>
        <th scope="col">DepName</th>
        <th scope="col">Designation</th>
        <th scope="col">BasicSal</th>
        <th scope="col">Date</th>
        {/* <th scope="col">AccountNo</th> */}
        <th scope="col">DA</th>
        <th scope="col">EA</th>
        <th scope="col">MA</th>
        <th scope="col">NetSal</th>
        
    </tr>
  </thead>
  <tbody>
    {results.map((user,index)=>(
      <tr className="raw1">{/*<td>{user._id}</td>*/}
      <td>{user.EmployeeID}</td>
          <td>{user.EmployeeName}</td>
          <td>{user.DepartmentName}</td>
          <td>{user.Designation}</td>
          <td>{user.BasicSalary}</td>
          <td>{user.Date}</td>
          {/* <td>{user.AccountNo}</td> */}
          <td>{user.DearnessAllowance}</td>
          <td>{user.EntertainmentAllowance}</td>
          <td>{user.MedicalAllowance}</td>
          <td>{user.NetSalary}</td>
      <td>
 

      <th scope="col">
      {/* <Link className="edit" to={`/update/${user._id}`} > */}
        <button className="btn btn-primary" onClick={() => {
                    showEditForm(true);
                    setSalDet(user)
                  }}>Update</button>
        
        {/* </Link></th> */}</th>
        <th></th>
        <th scope="col">
      <Link className="delete" onClick={()=>deleteSalaries(user._id)}>
        
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
            <a href="/addS" button type="submit" className="btn btn-success">Add Salary</a></th>
            <th></th>
           
            </tr></table>

<Modle
        show={editForm}
        onHide={() => showEditForm(false)}
        salDet={salDet}
      />
    </div>
    </div>

</div>
 </div>

    )

}

export default AllSalaries; 






















































// import axios from "axios";
// import React , {useState,useEffect}from "react";

// export default function AllEmployees(){

//     const[employees, setEmployees] = useState([]);

//     useEffect(()=>{
//         function getEmployees(){
//             axios.get("http://localhost:5000/employee/").then((res)=>{
//                 setEmployees(res.data);
//             }).catch((err)=>{
//                 alert(err.message);
//             })
//         }
//         getEmployees();

//     }, [])

//     return(
//         <div>
//             <h1>All Employees</h1>
//         </div>
//     )
// }


// import React, {Component} from 'react';

// import axios from "axios";
// import { Toast } from 'react-bootstrap';





// class AllEmployees extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             employee: [],
//             search: '',
//             filter:'',
//             filteredData:''
//         }
//         this.handleChange=this.handleChange.bind(this);
//     }

//     componentDidMount() {
//         axios.get('http://localhost:5000/employee/')
//             .then(response => {
//                // console.log(employee);
//                 this.setState({employee: response.data.data});
//             }).catch((err)=>{
//                 alert(err.message);
               
//             })
//     }

//     handleChange = event => {
//         this.setState({ filter: event.target.value });
//     };

    

    


//         return (
//             <div className="container">
//                 <br/>
//                 <div className="navbar justify-content-between alert alert-primary"  role="alert">
//                     <h2>ALL EMPLOYEES DETAILS</h2>
//                    </div>
//                 <table className="table table-striped table-hover table-dark  table-bordered ">
//                     <thead className="thead-dark">
//                     <tr>
//                         <th scope="col">#</th>
//                         <th scope="col">EmployeeID</th>
//                         <th scope="col">EmployeeName</th>
//                         <th scope="col">CodeID</th>
//                         <th scope="col">Department</th>
//                         <th scope="col">Designation</th>
//                         <th scope="col">BasicSalary</th>
//                         <th scope="col">ContactNo</th>
//                         <th scope="col">Email</th>
//                         <th scope="col">DateOfBirth</th>
//                         <th scope="col">AccountNo</th>
//                         <th scope="col">Address</th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                     {this.state.employee.length > 0 && this.state.filteredData.map((employee, index)=>(
//                         <tr key={index}>
//                             <th scope="row" >{index + 1}</th>
//                             <td>{employee.EmployeeID}</td>
//                             <td>{employee.EmployeeName}</td>
//                             <td>{employee.CodeID}</td>
//                             <td>{employee.Department}</td>
//                             <td>{employee.Designation}</td>
//                             <td>{employee.BasicSalary}</td>
//                             <td>{employee.ContactNo}</td>
//                             <td>{employee.Email}</td>
//                             <td>{employee.DateOfBirth}</td>
//                             <td>{employee.AccountNo}</td>
//                             <td>{employee.Address}</td>
                          
//                         </tr>
//                         <
//                     ))}
//                     </tbody>
                    
//                 </table>
            
                
           
//         );
//     }
// }

// export default AllEmployees;
