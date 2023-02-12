function mul_table(x){
    for(let i = 1 ; i<= x ; i ++){
        for(let j = 1 ; j <= x ; j++){
            document.write(`<span>${i * j}</span>`)
        }
        document.write(`<br/>`)
    }
}
mul_table(10)