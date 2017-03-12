import user from './user';
import userSession from './userSession';

export default () => {
    describe('models', () => {
        user();
        userSession();
    });
};
