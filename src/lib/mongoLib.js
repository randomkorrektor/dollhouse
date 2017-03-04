import mongoose from 'mongoose';

export default (host, port, dbname) => {
    mongoose.connect(`mongodb://${host}:${port}/${dbname}`);
};
