import mongolib from './mongoLib';
import APILib from './APILib';

export default async (host, port, dbname, selfPort) => {
    mongolib(host, port, dbname);
    await APILib.init(selfPort);
};
