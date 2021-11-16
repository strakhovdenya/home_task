
process.stdin.on('data', data => {
    process.stdout.write(data.toString().replace(/[\n\t\r]/g,"").split('').reverse().join('')+'\n');
});