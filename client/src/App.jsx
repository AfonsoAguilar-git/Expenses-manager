import { useEffect, useState } from "react"
import Form from "./components/ExpenseForm"
import ExpenseItem from "./components/ExpenseItem"


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

  async function handleDelete(id){
      try{
        let response = await fetch(`http://localhost:3000/expenses/${id}`,{method:"DELETE"})
        const data = expenses.filter(expense =>{
          return id != expense._id;
        });
        
        setExpenses(data);
        setLoading(false);

      } catch(err){
        setError(err);
        setLoading(false);
      }
  }
  
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
        <ExpenseItem  key={expense._id} expense={expense} handleDelete={handleDelete}/>
      ))}
      <div>
        <Form setExpenses={setExpenses} />
      </div>
    </div>
  )


  
}

export default App