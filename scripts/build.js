const rollup = require('rollup')
const uglify = require('rollup-plugin-uglify')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const bundles = require('./bundles')

async function createBundle(bundle) {
    const _bundle = await rollup.rollup(bundle.input)
    await _bundle.generate(bundle.output)
    await _bundle.write(bundle.output)
}

async function build() {
    for (bundle of bundles) {
        await createBundle(bundle)
    }
}

build()