import models from './models';
import managers from './managers';

export default () => {
    describe('core', () => {
        models();
        managers();
    });
};
