// largestNumber(12,25,7);
// largestNumber(5,9,11);




// function largestNumber(num1, num2, num3){
//     if(num1 >= num2){
//         if(num1 >= num3){
//             console.log(num1);
//         }else{
//             console.log(num3);
//         }
//     }else{
//         if(num2 >= num3){
//             console.log(num2);
//         }else{
//             console.log(num3);
//         }
//     }
// }


function findLargestNum(a, b, c){
    return a > b && a > c ? a : (b > c ? b : c);
}
console.log(findLargestNum(12, 25, 7));
console.log(findLargestNum(5, 9, 11));
