import User from '../models/user.model'

export const addData = async (req, res) => {
    const { age, gender, region } = req.body
    try {
        const user = new User();
        user.Age = age
        user.Gender = gender
        user.Region = region

        await user.save()
        res.status(200).json({
            status: 'success',
            data: {
                message: 'successful',
                payload: user
            }
        })
    }
    catch (err) {
        res.status(500).json({
            status: 'error',
            data: {
                message: err.message
            }
        })
    }
}


export const getData = async (req, res) => {
    
    try{
        const users = await User.find()
        res.status(200).json({
            status: 'successful',
            data: {
                message: 'Successfully retrieved data',
                payload: users
            }
        })
    }
    catch(err){
        res.status(500).json({
            status: 'error',
            data: {
                message: 'Cannot retrieve users '
            }
        })
    }
}