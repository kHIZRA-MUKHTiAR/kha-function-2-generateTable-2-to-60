#! /usr/bin/env node
function generateTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }
}
for (let i = 2; i <= 60; i++) {
    generateTable(i);
    console.log("");
}
export {};
