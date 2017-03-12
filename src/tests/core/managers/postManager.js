import assert from 'assert';
import models from '../../../core/models';
import managers from '../../../core/managers';

export default () => {
    describe('postManager', () => {
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
            const post = await managers.postManager.create(userSession._id, 'subject', 'text', ['images']);
            assert.deepEqual(post.toObject(), {
                _id: post._id,
                __v: 0,
                subject: 'subject',
                text: 'text',
                images: ['images'],
                date: post.date
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
            const post = await managers.postManager.create(userSession._id, 'subject', 'text', ['images']);
            const readProduct = await (managers.postManager.find());
            assert.deepEqual(readProduct[0].toObject(), {
                 _id: post._id,
                __v: 0,
                subject: 'subject',
                text: 'text',
                images: ['images'],
                date: post.date
            });
        });
        it('update', async () => {
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
            const post = await managers.postManager.create(userSession._id, 'subject', 'text', ['images']);
            const readProduct = await managers.postManager.update(userSession._id, post._id, 'name1');
            assert.deepEqual(readProduct.toObject(), {
                 _id: post._id,
                __v: 0,
                subject: 'name1',
                text: 'text',
                images: ['images'],
                date: post.date
            });
        });
        it('delete', async () => {
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
            const post = await managers.postManager.create(userSession._id, 'subject', 'text', ['images']);
            await managers.postManager.delete(userSession._id, post._id);
            const readProduct = await (models.post.find({}));
            assert.deepEqual(readProduct.length, 0);
        });
    });
};

