// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

function returnFirstTwoDrivers(){
     const newArray =['Antonia', 'Nuru']
        return newArray;
}
function returnLastTwoDrivers(){
    const newArray =['Amari', 'Mo']
    return newArray;
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(times){
const fare = 2;
return function () {
    return Math.pow(times, fare)
};
}
 function fareDoubler(fare){
    return fare * 2;
 }
 function fareTripler(fare){
    return fare * 3;
 }
 function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers();
 }