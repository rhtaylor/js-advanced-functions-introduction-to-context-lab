// Your code here
// Your code here
function createEmployeeRecord(argArray) {
    if (argArray.any(e => e === undefined)) {
        return
    } else {
        const employeeRecord = {}
        employeeRecord.timeInEvents = []

        employeeRecord.firstName = argArray[0];
        employeeRecord.familyName = argArray[1];
        employeeRecord.title = argArray[2];
        employeeRecord.payPerHour = argArray[3];
        employeeRecord.timeOutEvents = [];

        return employeeRecord
    }

    function createEmployeeRecords(arrayOfArrays) {
        const arrayOfRecords = arrayOfArrays.map(function (arry) { createEmployeeRecord(arry) })
        console.log(arrayOfRecords)
        return arrayOfRecords
    }

    function createTimeInEvent(employeeRecordArg, time) {

        employeeRecordArg.timeInEvents.push(time);
        return employeeRecordArg
    }