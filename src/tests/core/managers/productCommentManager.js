import assert from 'assert';
import models from '../../../core/models';
import managers from '../../../core/managers';

export default () => {
    describe('productCommentManager', () => {
        it('create', async () => {
            const user = await (models.user.create({
                name: 'name',
                email: 'email',
                password: 'password',
                address: 'address',
                admin: true
            }));
            const userSession = await models.userSession.create({
                user: user._id
            });
            const product = await (managers.productManager.create(userSession._id, 'name', 'description', ['picture1', 'picture2'], 1000));
            const comment = await managers.productCommentManager.create(userSession._id, product._id, 'subject', 'text', ['images']);
            assert.deepEqual(comment.toObject(), {
                user: user._id,
                _id: comment._id,
                product: product._id,
                __v: 0,
                subject: 'subject',
                text: 'text',
                images: ['images'],
                date: comment.date
            });
        });
        it('read', async () => {
            const user = await (models.user.create({
                name: 'name',
                email: 'email',
                password: 'password',
                address: 'address',
                admin: true
            }));
            const userSession = await models.userSession.create({
                user: user._id
            });
            const product = await (managers.productManager.create(userSession._id, 'name', 'description', ['picture1', 'picture2'], 1000));
            const comment = await managers.productCommentManager.create(userSession._id, product._id, 'subject', 'text', ['images']);
            const readProduct = await (managers.productCommentManager.find(product._id));
            assert.deepEqual(readProduct[0].toObject(), {
                user: user._id,
                _id: readProduct[0]._id,
                product: product._id,
                __v: 0,
                subject: 'subject',
                text: 'text',
                images: ['images'],
                date: readProduct[0].date
            });
        });
    });
};

