import config from './settings.js'
import express from 'express';
import path from 'path';
import configRouting from './routes.js';
import { assume404 } from '../middlewares/authMiddleware.mjs';

export default (app, passport) => {
  //middleware
  //parse application/json
  // app.use(bodyParser.json({
  //   limit: config.bodyLimit
  // }));

  app.use(express.json());


  //passport config
  app.use(passport.initialize());



  let apiRouter = express.Router();
  configRouting(apiRouter, passport);
  app.use('/api', apiRouter);

  //app.use(assume404);   

  //костыль
  const __dirname = path.dirname(new URL(import.meta.url).pathname).slice(1);
  //console.log(__dirname);
  //app.use('/adm', express.static(__dirname + "/../../admin"));
  app.use(express.static(__dirname + "/../../public"));
  app.use('/admin',
    (req, res, next) => { console.log('admin route is handled'); next(); },
    express.static(__dirname + "/../../public"));


}