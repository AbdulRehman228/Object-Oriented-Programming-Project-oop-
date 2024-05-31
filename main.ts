#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.yellowBright("\n\t\tWelcome to Syed Abdul Rehman  'Object-Oriented-Programming-Project-oop'\n\t\t "));

class Student {
    name: string
    constructor(n:string){
        this.name = n
    }
}

class Person {
    students:Student[]=[]
    addStudent(obj:Student){
        this.students.push(obj)
    }
}

const persons = new Person()

const programStart = async(persons:Person)=>{
    console.log("Welcome!");
    const ans = await inquirer.prompt({
        name: "Select",
        type: "list",
        message: "Whom would you like to interact with?",
        choices: ["staff", "student", "exit"]
    })
    if(ans.Select == "staff"){
        console.log("You approach the staff room. please feel free to ask any question.");
    }
    else if(ans.Select == "student"){
        const ans = await inquirer.prompt({
            name: "student",
            type: "input",
            message: "Enter the student's name you wish to engage with:"
        })
        const student = persons.students.find(val => val.name == ans.student)
        if(!student){
            const name = new Student(ans.student)
            persons.addStudent(name)
            console.log(`Hello i am ${name.name}. Nice to meet you!`);
            console.log("New student added");
            console.log("Current student list:");
            console.log(persons.students);
        } else{
            console.log(`Hello i am ${Student.name}. Nice to see you again!`);
            console.log("Existing student list:");
            console.log(persons.students);
        }
    } else if (ans.Select == "exit"){
        console.log("Exiting the program...");
    }
}

programStart(persons);