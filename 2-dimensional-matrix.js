let x = Number(prompt("x..."))
    for(let i = 1 ; i <= x ; i++){
        for(let j = 1 ; j <= x ; j++){
          document.write(`<span>${j}</span>`)   
        }
        document.write(`<br/>`)
    }