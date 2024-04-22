const path = require("node:path");
const fs = require('node:fs');
const chalk = require('chalk');


const notes = 'C:/Users/neilm/OneDrive/Desktop/IT/Semester 1/BED/Week1/Practical1/test.txt';

path.dirname(notes);
path.basename(notes);
path.extname(notes);


fs.readFile(notes, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

const content = "Some contentttaaaa";

fs.writeFile(notes, content, err => {
  if (err){
    console.error(err);
  }
  else{
    console.log(chalk.yellow("yayyyy"));
  }
})