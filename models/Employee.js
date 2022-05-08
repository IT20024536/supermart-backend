 const mongoose = require('mongoose');

 const Schema = mongoose.Schema;
 const employeeSchema = new Schema({
   
EmployeeID:{
    type: String,
    required: true
},
EmployeeName:{
    type: String,
    required: true 
},
CodeID:{
    type:String,
    required:true
},
DepartmentName:{
    type:String,
    required:true
},
Designation:{
    type:String,
    required:true
},
BasicSalary:{
    type:Number,
    required:true
},
ContactNo:{
    type:String,
    required:true
},
Email:{
    type:String,
    required:true
},
DateOfBirth:{
    type:String,
    required:true
},
AccountNo:{
    type:String,
    required:true
},
Address:{
    type:String,
    required:true
},
Password:{
    type:String,
    required:true
}

})

const Employee =mongoose.model("Employee" , employeeSchema);
module.exports = Employee;