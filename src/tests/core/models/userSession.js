import assert from 'assert';
import models from '../../../core/models';

export default () => {
    describe('userSession', () => {
        it('create', async () => {
            const user = await (models.user.create({
                name: 'name',
                email: 'email',
                password: 'password',
                address: 'address'
            }));
            const userSession = await models.userSession.create({
                user: user._id
            });
            assert.deepEqual(userSession.toObject(), {
                user: user._id,
                _id: userSession._id,
                __v: 0
            });
        });
        it('find', async () => {
            const user = await (models.user.create({
                name: 'name',
                email: 'email',
                password: 'password',
                address: 'address'
            }));
            await models.userSession.create({
                user
            });
            const userSession = await models.userSession.find({
                user: user._id
            });
            assert.deepEqual(userSession[0].toObject(), {
                user: user._id,
                _id: userSession[0]._id,
                __v: 0
            });
        });
        it('findOne', async () => {
            const user = await (models.user.create({
                name: 'name',
                email: 'email',
                password: 'password',
                address: 'address'
            }));
            await models.userSession.create({
                user
            });
            const userSession = await models.userSession.findOne({
                user: user._id
            });
            assert.deepEqual(userSession.toObject(), {
                user: user._id,
                _id: userSession._id,
                __v: 0
            });
        });
        it('findBId', async () => {
            const user = await (models.user.create({
                name: 'name',
                email: 'email',
                password: 'password',
                address: 'address'
            }));
            const { _id } = await models.userSession.create({
                user
            });
            const userSession = await models.userSession.findById(_id);
            assert.deepEqual(userSession.toObject(), {
                user: user._id,
                _id: userSession._id,
                __v: 0
            });
        });
        it('update', async () => {
            const user = await (models.user.create({
                name: 'name',
                email: 'email',
                password: 'password',
                address: 'address'
            }));
            const user1 = await (models.user.create({
                name: 'name1',
                email: 'email1',
                password: 'password',
                address: 'address'
            }));
            const userSession = await models.userSession.create({
                user
            });
            userSession.user = user1._id;
            await userSession.save();
            assert.deepEqual(userSession.toObject(), {
                user: user1._id,
                _id: userSession._id,
                __v: 0
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

            await models.userSession.remove({
                user: user._id
            });
            const sess = await models.userSession.find({});
            assert.deepEqual(sess.length, 0);
        });
    });
};
