import fs from 'fs'
import tap from 'tap'
import compile from '../lib/sassc.js'

const scssOk = 'test/setup/scss/styles.scss'
const scssInvImport = 'test/setup/scss/invalid-import.scss'
const scssInvRule = 'test/setup/scss/invalid-rule.scss'
const cssOk = 'test/setup/style.css'
const cssProtected = 'test/setup/protected.css'

tap.test(`error code 0 is returned
        when all was ok`, function ( t ) {
    const returnValue = compile( scssOk, cssOk )
    t.ok( returnValue === 0, `ok` )

    t.end()
})

tap.test(`error code 10 is returned
        when an import was invalid`, function ( t ) {
    const returnValue = compile( scssInvImport, cssOk )
    t.ok( returnValue === 10, `compile error` )

    t.end()
})

tap.test(`error code 10 is returned
        when a css rule was invalid`, function ( t ) {
    const returnValue = compile( scssInvRule, cssOk )
    t.ok( returnValue === 10, `compile error` )

    t.end()
})

tap.test(`error code 20 is returned
        when the file is read only`, function ( t ) {
    fs.chmodSync(cssProtected, 0o444)
    const returnValue = compile( scssOk, cssProtected )
    t.ok( returnValue === 20, `filesystem error` )

    t.end()
})


