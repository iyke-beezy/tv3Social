import mongoose from 'mongoose'


const userSchema = mongoose.Schema({
    Age: {
        type: String,
        required: [true, 'Age is required']
    },

    Gender: {
        type: String,
        required: [true, 'Gender is required']
    },

    Region: {
        type: String,
        required: [true, 'Region is required']
    },

    city: String,
    timestamp: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('User', userSchema)

export default User