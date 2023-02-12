// 5 : 5 * 4 * 3 * 2 * 1
function factorial_1(y){ // x=5
    mul = y
    for(let i = 1 ; i < y ; i++){ // mul=1 , 2 , 3 , 4 , 5
        mul= i*mul // 9 , 18 , 54 , 120 , 600
    }
    console.log(mul);
}


function factorial_2(x) {// x=5
  mul = 1;
  for (let i = 1; i <= x; i++) { // mul=1 , 2 , 3 , 4 , 5
    mul = i * mul; // 1 , 2 , 6 , 24 , 120
  }
  console.log(mul);
}


let x = Number(prompt("number for x..."));
let y = Number(prompt("number for y..."));

factorial_1(y);
console.log("_______________________________________");
factorial_2(x);
