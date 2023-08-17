const employee=require('../EmpModel/EmpStructure')

const insertData = async (req, res) => {
    const userData=req.body;

    // const tempObj = new employee({
    //         firstName:firstName,
    //         lastName:lastName,
    //         salary:salary,
    //         department:department,
    //         lastCompany:lastCompany,
    //         lastSalary:lastSalary,
    //         overallExp:overallExp,
    //         contactInfo:contactInfo,
    //         yearGrad:yearGrad,
    //         gradStream:gradStream
    // });

    const result = await employee.insertMany(userData);

    return res.send({ msg: "user data has been stored", result: result });
};

const fetchdata = async (req, res) => {
    const result = await employee.find();
    return res.send({ result: result });
};

const Salary=async (req,res)=>{
    const result=await employee.find({"salary":{"$gt":"30000"}})
    res.send(result)
}

const Exp=async (req,res)=>{
    const result=await employee.find({"overallExp":{"$gt":"2"}})
    res.send(result)
}

const Graduate=async (req,res)=>{
    const result=await employee.find({"yearGrad":{"$gt":"2015"}},{"overallExp":{"$gt":'1'}})
    res.send(result)
}

const setSalary=async (req,res)=>{
    const result=await employee.updateMany({"salary":{"$lt":"70000"}},{"$set":{"salary":"65000"}})
    res.send(result)
}

const dlt=async (req,res)=>{
    const result=await employee.deleteMany({"lastCompany":{"$gt":'Y'}})
    res.send(result)
}

module.exports = { insertData, fetchdata,Salary,Exp,Graduate,setSalary,dlt };
