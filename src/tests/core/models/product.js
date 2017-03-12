import assert from 'assert';
import models from '../../../core/models';

export default () => {
    describe('product', () => {
        it('create', async () => {
            const product = await (models.product.create({
                name: 'name',
                description: 'description',
                pictures: ['picture1', 'picture2'],
                price: 1000
            }));
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
            const product = await (models.product.create({
                name: 'name',
                description: 'description',
                pictures: ['picture1', 'picture2'],
                price: 1000
            }));
            const readProduct = await (models.product.find({
                name: 'name'
            }));
            assert.deepEqual(readProduct[0].toObject(), {
                name: 'name',
                description: 'description',
                pictures: ['picture1', 'picture2'],
                price: 1000,
                __v: 0,
                _id: product._id
            });
        });
        it('readOne', async () => {
            const product = await (models.product.create({
                name: 'name',
                description: 'description',
                pictures: ['picture1', 'picture2'],
                price: 1000
            }));
            const readProduct = await (models.product.findOne({
                name: 'name'
            }));
            assert.deepEqual(readProduct.toObject(), {
                name: 'name',
                description: 'description',
                pictures: ['picture1', 'picture2'],
                price: 1000,
                __v: 0,
                _id: product._id
            });
        });
        it('findById', async () => {
            const product = await (models.product.create({
                name: 'name',
                description: 'description',
                pictures: ['picture1', 'picture2'],
                price: 1000
            }));
            const readProduct = await (models.product.findById(product._id));
            assert.deepEqual(readProduct.toObject(), {
                name: 'name',
                description: 'description',
                pictures: ['picture1', 'picture2'],
                price: 1000,
                __v: 0,
                _id: product._id
            });
        });
        it('update', async () => {
            const product = await (models.product.create({
                name: 'name',
                description: 'description',
                pictures: ['picture1', 'picture2'],
                price: 1000
            }));
            const readProduct = await (models.product.findById(product._id));
            readProduct.name = 'updateName';
            await product.save();
            assert.deepEqual(readProduct.toObject(), {
                name: 'updateName',
                description: 'description',
                pictures: ['picture1', 'picture2'],
                price: 1000,
                __v: 0,
                _id: product._id
            });
        });
        it('delete', async () => {
            const product = await (models.product.create({
                name: 'name',
                description: 'description',
                pictures: ['picture1', 'picture2'],
                price: 1000
            }));
            await models.product.remove({
                name: 'name'
            });
            const readProduct = await (models.product.find({ }));
            assert.deepEqual(readProduct.length, 0);
        });
    });
};

