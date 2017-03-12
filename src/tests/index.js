import core from './core';
import models from '../core/models';

export default () => {
    describe('Test', () => {
        beforeEach(async () => {
           await models.user.remove({});
           await models.userSession.remove({});
        });
        core();
    });
};
