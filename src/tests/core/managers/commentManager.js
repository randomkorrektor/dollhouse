import assert from 'assert';
import models from '../../../core/models';
import managers from '../../../core/managers';

export default () => {
    describe('commentManager', () => {
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
            const comment = await (managers.commentManager.create(user._id, post._id, 'text', ['images']));
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
                user: user._id,
                subject: 'subject',
                text: 'text',
                images: ['images']
            });
            const comment = await (managers.commentManager.create(user._id, post._id, 'text', ['images']));
            const postComments = await models.comment.find(post._id);
            assert.deepEqual(postComments.length, 0);
        });
    });
};