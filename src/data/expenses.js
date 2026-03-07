const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "expenses.json");

function readExpenses(){
  const expense = fs.readFileSync(filePath,"utf-8");

  const expenses = JSON.parse(expense);

  return expenses;
}

function writeExpenses(expense){
  const jsondata = JSON.stringify(expense,null,2)
  fs.writeFileSync(filePath,jsondata)
  
}

function getNextId(expenses){
  if(expenses.length === 0){
    return 1;
  }
  const ids = expenses.map(exp => exp.id);
  const next_id = Math.max(...ids) + 1;
  return next_id;
}


module.exports ={
  readExpenses,
  writeExpenses,
  getNextId
};