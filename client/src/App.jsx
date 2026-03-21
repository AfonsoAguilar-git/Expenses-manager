import useExpenses from "./hooks/useExpenses"
import Form from "./components/ExpenseForm"
import ExpenseItem from "./components/ExpenseItem"


function App() {
  
  const { expenses, loading, error, handleDelete ,addExpense} = useExpenses()

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
      <h1 className="text-3xl font-bold text-blue-500">Expense Tracker</h1>
      {expenses.map(expense => (
        <ExpenseItem  key={expense._id} expense={expense} handleDelete={handleDelete}/>
      ))}
      <div>
        <Form addExpense={addExpense} />
      </div>
    </div>
  )


  
}

export default App