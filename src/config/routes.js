
import UserController from '../controllers/userController.js';
import AccountController from '../controllers/accountController.js';
import SportsStoreAuthContoller from '../controllers/sportsStoreAuthContoller.js';

import { authenticate, unAuthHandle, generateAccessToken, respond } from '../middlewares/authMiddleware.mjs';
import SportsStoreController from '../controllers/sportsStoreController.js';

export default (api, passport) => {

  const accountController = new AccountController();
  api.post('/v1/account/register', accountController.registr,// '/v1/account/register'
    passport.authenticate('local', { session: false }), accountController.successRegistr);

  api.post('/v1/account/login', accountController.login,// '/v1/account/login'
    passport.authenticate('local', { session: false, scope: [], failWithError: true }),
    unAuthHandle, generateAccessToken, respond);

  api.get('/v1/account/me', authenticate, accountController.me);
  api.get('/v1/account/logout', authenticate, accountController.logout);// '/v1/account/logout'

  const userController = new UserController();
  api.post('/user/add', authenticate, userController.add);// '/v1/user/add' - Create  
  api.get('/user', authenticate, userController.get);// '/v1/user/' - Read
  api.get('/v1/user/:id', authenticate, userController.getById);// '/v1/user/:id' - Read 1
  api.get('/v1/user/byEmail/:email', authenticate, userController.getByEmail);// 'v1/user/byEmail/:email'
  api.put('/v1/user/:id', authenticate, userController.updateById);// '/v1/user/:id' - Update
  api.delete('/v1/user/:id', authenticate, userController.deleteById);// '/v1/user/:id' -Delete
  api.delete('/v1/user', authenticate, userController.deleteAll);// '/v1/user/' - Delete all

  const authContr = new SportsStoreAuthContoller();
  api.post('/account/login', authContr.login);

  const storeController = new SportsStoreController(api);
  api.get('/products', storeController.getAll);
  api.post('/products', authContr.authenticate, storeController.addProduct);
  api.put('/products/:id', authContr.authenticate, storeController.updateProduct);
  api.delete('/products/:id', authContr.authenticate, storeController.deleteProduct);

  api.get('/orders', storeController.getAllOrders);
  api.post('/orders', authContr.authenticate, storeController.addOrder);

  api.post('/categories', authContr.authenticate, storeController.addCategory);
  api.put('/categories/:id', authContr.authenticate, storeController.updateCategory);
  api.get('/categories', storeController.getAllCategories);
  api.delete('/categories/:id', authContr.authenticate, storeController.deleteCategory);

  // Base URL test endpoint to see if API is running
  api.get('/ping', (req, res) => {
    res.json({ message: 'SportStore API is ALIVE!' })
  });
};