classifyTemperature(10);
classifyTemperature(22);
classifyTemperature(35);




function classifyTemperature(degree){
    if(degree <= 15){
        console.log("cold");
    }else if(degree <= 25){
        console.log("moderate");
    }else{
        console.log("hot");
    }
}
