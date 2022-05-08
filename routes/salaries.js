const router =require("express").Router();
const { route } = require("express/lib/application");
// const { request } = require("express");
let Salary = require("../models/Salary");

//http://localhost:5000/salary/add

router.route("/add").post((req,res)=>{

    const EmployeeID = req.body.EmployeeID;
    const EmployeeName = req.body.EmployeeName;
    const DepartmentName = req.body.DepartmentName;
    const Designation = req.body.Designation;
    const BasicSalary = Number(req.body.BasicSalary);
    const Date = req.body.Date;
    const AccountNo = req.body.AccountNo;
    const DearnessAllowance = req.body.DearnessAllowance;
    const EntertainmentAllowance = req.body.EntertainmentAllowance;
    const MedicalAllowance = req.body.MedicalAllowance;
    const NetSalary = req.body.NetSalary;


    const newSalary = new Salary({
        EmployeeID,
        EmployeeName,
        DepartmentName,
        Designation,
        BasicSalary,
        Date,
        AccountNo,
        DearnessAllowance,
        EntertainmentAllowance,
        MedicalAllowance,
        NetSalary
    })

    newSalary.save().then(()=>{
        res.json("Salary Added")
    }).catch((err)=>{
        console.log(err);
    })

})


router.route("/").get((req,res)=>{

    Salary.find().then((salaries)=>{
        res.json(salaries)
    }).catch((err)=>{
        console.log(err)
    })

})

//http://localhost:5000/salary/update
router.route("/update/:id").put(async(req,res) =>{
    let employeeID = req.params.id;
    const {EmployeeID,EmployeeName,DepartmentName,Designation,BasicSalary,Date,AccountNo,DearnessAllowance,EntertainmentAllowance,MedicalAllowance,NetSalary}=req.body;
    
    const updateDate ={
        "EmployeeID" :EmployeeID,
        "EmployeeName":EmployeeName,
        "DepartmentName" :DepartmentName, 
        "Designation" :Designation,
        "BasicSalary" :BasicSalary,
        "Date":Date,
        "AccountNo":AccountNo,
        "DearnessAllowance":DearnessAllowance,
        "EntertainmentAllowance":EntertainmentAllowance,
        "MedicalAllowance":MedicalAllowance,
        "NetSalary":NetSalary
    }

    const update = await Salary.findByIdAndUpdate(employeeID,updateDate).then(()=>{
        res.status(200).send({status: "NetSalary Updated"}) //CodeID : update})

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data", error: err.message});
    })

})

router.route("/delete/:id").delete(async(req,res)=>{
    let EmployeeID = req.params.id;

    await Salary.findByIdAndDelete(EmployeeID).then(()=>{
        res.status(200).send({status:"Employee Permantly Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete Employee", error: err.message});
    })
})

router.route("/get/:id").get(async(req, res)=>{
    let employeeID = req.params.id;
    const employee = await Salary.findById(employeeID)
    .then(()=>{
        res.status(200).send({status:"Employee fetched", employee: employee})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status:"Error with get employee", error:err.message});
    })
})

module.exports = router;



