/*export { AethonDOM }
from './src/index.js'

module.exports = AethonDOM*/

const AethonDOM = require('./src')
module.exports = AethonDOM.default ? AethonDOM.default : AethonDOM