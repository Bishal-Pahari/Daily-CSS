# Local & Session storage in JS

`localStorage` and `sessionStorage` are used storing key-value data on the client-side in web browsers.

`localStorage` stores data with no expiration date, and it persists across browser sessions.
`sessionStorage` stores data for the duration of a page session and is cleared when the session ends or the browser is closed.
Both are accessible using `setItem()`, `getItem()`, and `removeItem()` methods, and they are limited by storage size and scoped to the same origin. Data is stored as strings, so you may need to convert non-string data using JSON.stringify() and JSON.parse().
