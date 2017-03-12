import assert from 'assert';
import models from '../../../core/models';

export default () => {
    describe('post', () => {
        it('create', async () => {
           const post = await models.post.create({
                subject: 'subject',
                text: 'text',
                images: ['images']
            });
            assert.deepEqual(post.toObject(), {
                _id: post._id,
                __v: 0,
                subject: 'subject',
                text: 'text',
                images: ['images'],
                date: post.date
            });
        });
        it('find', async () => {
           await models.post.create({
                subject: 'subject',
                text: 'text',
                images: ['images']
            });
            const post = await models.post.find({
                subject: 'subject',
            });
            assert.deepEqual(post[0].toObject(), {
                _id: post[0]._id,
                __v: 0,
                subject: 'subject',
                text: 'text',
                images: ['images'],
                date: post[0].date
            });
        });
        it('findOne', async () => {
            await models.post.create({
                subject: 'subject',
                text: 'text',
                images: ['images']
            });
            const post = await models.post.findOne({
                subject: 'subject',
            });
            assert.deepEqual(post.toObject(), {
                _id: post._id,
                __v: 0,
                subject: 'subject',
                text: 'text',
                images: ['images'],
                date: post.date
            });
        });
        it('findBId', async () => {
            const { _id } = await models.post.create({
                subject: 'subject',
                text: 'text',
                images: ['images']
            });
            const post = await models.post.findById(_id);
            assert.deepEqual(post.toObject(), {
                _id: post._id,
                __v: 0,
                subject: 'subject',
                text: 'text',
                images: ['images'],
                date: post.date
            });
        });
        it('update', async () => {
            const post = await models.post.create({
                subject: 'subject',
                text: 'text',
                images: ['images']
            });
            post.subject = 'subject1';
            await post.save();
            assert.deepEqual(post.toObject(), {
                _id: post._id,
                __v: 0,
                subject: 'subject1',
                text: 'text',
                images: ['images'],
                date: post.date
            });
        });
        it('delete', async () => {
            await models.post.create({
                subject: 'subject',
                text: 'text',
                images: ['images']
            });
            await models.post.remove({
                subject: 'subject',
            });
            const posts = await models.post.find({});
            assert.deepEqual(posts.length, 0);
        });
    });
};
