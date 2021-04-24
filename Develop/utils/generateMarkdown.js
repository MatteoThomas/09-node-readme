const choices = require("../choices");
//const answers = require("../index");
//const choices = require('../choices');
//const badge = answers.license
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(){
  if (badge == choices[0].value)
  then (console.log(choices[0].name))
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {

  let marked =

  `
  <h1>${answers.title}</h1><br />

  ## Description
  ${answers.description}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  <br />
  ## Installation
  ${answers.installation}
  ## Usage
  ${answers.usage}
  ## License
  ![license](https://img.shields.io/badge/License-${answers.license})

  <br />
  This application is covered by the ${answers.license}. 
  ## Contributing
  ${answers.contributing}
  ## Tests
  ${answers.tests} <br />

  ## Questions
  ${answers.github} (https://github.com/${answers.github})<br />
  Email me: ${answers.email}<br /><br />
      `
      ;
      return marked
}

module.exports = generateMarkdown;

//console.log(choices[1].name)
//console.log(answers)