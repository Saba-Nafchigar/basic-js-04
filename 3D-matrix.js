// debugger
let x = Number(prompt("x..."))
    for(let i = 1 ; i <= x ; i++){
        document.write(`<div style='
        left:calc(50% + ${i*10}px);
        top:calc(50% + ${i*10}px);
        '>`)
            for(let j = 1 ; j <= x ; j++){
                for(let k = 1 ; k <= x ; k++){
                    document.write(`<span style='background-color:rgb(${60*k},${30*k},${40*k})'>${k}</span>`) 
                }
                document.write("<br/>")
            }
        document.write("</div>")
    }