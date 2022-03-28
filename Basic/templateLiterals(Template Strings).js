let a = 5
let b = 7
console.log(`The sum of ${a} and ${b} is ${a + b}`) // dinamik yazım şekli

let firstName = 'Sefa'
let lastName = 'Palabıyık'
let country = 'Türkiye'
let language = 'JavaScript'
let fullName = firstName + ' ' + lastName

let personInfo = `I am ${fullName}. I live in ${country}. I teach ${language}.` 

console.log(personInfo)




const name = "Sefa Palabıyık"
const department = "Student"
const salary = undefined


// const a = "İsim: "+ name + "\n"+"Departman: "+department+"\n"+"Salary: "+salary;


// const a = `İsim:${name}\nDepartman:${department}\nMaaş:${salary}`


// const html = "<ul> " +
//     "<li>" + name + "</li>"+
// "<li>" + department + "</li>"+
// "<li>" + salary + "</li>" +
//     "</ul>";


function a(){
    return "Merhaba";
}


const html = `
    <ul>
        <li>${name}</li>
        <li>${department}</li>
        <li>${salary}</li>
        <li>${10/4}</li>
        <li>${a()}</li>
    </ul>
            `;



document.body.innerHTML = html;
