const rollup = require('rollup')
const uglify = require('rollup-plugin-uglify')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')

const inputOpt = {
    input: "packages/aethon/index.js"
}
const output = {
    file: 'packages/aethon/dist/aethon.js',
    format: 'umd',
    name: 'aethon.js',
}

function build() {

    return rollup.rollup(inputOpt).then((bundle) => {
        bundle.generate(output).then(() => {
            bundle.write(output)
        })
    })

}
build().then(() => {
    console.log('Build completed')
})