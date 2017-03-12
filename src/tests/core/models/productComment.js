import assert from 'assert';
import models from '../../../core/models';

export default () => {
    describe('comment', () => {
        it('create', async () => {
            const user = await (models.user.create({
                name: 'name',
                email: 'email',
                password: 'password',
                address: 'address'
            }));
            const product = await (models.product.create({
                name: 'name',
                description: 'description',
                pictures: ['picture1', 'picture2'],
                price: 1000
            }));
            const comment = await models.productComment.create({
                user: user._id,
                product: product._id,
                subject: 'subject',
                text: 'text',
                images: ['images']
            });
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
        it('find', async () => {
            const user = await (models.user.create({
                name: 'name',
                email: 'email',
                password: 'password',
                address: 'address'
            }));
            const product = await (models.product.create({
                name: 'name',
                description: 'description',
                pictures: ['picture1', 'picture2'],
                price: 1000
            }));
            await models.productComment.create({
                user: user._id,
                product: product._id,
                subject: 'subject',
                text: 'text',
                images: ['images']
            });
            const comment = await models.productComment.find({
                user: user._id
            });
            assert.deepEqual(comment[0].toObject(), {
                user: user._id,
                _id: comment[0]._id,
                product: product._id,
                __v: 0,
                subject: 'subject',
                text: 'text',
                images: ['images'],
                date: comment[0].date
            });
        });
        it('findOne', async () => {
            const user = await (models.user.create({
                name: 'name',
                email: 'email',
                password: 'password',
                address: 'address'
            }));
            const product = await (models.product.create({
                name: 'name',
                description: 'description',
                pictures: ['picture1', 'picture2'],
                price: 1000
            }));
            await models.productComment.create({
                user: user._id,
                product: product._id,
                subject: 'subject',
                text: 'text',
                images: ['images']
            });
            const comment = await models.productComment.findOne({
                user: user._id
            });
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
        it('findBId', async () => {
            const user = await (models.user.create({
                name: 'name',
                email: 'email',
                password: 'password',
                address: 'address'
            }));
            const product = await (models.product.create({
                name: 'name',
                description: 'description',
                pictures: ['picture1', 'picture2'],
                price: 1000
            }));
            const { _id } = await models.productComment.create({
                user: user._id,
                product: product._id,
                subject: 'subject',
                text: 'text',
                images: ['images']
            });
            const comment = await models.productComment.findById(_id);
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
        it('update', async () => {
            const user = await (models.user.create({
                name: 'name',
                email: 'email',
                password: 'password',
                address: 'address'
            }));
            const product = await (models.product.create({
                name: 'name',
                description: 'description',
                pictures: ['picture1', 'picture2'],
                price: 1000
            }));
            const comment = await models.productComment.create({
                user: user._id,
                product: product._id,
                subject: 'subject',
                text: 'text',
                images: ['images']
            });
            comment.subject = 'subject1';
            await comment.save();
            assert.deepEqual(comment.toObject(), {
                user: user._id,
                _id: comment._id,
                product: product._id,
                __v: 0,
                subject: 'subject1',
                text: 'text',
                images: ['images'],
                date: comment.date
            });
        });
        it('delete', async () => {
            const user = await (models.user.create({
                name: 'name',
                email: 'email',
                password: 'password',
                address: 'address'
            }));
            const product = await (models.product.create({
                name: 'name',
                description: 'description',
                pictures: ['picture1', 'picture2'],
                price: 1000
            }));
            await models.productComment.create({
                user: user._id,
                product: product._id,
                subject: 'subject',
                text: 'text',
                images: ['images']
            });

            await models.productComment.remove({
                user: user._id
            });
            const comments = await models.productComment.find({});
            assert.deepEqual(comments.length, 0);
        });
    });
};
