// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packgeName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file
// manual approach (create package.json in the root, create propeties etc)
// npm init (step by step, press enter to skip)
// pm init -y (everything default)

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);
