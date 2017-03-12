import userManager from './userManager';
import userSessionManager from './userSessionManager';
import productManager from './productManager';

export default () => {
    describe('managers', () => {
        userManager();
        userSessionManager();
        productManager();
    });
};
