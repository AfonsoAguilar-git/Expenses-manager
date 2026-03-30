import { useState } from "react"




function Form({addExpense}){
    const [amount ,setAmount] = useState("");
    const [description ,setDescription] = useState("");
    const [category ,setCategory] = useState("Food");
    async function handleSubmit(e){
        try{
        e.preventDefault();
        addExpense(amount,description,category)
        }catch(err){
            console.log(err);    
        }
        
    }

    return (
        <div className="bg-neutral-100 rounded-lg w-150 h-120 m-auto text-neutral-800 ">
            <div className="flex">
                <h1 className=" flex items-center justify-center flex-1 text-xl rounded-tl-lg font-bold rounded-tr-lg bg-neutral-700 text-yellow-300 h-10 ">Add Expense</h1>
            </div>
            
            <form  className="flex flex-col h-full" onSubmit={handleSubmit}>
                <div className="flex flex-col h-full justify-center">
                <label className="m-5 ml-10 font-bold text-lg">Amount</label>
                <input  className="m-5 ml-10 bg-neutral-200 p-1 rounded-lg mt-0" type="number" value={amount}  onChange={(e) => setAmount(e.target.value)} placeholder="insert amount"/>
                <label className="m-5 ml-10 font-bold text-lg">Description</label>
                <input className="m-5 ml-10 bg-neutral-200 p-1 rounded-lg mt-0" type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="insert description"/>
                <label className="m-5 ml-10 font-bold text-lg" >Category</label>
                <select className="m-5 ml-10 bg-neutral-200 p-1 rounded-lg mt-0" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option>Food</option>
                    <option>House</option>
                    <option>Work</option>
                    <option>School</option>
                </select>
                </div>
                
                <input  className="bg-yellow-300 rounded-md pt-1 pb-1 pl-3 pr-3 hover:bg-neutral-100 hover:text-yellow-400" value="submit" type="submit"/>
                
            </form>
        </div>
    )
}

export default Form