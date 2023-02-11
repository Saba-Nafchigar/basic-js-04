// print Name and lastName
function printName(){
    let FirstName = prompt("enter your name...")
    let LastName = prompt("enter your last name...")
    console.log(FirstName + " " + LastName);
}
printName()

//Check even or odd
function CheckEvenOdd(z){
    if (z%2==0){
        console.log("even");
    }else{
        console.log("odd");
    }
}
let z = Number(prompt("z..."))
CheckEvenOdd(z)


//Calculator
function Calculator(x , y , operand){
    switch (operand){
        case "+":{
            let sum = x + y
            console.log(sum);
            break;
        }
        case "-":{
            let minus = x - y
            console.log(minus);
            break;
        }
        case "*":{
            let mul = x * y
            console.log(mul);
            break;
        }
        case "/":{
            let div = x / y
            console.log(div);
            break;
        }
        default:{
            console.log("enter correct operand");
        }
    }
}
let x = Number(prompt("x..."))
let y = Number(prompt("y..."))
let operand = prompt("operand ... ")
Calculator(x,y,operand)