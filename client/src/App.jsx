import { useEffect, useState } from "react"
import Form from "./components/ExpenseForm"


function App() {
  const [expenses, setExpenses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=>{
    async function fetchExpense(){
      try{
        let response = await fetch("http://localhost:3000/expenses")
        const data = await response.json();
        setExpenses(data);
        setLoading(false);
      }catch(err){
        setError(err);
        setLoading(false);
      }
    }
    fetchExpense();
  },[])
  
  if (loading) return (
    <div>
      <p>loading ....</p>
    </div>
  )
  if (error) return (
    <div>
      <h1>Error: {error} </h1>
    </div>
  )
  if (expenses) return (
    <div>
      <h1>Expense Tracker</h1>
      {expenses.map(expense => (
        <div key={expense._id}>
        <p>{expense.description}</p>
        <p>{expense.amount}</p>
        <p>{expense.category}</p>
        </div>
      ))}
      <div>
        <Form setExpenses={setExpenses} />
      </div>
    </div>
  )


  
}

export default App