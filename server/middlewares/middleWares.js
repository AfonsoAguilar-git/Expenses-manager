function validateData(req,res,next){
    const {description,amount,category} = req.body;

    if(amount === undefined || category === undefined ){
        return res.status(400).json({message:"data not found"})
    }
    if (typeof amount !== "number") {
        return res.status(400).json({ message: "amount must be a number" });
    }
    if (typeof description !== "string" && description !== undefined) {
        return res.status(400).json({ message: "description must be a string" });
    }
    if (typeof category !== "string") {
        return res.status(400).json({ message: "category must be a string" });
    }

    next();
    
}


function errorHandler(err, req, res, next) {
  console.error(err);

  res.status(err.status || 500).json({
    message: err.message || "Internal server error"
  });
}



module.exports ={ 
    validateData,
    errorHandler};