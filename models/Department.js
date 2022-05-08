const mongoose = require('mongoose');

 const Schema = mongoose.Schema;
 const departmentSchema = new Schema({
   
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
}



})

const Department =mongoose.model("Department" , departmentSchema);
module.exports = Department;