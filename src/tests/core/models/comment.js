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
            const post = await models.post.create({
                user: user._id,
                subject: 'subject',
                text: 'text',
                images: ['images']
            });
            const comment = await models.comment.create({
                user: user._id,
                post: post._id,
                text: 'text',
                images: ['images']
            });
            assert.deepEqual(comment.toObject(), {
                user: user._id,
                _id: comment._id,
                post: post._id,
                __v: 0,
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
            const post = await models.post.create({
                user,
                subject: 'subject',
                text: 'text',
                images: ['images']
            });
            await models.comment.create({
                user: user._id,
                post: post._id,
                text: 'text',
                images: ['images']
            });
            const comment = await models.comment.find({
                user: user._id
            });
            assert.deepEqual(comment[0].toObject(), {
                user: user._id,
                _id: comment[0]._id,
                post: post._id,
                __v: 0,
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
            const post = await models.post.create({
                user,
                subject: 'subject',
                text: 'text',
                images: ['images']
            });
            await models.comment.create({
                user: user._id,
                post: post._id,
                text: 'text',
                images: ['images']
            });
            const comment = await models.comment.findOne({
                user: user._id
            });
            assert.deepEqual(comment.toObject(), {
                user: user._id,
                _id: comment._id,
                post: post._id,
                __v: 0,
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
            const post = await models.post.create({
                user,
                subject: 'subject',
                text: 'text',
                images: ['images']
            });
            const { _id } = await models.comment.create({
                user: user._id,
                post: post._id,
                text: 'text',
                images: ['images']
            });
            const comment = await models.comment.findById(_id);
            assert.deepEqual(comment.toObject(), {
                user: user._id,
                _id: comment._id,
                post: post._id,
                __v: 0,
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
            const post = await models.post.create({
                user: user._id,
                subject: 'subject',
                text: 'text',
                images: ['images']
            });
            const comment = await models.comment.create({
                user: user._id,
                post: post._id,
                text: 'text',
                images: ['images']
            });
            comment.text = 'text1';
            await comment.save();
            assert.deepEqual(comment.toObject(), {
                user: user._id,
                _id: comment._id,
                post: post._id,
                __v: 0,
                text: 'text1',
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
            const post = await models.post.create({
                user: user._id,
                subject: 'subject',
                text: 'text',
                images: ['images']
            });
            await models.comment.create({
                user: user._id,
                post: post._id,
                text: 'text',
                images: ['images']
            });

            await models.comment.remove({
                user: user._id
            });
            const comments = await models.comment.find({});
            assert.deepEqual(comments.length, 0);
        });
    });
};
