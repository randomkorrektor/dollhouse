import assert from 'assert';
import models from '../../../core/models';
import managers from '../../../core/managers';

export default () => {
    describe('userManager', () => {
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