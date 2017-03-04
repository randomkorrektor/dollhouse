import lib from './lib';
import core from './core';

export default {
    core: () => {
        lib('localhost', '27017', 'dollhouseDB');
        core();
    },
    test: () => { }
};

