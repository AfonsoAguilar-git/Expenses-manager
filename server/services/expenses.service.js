const {getAllExpenses:getAllExpenses_data,createExpense: createExpense_data,getExpenseById: getExpenseById_data,deleteExpense:deleteExpense_data,updateExpense:updateExpense_data} = require("../data/expenses.data");
const Expense = require("../models/expense.model");



//adicionar desepesas a array
async function addExpense(data){
    return await createExpense_data(data)
}

//delete despesa da array
async function deleteExpense(id){
    return await deleteExpense_data(id);
  
}

//atualiza despesa

async function updateExpense(id,data){
    return await updateExpense_data(id,data);
}



//devolve todas as despesas
async function listExpenses(){
    return await getAllExpenses_data();
}

//get by id
async function getExpenseById(id){
    return await getExpenseById_data(id);
    
}

//calucla o total de despesas e devolve
async function totalExpenses(){
    return await Expense.aggregate([{
        $group: {_id:null, total:{$sum: "$amount" }}    
    }])
    
}   

//devolve a todas as depesas de uma certa categoria
async function getExpenseByCategory(category){
    return await Expense.aggregate([{
        $match:{ category: category}    
    }])
    
}   

//devolve despesa,quantidade, e media de uma categoria
async function getCategoryStat(category){
    return await Expense.aggregate([
        {$match:{ category: category},},
        {$group:{_id:"$category" , average:{$avg: "$amount"},total:{$sum: "$amount"},count:{$sum :1}}}
    ])
}




module.exports = {
    addExpense,
    listExpenses,
    totalExpenses,
    getExpenseByCategory,
    getCategoryStat,
    deleteExpense,
    updateExpense,
    getExpenseById
}  