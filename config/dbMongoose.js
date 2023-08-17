const mongoose=require("mongoose")
mongoose.set("strictQuery",true)
const url="mongodb://0.0.0.0:27017/Employee"

const connection=async()=>{
    try{
       await mongoose.connect(url)
        console.log("server connected with the database")
        // return clientInformation;
       
    }
    catch(err){
        console.log(err,"error connection")
    }
}
module.exports=connection;