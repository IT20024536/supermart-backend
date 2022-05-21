const router =require("express").Router();
const { route } = require("express/lib/application");
// const { request } = require("express");
let Department = require("../models/Department");

//http://localhost:5000/department/add

router.route("/add").post((req,res)=>{

    
    const CodeID = req.body.CodeID;
    const DepartmentName = req.body.DepartmentName;
    const Designation = req.body.Designation;
    const BasicSalary = Number(req.body.BasicSalary);
   


    const newDepartment = new Department({
        
        CodeID,
        DepartmentName,
        Designation,
        BasicSalary
        
    })

    newDepartment.save().then(()=>{
        res.json("Department Added")
    }).catch((err)=>{
        console.log(err);
    })

})


router.route("/").get((req,res)=>{

    Department.find().then((departments)=>{
        res.json(departments)
    }).catch((err)=>{
        console.log(err)
    })

})

//http://localhost:5000/department/update
router.route("/update/:id").put(async(req,res) =>{
    let CodeID = req.params.id;
    const {DepartmentName,Designation,BasicSalary}=req.body;
    
    const updateDepartment ={
        
        "DepartmentName" :DepartmentName, 
        "Designation" :Designation,
        "BasicSalary" :BasicSalary
    }

    const update = await Department.findByIdAndUpdate(CodeID,updateDepartment).then(()=>{
        res.status(200).send({status: "CodeID Updated" }) //CodeID : update})

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data", error: err.message});
    })

})

router.route("/delete/:id").delete(async(req,res)=>{
    let CodeID = req.params.id;

    await Department.findByIdAndDelete(CodeID).then(()=>{
        res.status(200).send({status:"Department Permantly Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete Department", error: err.message});
    })
})

router.route("/get/:id").get(async(req, res)=>{
    let CodeID = req.params.id;
    console.log(CodeID);
    const department = await Department.find({"CodeID":CodeID})
    .then((data)=>{
        res.status(200).send(data)
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with get Department", error:err.message});
    })
})


// router.route("/gets/:id").get((req,res)=>{

//     Department.find(CodeID).then((departments)=>{
//         res.json(departments)
//     }).catch((err)=>{
//         console.log(err)
//     })

// })

module.exports = router;



