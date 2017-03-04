require('babel-core/register');
require('babel-polyfill');
const test = require('./dist').default.test;

test();
