const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

const questions = [
    {
        type: 'input',
        name: 'userName',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license are you using?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What installation is being used?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command is being used to test?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know to use this application?'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who has contributed to the project?'
    }

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(__dirname, fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((res) => {
        console.log(res)
        writeToFile('README2.md', generateMarkdown({...res}))
    })
}

// function call to initialize program
init();
