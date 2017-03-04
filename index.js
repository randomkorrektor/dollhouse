require('babel-core/register');
require('babel-polyfill');
const core = require('./dist').default.core;

core();
