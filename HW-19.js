function leapYear(year){
    return [year % 4 === 0 ? (year % 100 === 0 ? (year % 400 === 0 ? 'leap year' : 'not a leap year') :
        'leap year') : 'not a leap year'][0];
    
}
console.log(leapYear(2024));
console.log(leapYear(2023));