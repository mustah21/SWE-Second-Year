const fs = require('fs');
const os = require('os');

// fs.readFile('sample.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error("error reading file", err);
//     } else {
//         console.log('sample.txt has been created', data); }
// });

// fs.writeFile('output.txt', 'hey whats my name', err => {
//     if (err) {
//         console.error("error in file", err);
//         return;
//     } 
//         console.log("hey hello yyour file is workinf")

//     });


// console.log('Hostname: ', os.hostname());
// console.log('Platform: ', os.platform());
// console.log('CPUs score: ', os.cpus());


const hostname = os.hostname()
const platform =  os.platform()
const CPU= os.cpus()

const data = `
Hostname: ${hostname}
platform: ${platform}
CPUs: ${JSON.stringify(CPU, null, 2)}
`;

fs.writeFile("systeminfo.txt", data, err => {
    if (err) {
        console.error('An error', err);
        return;
    }
    console.log('system info has been written');
});