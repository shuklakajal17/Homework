// function myNumber(num){
//     if(num % 2 == 0){
//         console.log("even");
//     }else{
//         console.log("odd");
//     }
// }
// myNumber(10);
// myNumber(7);


// const num = 10;
// const result = num % 2 === 0 ? 'even' : 'odd';

// console.log(result);


function myNumber(num){
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(myNumber(5));
console.log(myNumber(-3));
console.log(myNumber(0));
