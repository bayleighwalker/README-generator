// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js'); 

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'Please provide the title of your project',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Please provide a description of your project',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Please provide required installations for this application',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Please provide the usage instructions',
    },
    {
        type: 'input',
        name: 'Test',
        message: 'Please provide testing instructions for this application'
    },
    {
        type: 'list',
        name: 'License',
        choices: ['Apache License 2.0', ' MIT License', 'Eclipse Public License 2.0', 'Mozilla Public License 2.0'],
        message: 'Select the type of license.',
    },    
    {
        type: 'input',
        name: 'Contributors',
        message: 'Please provide the names of the people who contributed'
    },
    {
        type: 'input',
        name: 'Github',
        message: 'Please provide your GitHub username',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Please provide your email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    return fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
  
    inquirer.prompt(questions)
 
        .then((data) => writeToFile('READMEGENERATED.md', generateMarkdown(data)))

        .then(() => console.log("README successfully written."))
      
        .catch((err) => console.log(err))
}

// Function call to initialize app
init();
