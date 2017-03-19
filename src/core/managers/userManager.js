import models from '../models';

export default {
    create: ({ name, email, password, picture, address }) => models.user.create({
        name,
        email,
        password,
        picture,
        address
    }),
    readSelf: async (sessionId) => {
        const session = await models.userSession.findById(sessionId);
        const user = await models.user.findById(session.user);
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
