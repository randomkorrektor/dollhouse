import user from './user';
import userSession from './userSession';
import product from './product';
import post from './post';
import comment from './comment';
import productComment from './productComment';

export default () => {
    describe('models', () => {
        user();
        userSession();
        product();
        post();
        comment();
        productComment();
    });
};
