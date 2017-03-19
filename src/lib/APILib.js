import express from 'express';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';


const API = {};

API.init = async (port) => {
  if (!API.app) {
    API.port = port;
    API.app = express();
    API.app.use(express.static('public'));
    API.app.use(bodyParser.json({ limit: '50mb' }));
    API.app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
    API.app.use(fileUpload());
    API.app.all('*', (req, res, next) => {
      res.header('Access-Control-Allow-Origin', req.headers.origin);
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
      res.header('Access-Control-Allow-Credentials', 'true');
      res.header('X-Powered-By', 'zloy.best');
      next();
    });
  } else {
    await API.server.close();
  }
  return new Promise((resolve, reject) => {
    API.server = API.app.listen(API.port, () => {
      resolve();
    })
      .on('error', (err) => {
        reject(err);
      });
  });
};


API.response = async (name, method, arg, res) => {
  let result;
  try {
    result = {
      success: true,
      data: await (method(arg))
    };
    res.json(result);
  } catch (error) {
    result = {
      success: false,
      error
    };
    res.json(result);
  }
};

API.get = (name, method) => API.app.get(name, (req, res) => API.response(name, method, Object.assign(req.query ? req.query : {}, req.params ? req.params : {}, req.body ? req.body : {}, req.files ? req.files : {}, req.protect ? req.protect : {}), res));

API.post = (name, method) => API.app.post(name, (req, res) => API.response(name, method, Object.assign(req.query ? req.query : {}, req.params ? req.params : {}, req.body ? req.body : {}, req.files ? req.files : {}, req.protect ? req.protect : {}), res));

API.put = (name, method) => API.app.put(name, (req, res) => API.response(name, method, Object.assign(req.query ? req.query : {}, req.params ? req.params : {}, req.body ? req.body : {}, req.files ? req.files : {}, req.protect ? req.protect : {}), res));

API.delete = (name, method) => API.app.delete(name, (req, res) => API.response(name, method, Object.assign(req.query ? req.query : {}, req.params ? req.params : {}, req.body ? req.body : {}, req.files ? req.files : {}, req.protect ? req.protect : {}), res));


export default API;
