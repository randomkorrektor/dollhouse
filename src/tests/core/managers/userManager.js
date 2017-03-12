import assert from 'assert';
import models from '../../../core/models';
import managers from '../../../core/managers';

export default () => {
    describe('userManager', () => {
        it('create', async () => {
            const user = await (managers.userManager.create('name', 'email', 'password', 'picture', 'address'));
            assert.deepEqual(user.toObject(), {
                name: 'name',
                email: 'email',
                address: 'address',
                password: 'password',
                picture: 'picture',
                admin: false,
                __v: 0,
                _id: user._id
            });
        });
        it('readSelf', async () => {
            const user = await (managers.userManager.create('name', 'email', 'password', 'picture', 'address'));
            const userSession = await models.userSession.create({
                user: user._id
            });
            const selfUser = await managers.userManager.readSelf(userSession);
            assert.deepEqual(selfUser.toObject(), {
                name: 'name',
                email: 'email',
                address: 'address',
                picture: 'picture',
                admin: false,
                __v: 0,
                _id: user._id
            });
        });
        it('readAllByAdmin', async () => {
            const user = await (models.user.create({
                name: 'name',
                email: 'email',
                password: 'password',
                picture: 'picture',
                admin: true,
                address: 'address'
            }));
            const userSession = await models.userSession.create({
                user: user._id
            });
            const allUsers = await managers.userManager.readAll(userSession);
            allUsers[0] = allUsers[0].toObject();
            assert.deepEqual(allUsers, [{
                name: 'name',
                email: 'email',
                address: 'address',
                picture: 'picture',
                admin: true,
                __v: 0,
                _id: user._id
            }]);
        });
        it('readAllByOther', async () => {
            const user = await (models.user.create({
                name: 'name',
                email: 'email',
                password: 'password',
                picture: 'picture',
                admin: false,
                address: 'address'
            }));
            const userSession = await models.userSession.create({
                user: user._id
            });
            const allUsers = await managers.userManager.readAll(userSession);
            assert.deepEqual(allUsers, null);
        });
        it('update', async () => {
            const user = await (managers.userManager.create('name', 'email', 'password', 'picture', 'address'));
            const userSession = await models.userSession.create({
                user: user._id
            });
            const upUser = await managers.userManager.update(userSession,'newName','newPicture');
            assert.deepEqual(upUser.toObject(), {
                name: 'newName',
                email: 'email',
                address: 'address',
                picture: 'newPicture',
                admin: false,
                __v: 0,
                _id: user._id
            });
        });
    });
};
