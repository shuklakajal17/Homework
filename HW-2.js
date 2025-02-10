let str = "k \nr \ni \ns \nh \nn \na";
let newStr = [];

for(let i = str.length-1; i >= 0; i--){
    newStr += str[i];
}

console.log(newStr);

// "k", "r", "i", "s", "h", "n", "a"