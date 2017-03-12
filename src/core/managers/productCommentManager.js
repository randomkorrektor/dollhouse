import models from '../models';

export default {
    create: async (sessionId, productId, subject, text, images) => {
        const session = await models.userSession.findById(sessionId);
        return models.productComment.create({
            user: session.user,
            product: productId,
            subject,
            text,
            images
        });
    },
    find: productId => models.productComment.find({
        product: productId
    })
};
