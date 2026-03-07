const expensesService = require("../services/expenses.service");

//adicionar(get)
function addExpense_C(req,res){

    const newExpense = expensesService.addExpense(req.body);

    

    res.status(201).json(newExpense);
}

//delete(delete)
async function deleteExpense_C(req,res,next){
    try{
    const id = Number(req.params.id);
    const deleted =  await expensesService.deleteExpense(id);
    if(!deleted){
            const err = new Error("expense not found");
            err.status = 404;
            throw err;
        }
    res.status(204).send();
    }
    catch(err){
        next(err);
    }
}

//update(patch)
function updateExpense_C(req,res){

    const id = Number(req.params.id);

    const updated = expensesService.updateExpense(id,req.body);

    if(!updated){
        const err = new Error("expense not found");
        err.status = 404;
        throw err;
    }

    res.json(updated);
}


//list ( get)
function listExpenses_C(req,res){

    const expenses = expensesService.getAllExpenses();

    res.json(expenses);
}

//id (get)
function getExpenseById_C(req,res){

    const id = Number(req.params.id);

    const expense = expensesService.getExpenseById(id);

    if(!expense){
        const err = new Error("expense not found");
        err.status = 404;
        throw err;
    }

    res.json(expense);
}

function totalExpenses_C(req,res){
    const expense = expensesService.totalExpenses();

    
    res.json(expense)
}

function getExpenseByCategory_C(req,res){
    const category = req.params.category

    const expense = expensesService.getExpenseByCategory(category)
    if(expense.length === 0){
        const err = new Error("expense not found");
        err.status = 404;
        throw err;
    }
    
    res.json(expense)
}

function getCategoryStat_C(req,res){
    const category = req.params.category

    const expense = expensesService.getCategoryStat(category)
    if(!expense){
        const err = new Error("expense not found");
        err.status = 404;
        throw err;
    }
    
    res.json(expense)
}



module.exports = {
    addExpense_C,
    listExpenses_C,
    getExpenseById_C,
    deleteExpense_C,
    updateExpense_C,
    totalExpenses_C,
    getExpenseByCategory_C,
    getCategoryStat_C
};