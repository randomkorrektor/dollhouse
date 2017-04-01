import auth from './auth';
import user from './user';
import posts from './post';
import products from './products';

export default () => {
    auth();
    user();
    posts();
    products();
};
