import models from '../models';

export default {
    create: (name, email, password, adress) => models.user.create({
            name,
            email,
            password,
            adress
        })
};
