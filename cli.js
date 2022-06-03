#!/usr/bin/env node

import compileScss from './lib/sassc'

if (!process.argv || process.argv.length < 4) {
    console.error('An input and an output file has to be given')
} else {
    compileScss(process.argv[2], process.argv[3])
}
