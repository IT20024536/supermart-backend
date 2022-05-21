const router =require("express").Router();
const { route } = require("express/lib/application");
// const { request } = require("express");
let Employee = require("../models/Employee");

//http://localhost:5000/employee/add

router.route("/add").post((req,res)=>{

    const EmployeeID = req.body.EmployeeID;
    const EmployeeName = req.body.EmployeeName;
    const CodeID = req.body.CodeID;
    const DepartmentName = req.body.DepartmentName;
    const Designation = req.body.Designation;
    const BasicSalary = Number(req.body.BasicSalary);
    const ContactNo = req.body.ContactNo;
    const Email = req.body.Email;
    const DateOfBirth = req.body.DateOfBirth;
    const AccountNo = req.body.AccountNo;
    const Address = req.body.Address;
    const Password = req.body.Password;


    const newEmployee = new Employee({
        EmployeeID,
        EmployeeName,
        CodeID,
        DepartmentName,
        Designation,
        BasicSalary,
        ContactNo,
        Email,
        DateOfBirth,
        AccountNo,
        Address,
        Password
    })

    newEmployee.save().then(()=>{
        res.json("Employee Added")
    }).catch((err)=>{
        console.log(err);
    })

})


router.route("/").get((req,res)=>{

    Employee.find().then((employees)=>{
        res.json(employees)
    }).catch((err)=>{
        console.log(err)
    })

})

router.route("/update/:id").put(async (req, res) => {

    let employeeID = req.params.id;

    const { EmployeeID,EmployeeName,CodeID,DepartmentName,Designation,BasicSalary,ContactNo,Email,DateOfBirth,AccountNo,Address } = req.body;



    const UpdateEmployee = {

        EmployeeID,
        EmployeeName,
        CodeID,
        DepartmentName,
        Designation,
        BasicSalary,
        ContactNo,
        Email,
        DateOfBirth,
        AccountNo,
        Address
    }



    const update = await Employee.findByIdAndUpdate(employeeID, UpdateEmployee).then(() => {

        res.status(200).send({ status: "Employee updated" })

    }).catch((err) => {

        console.log(err);

        res.status(500).send({ status: "Error with updating data", error: err.message });

    })



})

//http://localhost:5000/employee/update
// router.route("/update/:id").put(async(req,res) =>{
//     let employeeID = req.params.id;
//     const {EmployeeID,EmployeeName, CodeID,Department,Designation,BasicSalary,ContactNo,Email,DateOfBirth,AccountNo,Address}=req.body;
    
//     const updateCodeID ={
//         "EmployeeID":EmployeeID,
//         "EmployeeName":EmployeeName,
//         "CodeID" :CodeID,
//         "Department" :Department, 
//         "Designation" :Designation,
//         "BasicSalary" :BasicSalary,
//         "ContactNo":ContactNo,
//         "Email":Email,
//         "DateOfBirth":DateOfBirth,
//         "AccountNo":AccountNo,
//         "Address":Address
//     }

//     const update = await Employee.findByIdAndUpdate(employeeID,updateCodeID).then(()=>{
//         res.status(200).send({status: "CodeID Updated", }) //CodeID : update})

//     }).catch((err)=>{
//         console.log(err);
//         res.status(500).send({status:"Error with updating data", error: err.message});
//     })

// })

router.route("/delete/:id").delete(async(req,res)=>{
    let EmployeeID = req.params.id;

    await Employee.findByIdAndDelete(EmployeeID).then(()=>{
        res.status(200).send({status:"Employee Permantly Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete Employee", error: err.message});
    })
})

router.route("/get/:id").get(async(req, res)=>{
    let EmployeeID = req.params.id;
    const employee = await Employee.find({"EmployeeID":EmployeeID})
    .then((data)=>{
        res.status(200).send(data)
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with get employee", error:err.message});
    })
})

module.exports = router;



