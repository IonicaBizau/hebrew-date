"use strict";

const hebrewDate = require("..");

// When not providing a date object, the months are one-indexed
console.log(hebrewDate(2016, 10, 2));
// { year: 5776, month: 13, date: 29, month_name: 'Elul' }

let october = 9;
console.log(hebrewDate(new Date(2016, october, 3)));
// { year: 5777, month: 1, date: 7, month_name: 'Tishri' }
