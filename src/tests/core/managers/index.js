import userManager from './userManager';
import userSessionManager from './userSessionManager';

export default () => {
    describe('managers', () => {
        userManager();
        userSessionManager();
    });
};
