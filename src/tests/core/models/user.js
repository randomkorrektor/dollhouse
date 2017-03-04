import assert from 'assert';
import models from '../../../core/models';

export default () => {
    describe('user', () => {
        it('create', async () => {
            const user = await (models.user.create({
                name: 'name',
                email: 'email',
                password: 'password',
                address: 'address'
            }));
            assert.deepEqual(user.toObject(), {
                name: 'name',
                email: 'email',
                password: 'password',
                address: 'address',
                admin: false,
                __v: 0,
                _id: user._id
            });
        });
    });
};
