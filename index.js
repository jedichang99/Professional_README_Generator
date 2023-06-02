const inquirer = require("inquirer");
const fs = require("fs");

// Function to generate the README file
function generateREADME(answers) {
  return `
# ${answers.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This application is covered under the ${answers.license} license. ![License Badge](https://img.shields.io/badge/License-${answers.license}-green)

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any questions or concerns, please reach out to me at ${answers.email}. You can also visit my GitHub profile: [${answers.username}](https://github.com/${answers.username}).
  `;
}

// Prompt the user for input
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "Enter the title of your project:",
    },
    {
      type: "input",
      name: "description",
      message: "Enter a description:",
    },
    {
      type: "input",
      name: "installation",
      message: "Enter installation instructions:",
    },
    {
      type: "input",
      name: "usage",
      message: "Enter usage information:",
    },
    {
      type: "list",
      name: "license",
      message: "Choose a license for your application:",
      choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3-Clause", "None"],
    },
    {
      type: "input",
      name: "contributing",
      message: "Enter contribution guidelines:",
    },
    {
      type: "input",
      name: "tests",
      message: "Enter test instructions:",
    },
    {
      type: "input",
      name: "username",
      message: "Enter your GitHub username:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address:",
    },
    //console.log(this),
  ])
  .then((answers) => {
    const readmeContent = generateREADME(answers);

    fs.writeFile("Your_README.md", readmeContent, (err) => {
      if (err) throw err;
      console.log("README.md file has been created successfully!");
    });
  })
  .catch((error) => {
    console.error(error);
  });
