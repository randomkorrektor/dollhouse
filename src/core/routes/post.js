import APILib from '../../lib/APILib';
import managers from '../managers';

export default () => {
    APILib.get('/api/posts', managers.postManager.find);
};
