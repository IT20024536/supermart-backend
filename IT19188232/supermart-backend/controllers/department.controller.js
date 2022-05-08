const Department = require("../models/Department");

class DepartmentController {

    createDepartment = async (req, res) => {
        try {
            const newDepartment = new Department({
               
                CodeID : req.body.CodeID,
                DepartmentName : req.body.DepartmentName,
                Designation:req.body.Designation,
                BasicSalary : Number(req.body.BasicSalary),
               
                
   
                
            })
        
            await newDepartment.save();
        
            res.status(201).send({
                newDepartment,
                message: "Department Created"
            })
        } catch (error) {
            res.status(500).send({
                message: "Department Not Created",
                error: error.message
            })
        }
    }

}

module.exports = new DepartmentController();