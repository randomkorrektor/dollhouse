import models from './models';
import managers from './managers';
import routes from './routes';

export default () => {
    describe('core', () => {
        models();
        managers();
        routes();
    });
};
