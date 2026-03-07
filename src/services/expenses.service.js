const {readExpenses,writeExpenses, getNextId} = require("../data/expenses");



//adicionar desepesas a array
function addExpense(data){
    const expenses = readExpenses();

    const newExpense = {
    id: getNextId(expenses),
    description: data.description,
    amount: data.amount,
    category: data.category,
    date: new Date().toISOString()
    };
    expenses.push(newExpense);
    writeExpenses(expenses);
    return newExpense;
}

//delete despesa da array
function deleteExpense(id){
    const expenses = readExpenses();
   
    const index = expenses.findIndex(exp => exp.id === id);

    if (index === -1) {
        return null;
    }

    expenses.splice(index, 1);
    writeExpenses(expenses);
    return true;

}

//atualiza despesa

function updateExpense(id,data){
    const expenses = readExpenses();
    const expense = expenses.find(exp => exp.id === id);
    
    if(!expense){
        return null
    }

    if(data.description !== undefined){
        expense.description = data.description;
    }
    if(data.amount !== undefined){
        expense.amount = Number(data.amount);
    }
    if(data.category !== undefined){
        expense.category = data.category;
    }
    writeExpenses(expenses);
    return expense;
}



//devolve todas as despesas
function listExpenses(){
    const expenses = readExpenses();
    return(expenses);
}

//get by id
function getExpenseById(id){
    const expenses = readExpenses();
    return expenses.find(exp => exp.id === id) || null

}

//calucla o total de despesas e devolve
function totalExpenses(){
    const expenses = readExpenses();
    return expenses.reduce((total,num) => {
        total += num.amount
        return total
    },0) 
    
}   

//devolve a todas as depesas de uma certa categoria
function getExpenseByCategory(category){
    const expenses = readExpenses();
    return expenses.filter(exp => exp.category === category)
    
}

//devolve despesa,quantidade, e media de uma categoria
function getCategoryStat(category){
    const expenses = readExpenses();
    const result = expenses.reduce((acc,num)=> {
        if (num.category === category){
            acc.total += num.amount;
            acc.count += 1;
        }
        return acc
    },{total:0,count:0})
    if (result.count > 0){
        result.average = result.total/result.count;
    }
    return result;
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