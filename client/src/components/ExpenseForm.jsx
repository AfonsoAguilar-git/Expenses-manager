import { useState } from "react"



function Form({setExpenses}){
    const [amount ,setAmount] = useState("");
    const [description ,setDescription] = useState("");
    const [category ,setCategory] = useState("Food");
    async function handleSubmit(e){
        try{
        e.preventDefault();
        const response = await fetch("http://localhost:3000/expenses",
            {
                headers:{
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({amount: Number(amount),description,category})
            })
            const data = await response.json();
            setExpenses(prev => [...prev,data]);
        }catch(err){
            console.log(err);
            
        }
        

    }

    return (
        <div>
            <h1>Add Expense</h1>
            <form onSubmit={handleSubmit}>
                <label>Amount</label>
                <input type="number" value={amount}  onChange={(e) => setAmount(e.target.value)} placeholder="insert amount"/>
                <label>Description</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="insert description"/>
                <label>Category</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option>Food</option>
                    <option>House</option>
                    <option>Work</option>
                </select>
                <input type="submit"/>
                
            </form>
        </div>
    )
}

export default Form