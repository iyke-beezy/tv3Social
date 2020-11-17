import { Schema, model } from 'mongoose'


const userSchema = Schema({
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

    city: String
})

const User = model('User', userSchema)

export default User