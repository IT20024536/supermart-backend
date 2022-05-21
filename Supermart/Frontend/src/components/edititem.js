//import React,{useState,useEffect} from "react";

import swal from 'sweetalert';
import './item.css';
import React, { Component } from 'react';
import axios from 'axios';




 

export default class EditItem extends Component {
    constructor(props) {
        super(props);

        this.onChangeProductID = this.onChangeProductID.bind(this);
        this.onChangeItemName = this.onChangeItemName.bind(this);
        this.onChangeUnitPrice = this.onChangeUnitPrice.bind(this);
        this.onChangeSellingPrice = this.onChangeSellingPrice.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeReorderLevel = this.onChangeReorderLevel.bind(this);
        this.onChangeTotalAmount = this.onChangeTotalAmount.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            ProductID: '',
            ItemName: '',
            Category: '', 
            UnitPrice: '',
            SellingPrice: '',
            Quantity: '',
            ReorderLevel: '',
            TotalAmount: '',
            Item: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/item/' + this.props.match.params.id)
            .then(res => {

                console.log(this.props.match.params.id)
                this.setState({
                    ProductID: res.data. ProductID,
                    ItemName: res.data.ItemName,
                    Category: res.data.Category,
                    UnitPrice: res.data.UnitPrice,
                    SellingPrice: res.data.SellingPrice,
                    Quantity: res.data.Quantity,
                    ReorderLevel: res.data.ReorderLevel,
                    TotalAmount: res.data.TotalAmount,

                })
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/item/all')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        Item: response.data.map(Item => Item.ProductID),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

    onChangeProductID(e) {
        this.setState({
            ProductID: e.target.value
        })
    }

    onChangeItemName(e) {
        this.setState({
            ItemName: e.target.value
        })
    }

    onChangeCategory(e) {
        this.setState({
            Category: e.target.value
        })
    }

   

    onChangeUnitPrice(e) {
        this.setState({
            UnitPrice: e.target.value
        })
    }

    onChangeSellingPrice(e) {
        this.setState({
            SellingPrice: e.target.value
        })
    }

    onChangeQuantity(e) {
        this.setState({
            Quantity: e.target.value
        })
    }

    onChangeReorderLevel(e) {
        this.setState({
            ReorderLevel: e.target.value
        })
    }

    onChangeTotalAmount(e) {
        this.setState({
            TotalAmount: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const Item = {
            ProductID: this.state.ProductID,
            ItemName: this.state.ItemName,
            Category: this.state.Category,
            UnitPrice: this.state.UnitPrice,
            SellingPrice: this.state.SellingPrice,
            Quantity: this.state.Quantity,
           ReorderLevel: this.state.ReorderLevel,
            TotalAmount: this.state.TotalAmount,



        }

        console.log(Item);

        axios.post('http://localhost:5000/item/update/' + this.props.match.params.id, Item)
            .then(res => console.log(res.data));
        alert("Edit Successfully")
        window.location = '/all';
    }

    
    render() {
        return (<div className = "container" >
            <h3><center> EDIT ITEM</center> </h3> 
            <br></br>
            <br></br>
            <br></br>
            <form onSubmit = { this.onSubmit }>
            <div class="mb-3">
            <label > Item Name: </label> 
             <input type = "text" required className = "form-control" value = { this.state.ItemName } onChange = { this.onChangeItemName }/>
              </div> 
              <div class="mb-3">
            <label> Category: </label>
             <input type = "text"required className = "form-control"value = { this.state.Category } onChange = { this.onChangeCategory}/> 
             </div> 
             <div class="mb-3">
            <label> Unit Price: </label> 
            <input type = "text"className = "form-control "value = { this.state.UnitPrice }onChange = { this.onChangeUnitPrice }/> 
            </div>

            <div class="mb-3">
            <label > Selling Price: </label>
             <input type = "text"className = "form-control"value = { this.state.SellingPrice }onChange = { this.onChangeSellingPrice }/>
              </div>

              <div class="mb-3">
            <label > Quantity: </label>
             <input type = "text"className = "form-control"value = { this.state.Quantity }onChange = { this.onChangeQuantity }/>
              </div>

            <div class="mb-3">
            <label > Reorder Level: </label>
             <input type = "text"className = "form-control"value = { this.state.ReorderLevel }onChange = { this.onChangeReorderLevel }/>
              </div>
           
              <div class="mb-3">
            <label > Total Amount: </label>
             <input type = "text"className = "form-control"value = { this.state.TotalAmount }onChange = { this.onChangeTotalAmount }/>
              </div>

            <br>


            </br> 



        
            <div className = "form-group">
            <input type = "submit"value = "Edit"className = "btn btn-primary"/>
            </div> 
            </form > 
            </div>

        
)
}
}