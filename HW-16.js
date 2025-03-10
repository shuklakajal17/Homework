// classifyTemperature(10);
// classifyTemperature(22);
// classifyTemperature(35);




// function classifyTemperature(degree){
//     if(degree <= 15){
//         console.log("cold");
//     }else if(degree <= 25){
//         console.log("moderate");
//     }else{
//         console.log("hot");
//     }
// }


// const temp = 22;

// const result = temp <= 15 ? 'cold' :
// (temp <= 30 ? 'moderate' : 'hot');
// console.log(result);



function myTemperature(temp){
    return temp <= 15 ? "cold" :
    temp <= 30 ? "moderate" : "hot";
}
console.log(myTemperature(10));
console.log(myTemperature(22));
console.log(myTemperature(35));
