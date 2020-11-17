import Admin from '../models/admin.model'

export default {
    getData: async (req, res, next) => {
        const { adminID } = req.body
        const admin = await Admin.checkExistingField('_id', admin