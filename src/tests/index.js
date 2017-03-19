import lib from '../lib';
import core from '../core';
import coreTest from './core';
import models from '../core/models';

export default () => {
    describe('Test', () => {
        before(async () => {
            await lib('192.168.0.102', '27017', 'dollhouseDBTest', 3001);
            core();
        });
        beforeEach(async () => {
            await models.user.remove({});
            await models.userSession.remove({});
            await models.product.remove({});
            await models.post.remove({});
            await models.comment.remove({});
            await models.productComment.remove({});
        });
        coreTest();
    });
};
