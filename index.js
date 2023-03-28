// Write your solution in this file!

const employee ={
    name:"Sam"

}
function updateEmployeeWithKeyAndValue(obj,key,value){
    return{
        ...obj,
        [key]:value
    }

        
}
employee=updateEmployeeWithKeyAndValue(employee,"streetAddress", "11 Broadyway");

function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
    obj[key]= value
    return obj;
}
employee =destructivelyUpdateEmployeeWithKeyAndValue(employee,"streetAddress", "11 Broadway")



function deleteFromEmployeeByKey(employee,key){
    const myObj = {... employee};
    delete myObj[key];
    return myObj;
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}