import React,{useState,useEffect} from "react";
import axios from "axios";
//import Header from "./Header";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import './Additem.css';
import {Link} from 'react-router-dom';
import jspdf from 'jspdf'
import "jspdf-autotable"
import { Button } from "react-bootstrap";
 
import swal from 'sweetalert';

export default function AllItem(){

    const [item,setItems ] = useState([]);
    const [searchTerm, setsearchTerm] = useState("");


    const deleteItem=(id) =>{
        axios.delete(`http://localhost:5000/item/delete/${id}`).then(()=>{
            swal({
                title: "Are you sure?",
                text: "The Product Will be Deleted from Product List",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                  swal("The file has been deleted!", 
                    "success",
                  );  setTimeout(function(){
                    window.location.reload();
                   },1000);
                } else {
                  swal("File Is Not Deleted");
                }
              });
        // ;
        })
      }



    useEffect(() => {
        
        function getItems(){
        axios.get("http://localhost:5000/item/all").then((res) => {
            setItems(res.data);
            }
        ).catch((err) => {
            alert(err.message);
        })
    }
    getItems();
    }, [])
// genarate pdf

const generatePDF = tickets => {

    const doc = new jspdf();
    const tableColumn = [ "Product ID " , "Item Name", "Category",  "Quantity", "Reorder Level",   ];
    const tableRows = [];
    const date = Date().split(" ");
    const dateStr = date[1] + "-" + date[2] + "-" + date[3];

    tickets.map(ticket => {
        const ticketData = [
            ticket.ProductI,
            ticket.ItemName,
            ticket.Category,
            
            ticket.Quantity,
            ticket.ReorderLevel,
            
             
        ];
        tableRows.push(ticketData);
    })
    doc.text("Supermart.lk", 70, 8).setFontSize(13);
    doc.text("Stock Details Report", 14, 16).setFontSize(13);
    doc.text(`Report Genarated Date - ${dateStr}`, 14, 23);
    //right down width height
    //doc.addImage(img, 'JPEG', 170, 8, 25, 25);
    doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY:35});
    doc.save("Stock Details Report.pdf");
};
    return (
        <>
     
   <div class="buttonn">
   <button type="button" class="btn btn-secondary btn-sm" onClick={() => generatePDF(item)} >Print Report</button>
   <br></br>
  
   </div>
       <div class="lft">
<div class="card" >
<br></br>
   <br></br>
   <div class="head">
               
               <h3> Stock Details Dashboard </h3>
               
               </div>
               
   <br></br>
   <br></br>
   
<input type="text" placeholder="Search.." className="form-control" style={{margintop:50,marginbottom:20,width:"50%"}}
      onChange = {(e) => {
          setsearchTerm(e.target.value);
      }}/>
   <br></br>
   <button type="text" class="btn btn-secondary btn-sm"> Items Count : {item.length} </button>
   <br></br>
   <table class="table table-bordered">
        <table class="table table-hover" >
            
                   <thead>
                       
                       <tr>
                           <th >Product ID</th>
                           <th >Item Name</th>
                           <th>Category</th>
                           
                           <th>Quantity</th>
                           <th>Reorder Level</th>
                           
                            

                       </tr>
                   </thead>
                   <tbody>
                   {
                           item.filter(val=>{
                               if(searchTerm === ''){
                                   return val;
                               }else if(
                                   val.ProductID.toLowerCase().includes(searchTerm.toLowerCase()) 
                                    
                                    

                               ){
                                   return val;
                               }
                               }).map(function (f) {
                               return <tr>
                                   

                                   <td >{f. ProductID}</td>
                                   <td >{f.ItemName} </td>
                                   <td >{f.Category} </td>
                                    
                                   <td >{f.Quantity} </td>
                                   <td >{f.ReorderLevel} </td>
                                    
                                    

                      

       

                               </tr>

                           })
                       }
                   </tbody>
                   </table>
               </table>
                     
               
                   
</div>
</div>

       </>
   
   )








}