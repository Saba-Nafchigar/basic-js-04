function checkPrime(x){
    let flag = 0
    for(let i = 1 ; i<= x ; i++){
        if(x%i===0){
            flag++;
            console.log(i);
        }
    }
    if(flag===2)
    {
        console.log("Prime");
    }else{
        console.log("Not Prime");
    }
}

let x =Number(prompt("enter a number..."))
checkPrime(x)