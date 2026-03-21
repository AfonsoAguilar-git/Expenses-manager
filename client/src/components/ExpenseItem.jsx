function ExpenseItem({expense,handleDelete}){
    return(
        <div style={{display:"flex"}}>
            <div>
            <p>{expense.description}</p>
            <p>{expense.amount}</p>
            <p>{expense.category}</p>   
            </div>
            <div>
            <button onClick={()=>{handleDelete(expense._id)}} >delete expense</button>
            </div>
      </div>
    )

}


export default ExpenseItem;