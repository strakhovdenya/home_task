
const csv=require('csvtojson');

const converter = csv({
    trim:true,
    delimiter: ';',
    checkType:true,
    ignoreColumns: /Amount/
}).on('error',(err)=>{
    console.log(err)
}).on('header',(header)=>{
    header.forEach((part, index, theArray)=>theArray[index] = part.toLowerCase());
})

const readStream=require('fs').createReadStream('./csv/file.csv');

const writeStream=require('fs').createWriteStream('./txt/file.txt');

readStream.pipe(converter).pipe(writeStream);