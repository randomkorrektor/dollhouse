import assert from 'assert';
import models from '../../../core/models';

export default () => {
    describe('post', () => {
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
            assert.deepEqual(post.toObject(), {
                user: user._id,
                _id: post._id,
                __v: 0,
                subject: 'subject',
                text: 'text',
                images: ['images'],
                date: post.date
            });
        });
        it('find', async () => {
            const user = await (models.user.create({
                name: 'name',
                email: 'email',
                password: 'password',
                address: 'address'
            }));
            await models.post.create({
                user,
                subject: 'subject',
                text: 'text',
                images: ['images']
            });
            const post = await models.post.find({
                user: user._id
            });
            assert.deepEqual(post[0].toObject(), {
                user: user._id,
                _id: post[0]._id,
                __v: 0,
                subject: 'subject',
                text: 'text',
                images: ['images'],
                date: post[0].date
            });
        });
        it('findOne', async () => {
            const user = await (models.user.create({
                name: 'name',
                email: 'email',
                password: 'password',
                address: 'address'
            }));
            await models.post.create({
                user,
                subject: 'subject',
                text: 'text',
                images: ['images']
            });
            const post = await models.post.findOne({
                user: user._id
            });
            assert.deepEqual(post.toObject(), {
                user: user._id,
                _id: post._id,
                __v: 0,
                subject: 'subject',
                text: 'text',
                images: ['images'],
                date: post.date
            });
        });
        it('findBId', async () => {
            const user = await (models.user.create({
                name: 'name',
                email: 'email',
                password: 'password',
                address: 'address'
            }));
            const { _id } = await models.post.create({
                user,
                subject: 'subject',
                text: 'text',
                images: ['images']
            });
            const post = await models.post.findById(_id);
            assert.deepEqual(post.toObject(), {
                user: user._id,
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
                address: 'address'
            }));
            const post = await models.post.create({
                user: user._id,
                subject: 'subject',
                text: 'text',
                images: ['images']
            });
            post.subject = 'subject1';
            await post.save();
            assert.deepEqual(post.toObject(), {
                user: user._id,
                _id: post._id,
                __v: 0,
                subject: 'subject1',
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
                address: 'address'
            }));
            await models.userSession.create({
                user
            });

            await models.post.create({
                user,
                subject: 'subject',
                text: 'text',
                images: ['images']
            });
            await models.post.remove({
                user: user._id
            });
            const posts = await models.post.find({});
            assert.deepEqual(posts.length, 0);
        });
    });
};
