let x = Number(prompt("x...")) // 5
    for(let i = 1 ; i <= x ; i++){ 
        for(let j = 1 ; j <= x ; j++){
            if(i===j){
                document.write(`<span>1</span>`) 
            }else{
                document.write(`<span>0</span>`) 
            }
            
        }
        document.write(`<br/>`)
    }