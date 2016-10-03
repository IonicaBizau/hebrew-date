
# hebrew-date

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/hebrew-date.svg)](https://www.npmjs.com/package/hebrew-date) [![Downloads](https://img.shields.io/npm/dt/hebrew-date.svg)](https://www.npmjs.com/package/hebrew-date) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Convert the date objects into the Hebrew calendar correspondant.

## :cloud: Installation

```sh
$ npm i --save hebrew-date
```


## :clipboard: Example



```js
const hebrewDate = require("hebrew-date");

// When not providing a date object, the months are one-indexed
console.log(hebrewDate(2016, 10, 2));
// { year: 5776, month: 13, date: 29, month_name: 'Elul' }

let october = 9;
console.log(hebrewDate(new Date(2016, october, 3)));
// { year: 5777, month: 1, date: 7, month_name: 'Tishri' }
```

## :memo: Documentation


### `hebrewDate(inputDate, inputMonth, inputDate)`
Convert the Gregorian dates  into Hebrew calendar dates.

#### Params
- **Date|Number** `inputDate`: The date object (representing the Gregorian date) or the year.
- **Number** `inputMonth`: The Gregorian month (**one-indexed**, January being `1`!).
- **Number** `inputDate`: The Gregorian date.

#### Return
- **Object** An object containing:
 - `year`: The Hebrew year.
 - `month`: The Hebrew month.
 - `month_name`: The Hebrew month name.
 - `date`: The Hebrew date.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
