const inquirer = require('inquirer');
// Enable filesystem Module
//const fs = require('fs');
    // constant for generated page
//const generatePage = require('./src/page-template.js');
 
//const pageHTML = generatePage(myname, github);




//fs.writeFile('./index.html', pageHTML, err => 
//{
//    if (err) throw err;
//    
//    console.log('Portfolio complete! Check out index.html to see output!');
//}
//);


inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
        
    ])
    .then(answers => console.log(answers));
















    // ES6 feature assignment destructuring. assigns elements of an array
    // to variable names in a single expression.
    // taking the previous 2 variables into a one line version
// const [myname, github] = profileDataArgs;


    // Holds user command-line arguments
// const profileDataArgs = process.argv.slice(2);

    // Extract Arguments and store in distinct variables
//const name = profileDataArgs[0];
//const github = profileDataArgs[1];

/*
const generatePage = (userName, githubName) => {
  return `
    Name: ${userName}, 
    Github: ${githubName}
    `;
};
*/
        /*
Lesson One Code
console.log(profileDataArgs);

const printProfileData = profileDataArr => 
{
    // This...
    for (let i = 0; i < profileDataArr.length; i+=1) 
    {
        console.log(profileDataArr[i]);
    }
    console.log('=================');

    // Is the same as this...
    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);
        */