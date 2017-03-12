import models from '../models';

export default {
    create: async (sessionId, subject, text, images) => {
        const { user } = await models.userSession.findById(sessionId)
            .populate('user');
        if (!user.admin) {
            return null;
        }
        return models.post.create({
            subject,
            text,
            images
        });
    },
    update: async (sessionId, postId, subject, text, images) => {
        const { user } = await models.userSession.findById(sessionId)
            .populate('user');
        if (!user.admin) {
            return null;
        }
        const post = await models.post.findById(postId);
        if (subject) {
            post.subject = subject;
        }
        if (text) {
            post.text = text;
        }
        if (images) {
            post.images = images;
        }
        return post.save();
    },
    find: models.post.find.bind(models.post, {}),
    delete: async (sessionId, postId) => {
        const { user } = await models.userSession.findById(sessionId)
            .populate('user');
        if (!user.admin) {
            return null;
        }
        return models.post.remove({
            _id: postId
        });
    },
};
