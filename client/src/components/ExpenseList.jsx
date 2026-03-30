import ExpenseItem from "./ExpenseItem"
import { CircleX } from "lucide-react"
import { useState } from "react";


function ExpenseList({expenses,handleDelete,handleEdit}){


    const[selectedCategory ,setSelectedCategory]= useState(null);

    const filtered = selectedCategory 
    ? expenses.filter(exp => exp.category === selectedCategory)
    : expenses

    if(filtered.length === 0){
        return(
            <div className="flex flex-col pb-30">
        <h1 className="text-3xl  text-yellow-300 text-center">Expenses</h1>
        <select  onChange={(e) => setSelectedCategory(e.target.value)}>
            <option>Food</option>
            <option>House</option>
            <option>Work</option>
        </select>
        <div className="h-screen text-neutral-400">
                <div className=" flex flex-col items-center justify-center h-full pb-40">
                    <CircleX size={100}/>
                    <p className="pt-10 text-xl">Looks like there is nothing here .... Try adding expenses</p>
                </div>
            </div>
        
    </div>
            
        )
    }
    console.log(expenses)
    return(
    <div className="flex flex-col pb-30">
        <h1 className="text-3xl  text-yellow-300 text-center">Expenses</h1>
        <h2 className="text-lg m-1 text-yellow-300 font-bold">filter</h2>
        <select className="border-yellow-300 border-2 rounded-lg mr-300" onChange={(e) => setSelectedCategory(e.target.value || null)}>
            <option  className="text-neutral-900" value="">All</option>
            <option className="text-neutral-900" value="Food">Food</option>
            <option className="text-neutral-900" value="House">House</option>
            <option className="text-neutral-900" value="Work">Work</option>
        </select>
        <div className="grid grid-cols-4  mx-auto pl-5 pr-5">
        {filtered.map(expense => (
            <ExpenseItem   key={expense._id} expense={expense} handleDelete={handleDelete} handleEdit={handleEdit} />
        ))}
        </div>
    </div>
      
    )
}


export default ExpenseList


