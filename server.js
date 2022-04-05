const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

//bodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;
const uri = "mongodb+srv://admin:admin123@supermart.ayocv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Mongo DB connected....")).catch((err) => {
    console.log(`Could not connect to the database ${err}`);
    process.exit();
});

app.get('/', (req, res) => {
  res.send("Server is running")
})

//Import routes
const ItemRoutes = require('./routes/item.router');
const CustomerRoutes = require('./routes/customer.router');
const employeeRouter =require("./routes/employees.js");
app.use('/item', ItemRoutes);
app.use('/customer', CustomerRoutes);
app.use("/employee",employeeRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})