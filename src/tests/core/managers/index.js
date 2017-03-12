import userManager from './userManager';
import userSessionManager from './userSessionManager';
import productManager from './productManager';
import productCommentManager from './productCommentManager';
import postManager from './postManager';

export default () => {
    describe('managers', () => {
        userManager();
        userSessionManager();
        productManager();
        productCommentManager();
        postManager();
    });
};
