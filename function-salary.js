function salary(FullName , WorkHour , Degree){
    let salary
    let pureSalary
    let tax
    switch (Degree) {
        case "phd" :{
            salary = WorkHour * 100000
            tax = salary * 0.1
            pureSalary = salary - tax 
            console.log(pureSalary);
            break;
        }
        case "master" :{
            salary = WorkHour * 80000
            tax = salary * 0.1
            pureSalary = salary - tax 
            console.log(pureSalary);
            break;
        }
        case "bachelor":{
            salary = WorkHour * 50000
            tax = salary * 0.1
            pureSalary = salary - tax 
            console.log(pureSalary);
            break;
        }
        case "diploma":{
            salary = WorkHour * 30000
            tax = salary * 0.1
            pureSalary = salary - tax 
            console.log(pureSalary);
            break;
        }
        default:{
            console.log("Please insert correct data!");
            break;
        }
            
    }
    document.write(`<h1>Dear ${FullName} , your Salary is : ${salary} and your pure salary is : ${pureSalary}</h1>`)
}

let FullName = prompt("Enter Your FullName")
let WorkHour = Number(prompt("How many hours do you work in a week?"))
let Degree = prompt("What is your degree?")


salary(FullName , WorkHour , Degree)