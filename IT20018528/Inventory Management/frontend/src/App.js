
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
 
 //import Updatesupplier from './components/Updatesupplier';
import {BrowserRouter as Router, Route} from 'react-router-dom'
//import Home from './components/home/Home'
 
 import Allitem from './components/Allitem';
 import Additem from './components/Additem';
 import cusview from './components/customerview';
  
 import edititem from './components/edititem';

function App() {
  return (
    
    <Router>
   <div>
     <Nav/>
     <Header/>
     
      
     <Route path = "/add" exact component={Additem}/>
     <Route path = "/all" exact component={Allitem}/>
     <Route path = "/cus" exact component={cusview}/>
    
     <Route path = "/edit/:id" exact component={edititem}/>
      
   </div>
   </Router>
  );
}

export default App;
