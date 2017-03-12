import user from './user';
import userSession from './userSession';
import product from './product';

export default () => {
    describe('models', () => {
        user();
        userSession();
        product();
    });
};
