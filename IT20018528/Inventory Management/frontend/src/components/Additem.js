import React,{useState} from "react";
import axios from "axios";
import swal from 'sweetalert';
import './item.css';
 

export default function Additem(){
    const [ProductID, SetProductID] = useState("");
    const [ItemName, SetItemName] = useState("");
    const [Category, SetCategory] = useState("");
    const [UnitPrice, SetUnitPrice] = useState("");
    const [SellingPrice, SetSellingPrice] = useState("");
    const [Quantity, SetQuantity] = useState("");
    const [ReorderLevel, SetReorderLevel] = useState("");
    const [TotalAmount, SetTotalAmount] = useState("");

    function sendData(e){
      swal({
        title: "Scuccess!",
        text:"Product Sccessfully Added",
        icon:"success",
        button:"OK",

      });
        e.preventDefault()

        const newItem = {
          ProductID,
          ItemName,
          Category,
          UnitPrice,
          SellingPrice,
          Quantity,
          ReorderLevel,
          TotalAmount,

      
        }
        
        axios.post("http://localhost:5000/item/add", newItem).then(()=>{
            //alert("item added")
        }).catch((err)=>{
            alert(err)

        })
    }



    return(
        
       
        <div className = "container">
          
            <h1><center>  ADD Product Details</center></h1>
          <br></br>
          <br></br>
            <form onSubmit={sendData}>
  <div class="mb-3">
    <label for="ProductID" class="form-label"> Product ID </label>
    <input type="string"   class="form-control" id="ProductID"  onChange ={(e)=>{

        SetProductID(e.target.value);
    }} ></input>
   
  </div>
  <div class="mb-3">
    <label for="ItemName" class="form-label">Item Name</label>
    <input type="string"  class="form-control" id="ItemName" onChange ={(e)=>{

    SetItemName(e.target.value);
}}></input>
  </div>
  
  <div class="mb-3">
    <label for=" Category" class="form-label">Category</label>
    <input type="string"  class="form-control" id=" Category"  onChange ={(e)=>{

SetCategory(e.target.value);
}}></input>
  </div>

  <div class="mb-3">
    <label for=" UnitPrice" class="form-label">Unit Price</label>
    <input type="string"  class="form-control" id=" UnitPrice"  onChange ={(e)=>{

SetUnitPrice(e.target.value);
}}></input>
  </div>

  <div class="mb-3">
    <label for=" SellingPrice" class="form-label">Selling Price</label>
    <input type="string"  class="form-control" id=" SellingPrice"  onChange ={(e)=>{

SetSellingPrice(e.target.value);
}}></input>
  </div>

  <div class="mb-3">
    <label for=" Quantity" class="form-label">Quantity</label>
    <input type="string"  class="form-control" id=" Quantity"  onChange ={(e)=>{

SetQuantity(e.target.value);
}}></input>
  </div>

  <div class="mb-3">
    <label for="ReorderLevel" class="form-label">Reorder Level</label>
    <input type="string"  class="form-control" id="ReorderLevel" onChange ={(e)=>{

SetReorderLevel(e.target.value);
}}></input>
  </div>


  <div class="mb-3">
    <label for="TotalAmount" class="form-label">Total Amount</label>
    <input type="string"  class="form-control" id="TotalAmount" onChange ={(e)=>{

SetTotalAmount(e.target.value);
}}></input>
  </div>

  <button type="submit" class="btn btn-primary">Submit  </button>
</form>
     
        </div>

        
    )
}