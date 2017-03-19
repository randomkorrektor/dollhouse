import lib from './lib';
import core from './core';
import tests from './tests';

export default {
    core: async () => {
        await lib('localhost', '27017', 'dollhouseDB', 3000);
        core();
        console.log('complete');
    },
    test: async () => {
        tests();
    }
};

