

const inquirer = require('inquirer');
const questions = [
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: (answer) => {
                if(answer === ""){
                    return 'please enter a valid name'
                }
                return true
            }
        },
        {
            type: 'input',
            name: 'height',
            message: 'What is your height (in inches)?',
            validate: (answer) => {
                if(isNaN(answer)){
                    return 'please enter a valid height (in inches)'
                }
                return true
            }
        },
        {
            type: 'input',
            name: 'weight',
            message: 'What is your weight (in pounds)?',
            validate: (answer) => {
                if(isNaN(answer)){
                    return 'please enter a valid weight (in pounds)'
                }
                return true
            }
        }
]
console.log('************************** B M I Calculator *******************************')
inquirer
    .prompt(questions)
    .then(answers => {
       const height = answers.height;
       const weight = answers.weight;
       const bmi = (weight/(height * height))*703
        const isFloat = (num) => {
           if (num%1 !==0){
               return num.toFixed(2)
           }
           return num
        }
        if(bmi < 16){
            console.log(`${answers.name} your BMI is ${isFloat(bmi)} and it is considered to be severely underweight`)
        } else if (bmi >= 16 && bmi < 18.5){
            console.log(`${answers.name} your BMI is ${isFloat(bmi)} and it is considered to be underweight`)
        }else if (bmi >= 18.5 && bmi < 25){
            console.log(`${answers.name} your BMI is ${isFloat(bmi)} and it is considered to be normal`)
        }else if (bmi >= 25 && bmi < 30){
            console.log(`${answers.name} your BMI is ${isFloat(bmi)} and it is considered to be overweight`)
        }else if (bmi >= 30 && bmi < 35){
            console.log(`${answers.name} your BMI is ${isFloat(bmi)} and it is considered to be moderately obese`)
        }else if (bmi >= 35 && bmi < 40){
             console.log(`${answers.name} your BMI is ${isFloat(bmi)} and it is considered to be severely obese`)
        } else if (bmi >=40){
            console.log(`${answers.name} your BMI is ${isFloat(bmi)} and it is considered to be morbidly obese`)
        }

        // BMI (weight/(height^2))*703

    })
    // .catch(error => {
    //     if(error.isTtyError) {
    //         // Prompt couldn't be rendered in the current environment
    //     } else {
    //         // Something else went wrong
    //     }
    // });