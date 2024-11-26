// Modules -- Encapsulated code (only share minimum)
// Every file in node is a module
// Everytime you create module you have to start with dot .
const names = require('./names')
const sayHi = require('./utils')
const data = require ('./alternative-flavor')
require ('./mind-grenade')


sayHi('susan')
sayHi(names.john)
sayHi(names.peter)