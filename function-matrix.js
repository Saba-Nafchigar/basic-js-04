function matrix_maker(row , column){
    for(let i = 1 ; i<= row ; i ++){
        for(let j = 1 ; j <= column ; j++){
            document.write(`<span>${j}</span>`)
        }
        document.write(`<br/>`)
    }
}

let row = Number(prompt("row"))
let column = Number(prompt("column"))
matrix_maker(row , column)
