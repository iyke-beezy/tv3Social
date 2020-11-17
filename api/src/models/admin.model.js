import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { config } from 'dotenv'
import jwt from 'jsonwebtoken'


config()
const jwtPrivateSecret = process.env.JWT_PRIVATE_SECRET.replace(/\\n/g, "\n");
//build the admin schema
const adminSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'fullName is required']
    },

    username: {
        type: String,
        required: [true, 'username is required']
    },

    password: {
        type: String,
        required: [true, 'password is required']
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    lastLogin: Date
})

adminSchema.pre("save", async function (next) {
    if (!this.password || !this.isModified("password")) return next;

    this.password = await bcrypt.hash(
        this.password,
        parseInt(process.env.HASH)
    );
    next();
})

//compare passwords for login
adminSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

//remove password from user object when requested 
adminSchema.methods.toJSON = function () {
    const user = this;

    const userObj = user.toObject();
    delete userObj.password;
    return userObj;
};

//generate private jwt codes for authorization which expires in 10days
adminSchema.methods.generateVerificationToken = function () {
    return jwt.sign({ id: this._id }, jwtPrivateSecret, {
        expiresIn: "10d",
        algorithm: "RS256",
    });
};

adminSchema.statics.checkExistingField = async (field, value) => {
    const checkField = await Org.findOne({ [`${field}`]: value });

    return checkField;
};

const Admin = mongoose.model('Admin', adminSchema)

export default Admin