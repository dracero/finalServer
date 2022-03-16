const express = require('express');
const passport = require('passport');
const cors = require('cors')
const router = express.Router();
const app = express();
app.use(cors())
const mainController = require('../controllers/mainController');


/* -------------- routes -------------- */

// login
router.get('/login', mainController.LoginOk);

router.post('/login', passport.authenticate(['login','jwt'], {session: false , 
                                                        //successRedirect: '/api/auth/successLogin',
                                                        failureRedirect: '/api/auth/faillogin'
                                                        }),  mainController.logUser); // ,  mainController.Redirect

router.get('/faillogin', mainController.LoginFail);

router.get('/logout', mainController.Logout);

// register
router.get('/register', mainController.RegisterOk);

router.post('/register', passport.authenticate(['register','jwt'], {session: false , 
                                                            //successRedirect: '/api/auth/login',
                                                            failureRedirect: '/api/auth/failregister'}),  mainController.register); // ,  mainController.Redirect

router.get('/failregister', mainController.RegisterFail);

module.exports = router;
