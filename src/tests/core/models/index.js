import user from './user';
import userSession from './userSession';
import post from './post';

export default () => {
    describe('models', () => {
        user();
        userSession();
        post();
    });
};
