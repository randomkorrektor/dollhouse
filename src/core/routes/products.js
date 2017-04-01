import APILib from '../../lib/APILib';
import managers from '../managers';

export default () => {
    APILib.get('/api/product', managers.productManager.find);
    APILib.get('/api/product/:id', managers.productManager.findOne);
};
