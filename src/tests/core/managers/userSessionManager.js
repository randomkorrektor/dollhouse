import assert from 'assert';
import models from '../../../core/models';
import managers from '../../../core/managers';

export default () => {
    describe('userSessionManager', () => {
        it('create', async () => {
            const user = await (models.user.create({
                name: 'name',
                email: 'email',
                password: 'password',
                address: 'address'
            }));
            const userSession = await managers.userSessionManager.create({
                email: 'email',
                password: 'password'
            });
            assert.deepEqual(userSession.toObject(), {
                user: user._id,
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
            const session = await models.userSession.create({
                user
            });

            await managers.userSessionManager.delete({ sessionId: session._id });
            const sess = await models.userSession.find({});
            assert.deepEqual(sess.length, 0);
        });
    });
};
