var output = [];
var count = 0;

function fizzBuzz(){
    while(count < 100){
    if(count % 3 === 0 && count % 5 === 0){
        output.push("fizzBuzz");
    }
    else if (count % 3 === 0){
        output.push("fizz");
    }
    else if (count % 5 === 0){
        output.push("Buzz");
    }
    count++;
}
    console.log(output);
}