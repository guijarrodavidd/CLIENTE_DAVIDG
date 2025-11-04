const teachers = ["Jose", "Lola", "Lorenzo", "Mariluz", "Maria Jose"]
let teacher = prompt("Tell me a teacher: ")
    if (teachers.includes(teacher)){
        console.log(teacher, "is correct!")
    } else {
        console.log(teacher, "is not a teacher.")
        } 