
















# hebrew-date

Convert the date objects into the Hebrew calendar correspondant.




## Installation

```sh
$ npm i hebrew-date
```









## Example






```js
"use strict";

var hebrewDate = require("..");

// When not providing a date object, the months are one-indexed
console.log(hebrewDate(2016, 10, 2));
// { year: 5776, month: 13, date: 29, month_name: 'Elul' }

var october = 9;
console.log(hebrewDate(new Date(2016, october, 3)));
// { year: 5777, month: 1, date: 1, month_name: 'Tishri' }
```






## Documentation





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






## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].



## License
See the [LICENSE][license] file.


[license]: /LICENSE
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
