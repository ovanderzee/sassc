
# sassc

Cli app compiling sass or scss files to compose css.
It wraps the sass module, previously known as dart-sass.
The sync methods for compiling and writing the file are implemented.
to help using this app in a script clause with multiple commands.

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
npx sassc src/app.scss dist/style.css
```
