## Documentation
You can see below the API reference of this module.

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

