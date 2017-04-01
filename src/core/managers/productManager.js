import models from '../models';

export default {
    create: async (sessionId, name, description, pictures, price) => {
        const { user } = await models.userSession.findById(sessionId)
            .populate('user');
        if (!user.admin) {
            return null;
        }
        return models.product.create({
            name,
            description,
            pictures,
            price
        });
    },
    update: async (sessionId, productId, name, description, pictures, price) => {
        const { user } = await models.userSession.findById(sessionId)
            .populate('user');
        if (!user.admin) {
            return null;
        }
        const product = await models.product.findById(productId);
        if (name) {
            product.name = name;
        }
        if (description) {
            product.description = description;
        }
        if (pictures) {
            product.pictures = pictures;
        }
        if (price) {
            product.price = price;
        }
        return product.save();
    },
    find: models.product.find.bind(models.product, {}),
    findOne: ({ id }) => models.product.findOne.bind(models.product, {
        _id: id
    }),
    delete: async (sessionId, productId) => {
        const { user } = await models.userSession.findById(sessionId)
            .populate('user');
        if (!user.admin) {
            return null;
        }
        return models.product.remove({
            _id: productId
        });
    },
};
