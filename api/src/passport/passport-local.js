import debug from 'debug';
import { Strategy } from 'passport-local';
import passport from 'passport';

import Admin from '../models/admin.model'
import User from '../models/user.model'

const DEBUG = debug('dev')

const authFields = {
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}

passport.use(
    'login',
    new Strategy(authFields, async (req, username, password, cb) => {
        try {
            const admin = await Admin.checkExistingField('username', username)
            if (!admin || !admin.password) {
                return cb(null, false, { message: 'Email is not registered.' });
            }

            const checkPassword = await admin.comparePassword(password);

            if (!checkPassword) {
                return cb(null, false, { message: 'Incorrect password.' });
            }
            admin.lastLogin = Date.now()
            admin.markModified('lastLogin')
            await admin.save();
            return cb(null, admin, { message: 'Logged In Successfully' });
        } catch (err) {
            DEBUG(err);
            return cb(null, false, { statusCode: 400, message: err.message });
        }
    }),
)


passport.use(
    'signup',
    new Strategy(authFields, async (req, username, password, cb) => {
        try {
            const checkEmail = await Admin.checkExistingField('email', req.body.email);

            if (checkEmail) {
                return cb(null, false, {
                    statusCode: 409,
                    message: 'Email already registered, log in instead',
                });
            }

            const checkUsername = await Admin.checkExistingField('username', req.body.username);
            if (checkUsername) {
                return cb(null, false, {
                    statusCode: 409,
                    message: 'Username exists, please try another',
                });
            }


            const newAdmin = new Admin();
            newAdmin.fullName = req.body.fullName;
            newAdmin.username = req.body.username;
            newAdmin.password = req.body.password;

            await newAdmin.save();
            return cb(null, newAdmin, { statusCode: 200, message: 'success' });
        } catch (err) {
            DEBUG(err)
            return cb(null, false, { statusCode: 400, message: err.message });
        }
    }),
);

