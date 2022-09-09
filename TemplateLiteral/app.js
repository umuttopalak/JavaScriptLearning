const name = "Mustafa Muraf Çoşkun"
const department = "Bilişim"
const salary = 4000;


// const a = "İsim " + name + "\n" + "Departmen: " + department + "\n" + "Salary: " + salary

//const a = `İsim:${name}\nDepartment:${department}\nSalary:${salary}`

// const html = "<ul>" + 
//             "<li>" + name + "</li>" +
//             "<li>" + department + "</li>" +
//             "<li>" + salary + "</li>" +
//             "</ul>"

function a(){
    return "Merhaba"
}

const html = `

        <ul>
        <li>İsim: ${name}</li>
        <li>Department: ${department}</li>
        <li>Salary: ${salary}</li>
        <li>${a()}</li>
        </ul>
            `;


document.body.innerHTML = html
console.log(a);