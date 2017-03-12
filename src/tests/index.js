import core from './core';
import models from '../core/models';

export default () => {
    describe('Test', () => {
        beforeEach(async () => {
           await models.user.remove({});
           await models.userSession.remove({});
           await models.product.remove({});
           await models.post.remove({});
           await models.comment.remove({});
        });
        core();
    });
};
