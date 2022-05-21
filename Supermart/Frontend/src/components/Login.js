// import React, { useState } from "react";
// import loginpic from "../images/welcome.jpg";
// import "./Login.css"
// const Login = () => {
//     const[EmployeeID, setEmployeeID]=useState('');
//     const[Password, setPassword]=useState('');

//     const loginUser=async(e)=>{
//         e.preventDefault();
//         const res = await fetch('/login',{
//             method="POST",
//             headers={
//                 "Content-Type":"application/json"
//             },
//         })
//     }



//     return (

//         <div className="container" id="container9">

//             <div className="row">
//                 <div className="col-md-8 mx-auto">

//                     <div className="card">
//                         <div className="card-body">
//                             <div className="row">
//                                 <div className="col">
//                                     <center>
//                                         <h3 >Login Employee</h3>
//                                     </center>
//                                 </div>
//                             </div>

//                             <div className="row">
//                                 <div className="col">
//                                     <hr />
//                                 </div>
//                             </div>
//                             <form  method="POST" className="row " >
//                                 <center>
//                                     <div className="col-md-7">
//                                         <label for="validationDefault10" className="form-label">UserName</label>
//                                         <input type="text" className="form-control" value={EmployeeID} id="validationDefault10" autoComplete="off" 
//                                         onChange={(e)=>setEmployeeID(e.target.value)}/>
//                                     </div>
//                                     <div className="col-md-7">
//                                         <label for="validationDefault11" className="form-label">Password</label>
//                                         <input type="text" className="form-control" value={Password} id="validationDefault11" autoComplete="off" 
//                                         onChange={(e)=>setPassword(e.target.value)}/>
//                                     </div>

//                                     <div className="col">

//                                     </div>

//                                     <div  className="form-group form-button" >
//                                         <input type="submit" name="submit" id="submit" className="form-submit" 
//                                          value="Log In" onClick={loginUser}/> 
//                                     </div>
//                                 </center>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div >
//     )

// }
// export default Login