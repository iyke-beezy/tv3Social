import mongoose from 'mongoose'
import { config } from 'dotenv'
import debug from 'debug'

config()
const DEBUG = debug('dev')

const { NODE_ENV } = process.env

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
};
const mongoUrl = process.env.MONGODB_URI

mongoose
    .connect(mongoUrl, options)
    .then(() => {
        DEBUG("MongoDB is connected");
    })
    .catch((err) => {
        DEBUG("MongoDB connection unsuccessful");
        DEBUG(err);
    });