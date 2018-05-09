//const { React, Component, ReactDOM } = require('./aethon.js')

//const React = require('./src/aethon.js')
//module.exports = React.default ? React.default : React

/*export { createElement, createVNode, Component }
from './src/aethon'

const Aethon = {
    createElement,
    createVNode,
    Component
}

module.exports = Aethon
*/
const Aethon = require('./src')
module.exports = Aethon.default ? Aethon.default : Aethon