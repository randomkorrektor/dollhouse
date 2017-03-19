import models from '../models';

export default {
    create: async ({ email, password }) => {
        const user = await models.user.findOne({
            email,
            password
        });
        return models.userSession.create({
            user: user._id
        });
    },
    delete: ({ sessionId }) => models.userSession.remove({
        _id: sessionId
    })
};
