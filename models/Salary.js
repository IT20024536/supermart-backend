const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const salarySchema = new Schema({
  
EmployeeID:{
   type: String,
   required: true
},
EmployeeName:{
   type: String,
   required: true 
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
Date:{
   type:String,
   required:true
},
AccountNo:{
   type:String,
   required:true
},
DearnessAllowance:{
   type:String,
   required:true
},
EntertainmentAllowance:{
   type:String,
   required:true
},
MedicalAllowance:{
   type:String,
   required:true
},
NetSalary:{
   type:String,
   required:true
}

})

const Salary =mongoose.model("Salary" ,salarySchema);
module.exports = Salary;