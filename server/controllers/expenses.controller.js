const expensesService = require("../services/expenses.service");

//adicionar(get)
async function addExpense_C(req,res,next){
    try{

    const newExpense =  await expensesService.addExpense(req.body);

    res.status(201).json(newExpense);
    }catch(err){
        next(err);
    }
}

//delete(delete)
async function deleteExpense_C(req,res,next){
    try{
    const id = req.params.id;

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
async function updateExpense_C(req,res,next){
    try{

    const id = req.params.id;

    const updated =  await expensesService.updateExpense(id,req.body);

    if(!updated){
        const err = new Error("expense not found");
        err.status = 404;
        throw err;
    }

    res.json(updated);
    }
    catch(err){
        next(err);
    }
}


//list ( get)
async function listExpenses_C(req,res,next){
    try{
     const expenses =  await expensesService.listExpenses();

    res.json(expenses);   
    }
    catch(err){
        next(err);
    }
    
}

//id (get)
async function getExpenseById_C(req,res,next){
    try{
       const id = req.params.id;

    const expense = await expensesService.getExpenseById(id);

    if(!expense){
        const err = new Error("expense not found");
        err.status = 404;
        throw err;
    }

    res.json(expense); 
    }
    catch(err){
        next(err);
    }
    
}

async function totalExpenses_C(req,res,next){
    try{
       const expense = await expensesService.totalExpenses();

    
    res.json(expense);
    }
    catch(err){
        next(err);
    }
    
}

async function getExpenseByCategory_C(req,res,next){
    try{
        const category = req.params.category

        const expense =  await expensesService.getExpenseByCategory(category)
        if(expense.length === 0){
            const err = new Error("expense not found");
            err.status = 404;
            throw err;
    }
    
    res.json(expense)    
    }
    catch(err){
        next(err);
    }
    
}

async function getCategoryStat_C(req,res,next){
    try{
        const category = req.params.category

    const expense = await expensesService.getCategoryStat(category)
    if(!expense){
        const err = new Error("expense not found");
        err.status = 404;
        throw err;
    }
    
    res.json(expense)
    }
    catch(err){
        next(err);
    }
    
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