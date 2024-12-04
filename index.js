// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';


const licenses = [
    {name: 'MIT License', value: 'MIT'},
    {name: 'Apache license 2.0', value:'Apache-2.0'},
    {name: 'Microsoft Public License', value:'MS-PL'}
];


// TODO: Create an array of questions for user input
const questions = [
{

    type: 'input',
    name: 'Title',
    message: 'What is the title of your project?',
},
{
    type: 'input',
    name: 'Description',
    message: 'Add a description for your project...',
},
{
    type: 'input',
    name: 'Installation',
    message: 'What steps are required for installation?',
}, 
{
    type: 'input',
    name: 'Usage',
    message: 'Explain how you use the site...',
},
{
    type: 'input',
    name: 'Contributing',
    message: 'Add your name and any other contributers to this project...',
},
{
    type: 'input',
    name: 'Tests',
    message: 'Enter test instructions...',
},
{
    type: 'input',
    name: 'Github',
    message: 'What is your Github username?',
    
},
{

    type: 'input',
    name: 'Email',
    message: "What is your email address?"

},
{
    type: 'list',
    name: 'License',
    message: 'Select a License... ',
    choices: licenses,
}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data,(err) => {
        if(err) {
            console.log('Error writing this file', err)
        } else {
            console.log('Successfully created README!')
        }
    });
}

function generateMarkdown(data) {
    return `# ${data.Title}

    ## Description
    ${data.Description}

    ## Installation
    ${data.Installation}

    ## Usage
    ${data.Usage}

    ## Contributing
    ${data.Contributing}
    
    ## Tests
    ${data.Tests}

    ## Questions
    - Github: [${data.Github}](https://github.com/${data.Github})
    - Email: [${data.Email}](mailto:${data.Email})

    ## License
    This project is licensed under the ${data.License} license.
    `;

}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions) 
    .then ((answers) => {
    const fileName = ("README.md");
    const data = generateMarkdown(answers);
    writeToFile(fileName, data);
})
.catch ((err) => {
    console.log('Error occured',err);
});
}

// Function call to initialize app
init()
