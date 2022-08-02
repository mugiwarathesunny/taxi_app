const route = require('express').Router()
const userRoute = require('../controllers/users');

route.post('/api/vl/createuser', userRoute.createUser)
route.get('/api/vl/getusers', userRoute.getAllUser)
route.get('/api/vl/getusers/:id', userRoute.getSingleUser)
route.patch('/api/vl/updateuser/:id', userRoute.updateUserById)
route.delete('/api/vl/deleteuser/:id', userRoute.deleteUser)

module.exports = route