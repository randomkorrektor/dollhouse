import lib from './lib';
import core from './core';
import tests from './tests';

export default {
    core: () => {
        lib('localhost', '27017', 'dollhouseDB');
        core();
    },
    test: () => {
        lib('localhost', '27017', 'dollhouseDBTest');
        console.log('asd')
        tests();
    }
};

