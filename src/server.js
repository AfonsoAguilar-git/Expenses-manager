const express = require("express");
const app = express();

const expensesRoutes = require("./routes/expenses.routes");
const handleError = require("./middlewares/middleWares")

app.use(express.json());

app.use("/expenses", expensesRoutes);

app.use(handleError)

app.listen(3000, () => {
    console.log("Server running on port 3000");
});




