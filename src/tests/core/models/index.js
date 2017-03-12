import user from './user';
import userSession from './userSession';
import post from './post';
import comment from './comment';

export default () => {
    describe('models', () => {
        user();
        userSession();
        post();
        comment();
    });
};
