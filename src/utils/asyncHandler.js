const asyncHandler=(fn)=>async(req,res,next)=>{
    try{
        await fn(req,res,next);
    }
    catch(error){
        res.status(res.error||500).json({
            succes:false,
            message:error.message
        })
    }
}