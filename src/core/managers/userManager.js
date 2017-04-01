import models from '../models';

export default {
    create: async ({ name, email, password }) => {
        const user = await models.user.create({
            name,
            email,
            password
        });
        const session = await models.userSession.create({
            user
        });

        return {
            user,
            session
        };
    },
    readSelf: async ({ session }) => {
        const sessionModel = await models.userSession.findById(session);
        const user = await models.user.findById(sessionModel.user);
        return user;
    },
    readAll: async (sessionId) => {
        const session = await models.userSession.findById(sessionId);
        const user = await models.user.findById(session.user);
        if (user.admin) {
            const users = await models.user.find();
            return users;
        }
        return null;
    },
    update: async (sessionId, name, picture, address) => {
        const session = await models.userSession.findById(sessionId);
        const user = await models.user.findById(session.user);
        if (name != null) {
            user.name = name;
        }
        if (picture != null) {
            user.picture = picture;
        }
        if (address != null) {
            user.address = address;
        }
        return user.save();
    }
};
