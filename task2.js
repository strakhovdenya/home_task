import csv from "csvtojson"
import fs from 'fs';

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

const readStream=fs.createReadStream('./csv/file.csv');

const writeStream=fs.createWriteStream('./txt/file.txt');

readStream.pipe(converter).pipe(writeStream);