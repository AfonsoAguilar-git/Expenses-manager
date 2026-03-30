import {Trash2} from "lucide-react"
import { PencilLine } from "lucide-react";
function ExpenseItem({expense,handleDelete,handleEdit}){

    

    return(
        <div>
            <div className="bg-neutral-100 w-60 h-80 m-10 text-yellow-300 rounded-lg hover:-translate-y-4 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-2xl/40" >
            <div className="flex justify-between items-center" >
            <p className="text-neutral-800 font-bold text-xl">{expense.category}</p>
            <div className="flex gap-1">
                <button  className="bg-neutral-900 rounded-lg p-1 text-center hover:bg-neutral-400 hover:text-red-400 " onClick={()=>{handleEdit(expense)}} > <PencilLine size={20}/></button>
                <button  className="bg-neutral-900 rounded-lg p-1 text-center hover:bg-neutral-400 hover:text-red-400 " onClick={()=>{handleDelete(expense._id)}} > <Trash2 size={20}/></button>
            </div>
            </div>
            <div className="flex flex-col h-full rounded-lg align-center">
            <div className="flex-1 pt-15">
                <p className="text-center text-neutral-800 text-xl font-bold">Info:</p>
            <p className="text-center text-neutral-800 text-md border-b-1 pb-20">{expense.description}</p>  
            </div>
            <p className="text-center text-neutral-800 mb-8 text-xl">{expense.amount}$</p> 
            <div className="bg-neutral-800 rounded-bl-lg rounded-br-lg h-10 text-center flex items-center justify-center">
                {new Date(expense.date).toLocaleDateString("pt-PT")}
            </div>
            </div>
            
            
            
           
            </div>
      </div>
    )

}


export default ExpenseItem;