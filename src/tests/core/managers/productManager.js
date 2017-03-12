import assert from 'assert';
import models from '../../../core/models';
import managers from '../../../core/managers';

export default () => {
    describe('productManager', () => {
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
            assert.deepEqual(product.toObject(), {
                name: 'name',
                description: 'description',
                pictures: ['picture1', 'picture2'],
                price: 1000,
                __v: 0,
                _id: product._id
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
            const readProduct = await (managers.productManager.find());
            assert.deepEqual(readProduct[0].toObject(), {
                name: 'name',
                description: 'description',
                pictures: ['picture1', 'picture2'],
                price: 1000,
                __v: 0,
                _id: product._id
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
            const product = await (managers.productManager.create(userSession._id, 'name', 'description', ['picture1', 'picture2'], 1000));
            const readProduct = await managers.productManager.update(userSession._id, product._id, 'name1');
            assert.deepEqual(readProduct.toObject(), {
                name: 'name1',
                description: 'description',
                pictures: ['picture1', 'picture2'],
                price: 1000,
                __v: 0,
                _id: product._id
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
            const product = await (managers.productManager.create(userSession._id, 'name', 'description', ['picture1', 'picture2'], 1000));
            await managers.productManager.delete(userSession._id, product._id);
            const readProduct = await (models.product.find({}));
            assert.deepEqual(readProduct.length, 0);
        });
    });
};

