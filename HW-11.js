// myNumber(5);
// myNumber(-3);
// myNumber(0);



// function myNumber(num){
//     if (num > 0){
//         console.log("positive");
//     }else if (num < 0){
//         console.log("negative");
//     }else{
//         console.log("zero");
//     }
// }

// const number = 5;
// const result = number > 0 ? 'positive' : (number < 0 ? 'negative' : 'zero');

// console.log(result);



function myNumber(num){
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(myNumber(5));
console.log(myNumber(-3));
console.log(myNumber(0));
