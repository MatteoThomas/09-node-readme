// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const generateMarkdown = require('./utils/generateMarkdown.js');
const choices = require('./choices');


// TODO: Create an array of questions for user input
const questions = [{
            type: 'input',
            name: 'title',
            message: 'What is the title?',
            default: 'README'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe the README:',
            default: "It's a readme file"
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe the steps to install your project:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe the proper usage of your application:'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide ways other devepolers can contribute to you application:'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide any tests for your application and instructions on how to use them:'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your project:',
            choices: choices,
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username:'
        },
        {   type: 'input',
            name: 'email',
            message: 'Enter your email address:'
        }
];




 /*       // TODO: Create a function to write README file
        function writeToFile(fileName, data) {
            fs.writeFile(fileName, data, err => {
                if (err) {
                  return console.log(err);
                }
                console.log("Your README.md file has been created")
            });
        }

*/        
        
        // TODO: Create a function to initialize app
        async function init() {
          try {
            const userResponses = await inquirer.prompt(questions);
            const markdown = generateMarkdown(userResponses);
            await writeFileAsync('./dist/README.md', markdown);
        console.log('Successfully wrote to README.md');
 
    }   
    
     catch (error) {
    console.log(error);
}


};

        // Function call to initialize app
        init();
        