#! /usr/bin/env node

import inquirer from "inquirer";

function generateTable(num:number) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${num} * ${i} = ${num*i}`);      
    }
 }
 for (let i = 2; i <= 60; i++){
    generateTable(i);
    console.log("");
   
 }