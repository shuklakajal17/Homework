// function myGrade(marks){
//     if(marks >= 90){
//         console.log("A");
//     }else if (marks >= 80){
//         console.log("B");
//     }else if(marks >= 70){
//         console.log("C");
//     }else {
//         console.log("D");
//     }
// }
// myGrade(85);
// myGrade(72);

const score = 85;

const result = score >= 90 ? 'A' :
(score >= 80 ? 'B' :
(score >= 70 ? 'C' : 'D'));

console.log(result);
