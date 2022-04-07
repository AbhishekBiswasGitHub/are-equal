# are-equal

![version](https://img.shields.io/github/package-json/v/AbhishekBiswasGitHub/are-equal)
![last commit](https://img.shields.io/github/last-commit/AbhishekBiswasGitHub/are-equal)
![rating](https://img.shields.io/scrutinizer/quality/g/AbhishekBiswasGitHub/are-equal)
![license](https://img.shields.io/github/license/AbhishekBiswasGitHub/are-equal)

"are-equal" is a very lightweight and fast Javascript library for comparing equality by value of any number of given variables of any type and without any order or sorting.

## Features

- Lightweight and fast
- Compare equality by value
- Compare any types
- Sorting isn't required
- Takes multiple arguments
- Returns true if equal, else false
- Available as CommonJS and ES6 Module format
- 0 dependencies

## Installation

```bash
npm i are-equal
```

## Usage

### CommonJS

```javascript
const areEqual = require("are-equal");

/* returns "true" if equal, "false" if not */
areEqual(item1, item2);
```

### ES6 Module

```javascript
// Path shown from root directory
import areEqual from "./node_modules/are-equal/are-equal.es6";

/* returns "true" if equal, "false" if not */
areEqual(item1, item2);
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[GPLv3](https://choosealicense.com/licenses/gpl-3.0/)
