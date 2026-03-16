require('dotenv').config()
const express = require("express");
const app = express();
const db = require("../src/config/db")
const cors = require("cors");



const expensesRoutes = require("./routes/expenses.routes");
const {errorHandler} = require("./middlewares/middleWares")

app.use(express.json());

app.use(cors());

app.use("/expenses", expensesRoutes);

app.use(errorHandler);



db.connectDB();


app.listen(3000, () => {
    console.log("Server running on port 3000");
});




