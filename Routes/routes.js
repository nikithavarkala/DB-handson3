const route= require("express").Router()
const {insertData,fetchdata,Salary,Exp,Graduate,setSalary,dlt} =require("../controller/employee")

route.post('/insertData',insertData)
route.get('/fetch',fetchdata)
route.get('/salary',Salary)
route.get('/exp',Exp)
route.get('/graduated',Graduate)
route.post('/setsalary',setSalary)
route.get('/dlt',dlt)

module.exports=route