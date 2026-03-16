const Expense = require("../models/expense.model")


async function getAllExpenses () {
    const list = await Expense.find()
    return list;
}

async function getExpenseById (id) {
    const list = await Expense.findById(id)
    return list;
}

async function createExpense (data) {
    return await Expense.create(data)
    
}

async function updateExpense(id,data) {
    return await Expense.findByIdAndUpdate(id,data)
}
    

async function deleteExpense (id) {
    return await Expense.findByIdAndDelete(id)
}



module.exports ={
    getAllExpenses,
    getExpenseById,
    createExpense,
    updateExpense,
    deleteExpense
};