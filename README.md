
# sassc

Sass compiler, cli wrapper for the sass module, previously known as dart-sass.

To make it usable as a part of a npm runnable script, sassc works synchronous.

## Usage

Name the collecting scss file and the path to write the css file to,
relative to project root:

```json
"scripts": {
    "...": "...",
    "build": "sassc src/app.scss dist/style.css",
    "...": "..."
}
```

On the command line:

```sh
npx sassc src/app.scss dist/style
```

In a script:

```js
import sassc from 'sassc'
...
const returnValue = sassc('src/app.scss', 'dist/style.css')
```

### Return codes

sassc returns numeric errorcodes:
* 0 - success
* 10 - compile error
* 20 - write file error
