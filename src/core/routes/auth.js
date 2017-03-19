import APILib from '../../lib/APILib';
import managers from '../managers';

export default () => {
    APILib.post('/api/auth', managers.userManager.create);
    APILib.get('/api/auth', managers.userSessionManager.create);
    APILib.delete('/api/auth', managers.userSessionManager.delete);
};
