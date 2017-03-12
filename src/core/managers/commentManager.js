import models from '../models';

export default {
    create: (userId, postId, text, images) => models.comment.create({
        user: userId,
        post: postId,
        text,
        images
    }),
    find: postId => models.comment.find({
        post: postId
    })
};
