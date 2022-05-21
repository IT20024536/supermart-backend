const Employee = require("../models/employee.model");

class EmployeeController {

    createEmployee = async (req, res) => {
        try {
            const newEmployee = new Employee({
                EmployeeID:req.body.EmployeeID,
                EmployeeName : req.body.EmployeeName,
                CodeID : req.body.CodeID,
                DepartmentName : req.body.DepartmentName,
                Designation:req.body.Designation,
                BasicSalary : Number(req.body.BasicSalary),
                ContactNo : req.body.ContactNo,
                Email : req.body.Email,
                DateOfBirth : req.body.DateOfBirth,
                AccountNo : req.body.AccountNo,
                Address :req.body.Address,
                Password : req.body.Password,
                
   
                
            })
        
            await newEmployee.save();
        
            res.status(201).send({
                newEmployee,
                message: "Employee Created"
            })
        } catch (error) {
            res.status(500).send({
                message: "Employee Not Created",
                error: error.message
            })
        }
    }

}

module.exports = new EmployeeController();