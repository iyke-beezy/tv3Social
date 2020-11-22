import Admin from '../models/admin.model'

export const getData = async (req, res, next) => {
        const { adminID } = req.body
        try {
            const admin = await Admin.checkExistingField('_id', adminID)
            res.status(200).json({
                status: 'success',
                data: {
                    payload: admin,
                    message: 'successfully extracted'
                }
            })
        } catch(err) {
            res.status(400).json({
                status: 'error',
                data: {
                    message: err.message
                }
            })
        }
    }

