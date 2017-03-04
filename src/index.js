import lib from './lib';
import core from './core';

export default {
    core: () => {
        lib();
        core();
    },
    test: () => { }
};

