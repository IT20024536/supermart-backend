import './App.css';
import AddEmployee from './components/AddEmployee';
import AdminNavBar from './components/AdminNavBar';
import AllEmployees from './components/AllEmployees';
import UpdateEmployee from './components/UpdateEmployee';
import EmpProfile from './components/EmpProfile';
import AddDepartment from './components/AddDepartment';
import UpdateDepartment from './components/UpdateDepartment';
import AllDepartments from './components/AllDepartments';
import AddSalary from './components/AddSalary';
import AllSalaries from './components/AllSalaries';
import AdminMngDash from './components/AdminMngDash';
// import Login from './components/Login';
//import Header from './components/Header';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
     <Router>
    <div>
      <AdminNavBar/>
      <Switch>
      
      <Route path="/add" component={AddEmployee} exact/>
      <Route path="/" component={AllEmployees} exact/> 
      <Route path="/update/:id" component={UpdateEmployee} exact/> 
      <Route path="/prop" component={EmpProfile} exact/>  
      <Route path="/addD" component={AddDepartment} exact/>
      <Route path="/update/:id" component={UpdateDepartment} exact/>
      <Route path="/alld" component={AllDepartments} exact/>
      <Route path="/addS" component={AddSalary} exact/>
      <Route path="/alls" component={AllSalaries} exact/>
      <Route path="/dash" component={AdminMngDash} exact/>
      {/* <Route path="/login" component={Login} exact/> */}

      {/* <Route path="/home" component={AdminDashBoard}exact/> */}
      {/* <Header/> */}
      {/* <AddEmployee/> */}
      
     </Switch>
    </div>
  </Router>
  );
}

export default App;
