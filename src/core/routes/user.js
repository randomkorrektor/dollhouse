import APILib from '../../lib/APILib';
import managers from '../managers';

export default () => {
    APILib.get('/api/user', managers.userManager.readSelf);
};
