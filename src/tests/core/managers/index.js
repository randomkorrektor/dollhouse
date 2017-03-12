import userManager from './userManager';
import userSessionManager from './userSessionManager';
import productManager from './productManager';
import productCommentManager from './productCommentManager';
import commentManager from './commentManager';

export default () => {
    describe('managers', () => {
        userManager();
        userSessionManager();
        productManager();
        productCommentManager();
        commentManager();
    });
};
