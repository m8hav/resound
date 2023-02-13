// import fs from "fs";

"use strict";

// const fs = Use require(["fs"]);
const fs = require("fs");

// let rawStudentData = fs.readFileSync("student.json");    // stops other processes till file is completely read
let rawStudentData = fs.readFile("student.json", );           // doesn't stop other processes till file is read
let studentData = JSON.parse(rawStudentData);
console.log(studentData);