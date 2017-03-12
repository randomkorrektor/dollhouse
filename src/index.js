import lib from './lib';
import core from './core';
import tests from './tests';

export default {
    core: () => {
        lib('localhost', '27017', 'dollhouseDB');
        core();
    },
    test: () => {
        lib('192.168.0.102', '27017', 'dollhouseDBTest');
        tests();
    }
};

