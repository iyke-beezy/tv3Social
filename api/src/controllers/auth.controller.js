import passport from "passport";
import debug from "debug";
import passportLocal from "../passport/passport-local";
import { ApplicationError, NotFoundError } from "../helpers/errors";

const DEBUG = debug("dev");

const createCookieFromToken = (Admin, statusCode, req, res) => {
    const token = Admin.generateVerificationToken();

    res.status(statusCode).json({
        status: "success",
        token,
        data: {
            Admin,
        },
    });
};

export default {
    signup: async (req, res, next) => {
        passport.authenticate(
            "signup",
            { session: false },
            async (err, Admin, info) => {
                try {
                    if (err || !Admin) {
                        const { statusCode = 400, message } = info;

                        return res.status(statusCode).json({
                            status: "error",
                            error: {
                                message,
                            },
                        });
                    }
                    createCookieFromToken(Admin, 201, req, res);
                } catch (error) {
                    DEBUG(error);
                    throw new ApplicationError(500, error);
                }
            }
        )(req, res, next);
    },

    login: (req, res, next) => {
        passport.authenticate("login", { session: false }, (err, Admin, info) => {
            if (err || !Admin) {
                let message = err;
                if (info) {
                    message = info.message;
                }
                return res.status(401).json({
                    status: "error",
                    error: {
                        message,
                    },
                });
            }
            createCookieFromToken(Admin, 200, req, res);
        })(req, res, next);
    },

};