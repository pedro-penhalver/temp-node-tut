// Modules
const names = require('./4-names');
// Desestruturação
// const {john, peter} = require('./4-names');
const sayBye = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');
console.log(data)
console.log(names)
sayBye('susan')
sayBye(names.john)
sayBye(names.peter)
