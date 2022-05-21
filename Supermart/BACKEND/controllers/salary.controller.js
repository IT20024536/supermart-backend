const Salary = require("../models/salary.model");

class SalaryController {

    createSalary = async (req, res) => {
        try {
            const newSalary = new Salary({
                EmployeeID:req.body.EmployeeID,
                EmployeeName : req.body.EmployeeName,
                DepartmentName : req.body.DepartmentName,
                Designation:req.body.Designation,
                BasicSalary : Number(req.body.BasicSalary),
                Date : req.body.Date,
                AccountNo : req.body.AccountNo,
                DearnessAllowance : req.body.DearnessAllowance,
                EntertainmentAllowance : req.body.EntertainmentAllowance,
                MedicalAllowance :req.body.MedicalAllowance,
                NetSalary : req.body.NetSalary,
                
   
                
            })
        
            await newSalary.save();
        
            res.status(201).send({
                newSalary,
                message: "Salary Created"
            })
        } catch (error) {
            res.status(500).send({
                message: "Salary Not Created",
                error: error.message
            })
        }
    }

}

module.exports = new SalaryController();