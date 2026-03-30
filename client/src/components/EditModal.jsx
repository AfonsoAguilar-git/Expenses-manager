import { useState } from "react";
import { X } from "lucide-react";

function EditModal({selectedExpense,handleCloseModal,updateExpense}){
    const [amount ,setAmount] = useState(selectedExpense.amount);
    const [description ,setDescription] = useState(selectedExpense.description);
    const [category ,setCategory] = useState(selectedExpense.category);

    

    async function handleUpdate(e){
        try{
        e.preventDefault();
        handleCloseModal();
        await updateExpense(selectedExpense._id,amount,description,category)
        
        }catch(err){
            console.log(err);    
        }   
    }
    
    
    
    
    return(
        <div className="fixed inset-0 bg-black/60 z-50">
        <div className=" mt-10 bg-neutral-100 rounded-lg w-150 h-140 m-auto text-neutral-800 ">
            <div className="flex">
                <h1 className=" flex items-center justify-center flex-1 text-xl rounded-tl-lg font-bold  bg-neutral-700 text-yellow-300 h-10 ">Update Expense</h1>
                <button  onClick={handleCloseModal} className="bg-neutral-700 rounded-tr-lg text-white hover:text-red-500"> <X size={20}/></button>
            </div>
            
            <form  className="flex flex-col h-full" onSubmit={handleUpdate}>
                <div className="flex flex-col h-full justify-center">
                <label className="m-5 ml-10 font-bold text-lg">Amount</label>
                <input  className="m-5 ml-10 bg-neutral-200 p-1 rounded-lg mt-0" type="number" value={amount}  onChange={(e) => setAmount(e.target.value)} placeholder={selectedExpense.amount}/>
                <label className="m-5 ml-10 font-bold text-lg">Description</label>
                <input className="m-5 ml-10 bg-neutral-200 p-1 rounded-lg mt-0" type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder={selectedExpense.description}/>
                <label className="m-5 ml-10 font-bold text-lg" >Category</label>
                <select className="m-5 ml-10 bg-neutral-200 p-1 rounded-lg mt-0" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option>Food</option>
                    <option>House</option>
                    <option>Work</option>
                </select>
                </div>
                
                <input  className="bg-yellow-300 rounded-md pt-1 pb-1 pl-3 pr-3 hover:bg-neutral-100 hover:text-yellow-400" value="submit" type="submit"/>
                
            </form>
        </div>
        </div>
    )
}

export default EditModal