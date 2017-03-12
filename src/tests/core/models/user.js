import assert from 'assert';
import models from '../../../core/models';

export default () => {
    describe('user', () => {
        it('create', async () => {
            const user = await (models.user.create({
                name: 'name',
                email: 'email',
                password: 'password',
                picture: 'picture',
                address: 'address'
            }));
            assert.deepEqual(user.toObject(), {
                name: 'name',
                email: 'email',
                picture: 'picture',
                password: 'password',
                address: 'address',
                admin: false,
                __v: 0,
                _id: user._id
            });
        });
        it('read', async () => {
            const user = await (models.user.create({
                name: 'name',
                email: 'email',
                password: 'password',
                picture: 'picture',
                address: 'address'
            }));
            const readUser = await (models.user.find({
                name: 'name'
            }));
            assert.deepEqual(readUser[0].toObject(), {
                name: 'name',
                email: 'email',
                picture: 'picture',
                address: 'address',
                admin: false,
                __v: 0,
                _id: user._id
            });
        });
        it('readOne', async () => {
            const user = await (models.user.create({
                name: 'name',
                email: 'email',
                password: 'password',
                picture: 'picture',
                address: 'address'
            }));
            const readUser = await (models.user.findOne({
                email: 'email'
            }));
            assert.deepEqual(readUser.toObject(), {
                name: 'name',
                email: 'email',
                picture: 'picture',
                address: 'address',
                admin: false,
                __v: 0,
                _id: user._id
            });
        });
        it('findById', async () => {
            const user = await (models.user.create({
                name: 'name',
                email: 'email',
                password: 'password',
                picture: 'picture',
                address: 'address'
            }));
            const readUser = await (models.user.findById(user._id));
            assert.deepEqual(readUser.toObject(), {
                name: 'name',
                email: 'email',
                picture: 'picture',
                address: 'address',
                admin: false,
                __v: 0,
                _id: user._id
            });
        });
        it('update', async () => {
            const user = await (models.user.create({
                name: 'name',
                email: 'email',
                password: 'password',
                picture: 'picture',
                address: 'address'
            }));
            const updateUser = await (models.user.findById(user._id));
            updateUser.name = 'updateName';
            await user.save();
            assert.deepEqual(updateUser.toObject(), {
                name: 'updateName',
                email: 'email',
                picture: 'picture',
                address: 'address',
                admin: false,
                __v: 0,
                _id: user._id
            });
        });
        it('delete', async () => {
            const user = await (models.user.create({
                name: 'name',
                email: 'email',
                password: 'password',
                picture: 'picture',
                address: 'address'
            }));
            await models.user.remove({
                name: 'name'
            });
            const readUser = await (models.user.find({ }));
            assert.deepEqual(readUser.length, 0);
        });
    });
};
