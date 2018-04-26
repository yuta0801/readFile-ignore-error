# readfile-ignore-error

Don't let `fs.readFile` throw errors

```js
const readFile = require('readfile-ignore-error')

readFile('./test.txt', 'utf8', data => console.log(data)) // => "test"

readFile('./not-exist.txt', 'utf8', data => console.log(data)) // => undefined
```

# Install

```
npm install --save readfile-ignore-error
```

# Test

```
npm test
```

# Usage

See [test.js](https://github.com/yuta0801/readfile-ignore-error/blob/master/test.js) and [Node.js Documentation](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)

# Author

[yuta0801](https://github.com/yuta0801/)

# License

[MIT License](https://github.com/yuta0801/readfile-ignore-error/blob/master/LICENSE)
