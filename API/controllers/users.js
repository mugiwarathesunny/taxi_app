const User = require('..models/users')
const { useSearchParams } = require('react-router-dom')
require('dotenv').config()

exports.createUser = async (req, res) => {
    let userExist = await User.findOne ({email : req.body.email})
    if (userExist) {
        return res.json({
            message: 'Error',
            response: 'User already exist'
        })

    }else{
        let { names, email, country} = req.body
        let newUser = new User({
            names, email,country
        })
        let data = await newUser.save()
        return res.json({
            message: "Success",
            userData: data

        })
    }
}

exports.getAllUser = async (req,res) => {
    let getUsers = await User.findOne ({ "id": req.params})
    return res.json ({
        message: "Success",
        response: getUsers
    })
}

exports.updateUserById = async (req, res) => {
    try{
        let {names, email, country} = req.body
        let update = await User.findByIdAndUpdate(req.params.id,{names, email, country}, {new: true})
        return res.json({
            message: "Success",
            response: updated
        })
    } catch (err) {
        return res.json({
            message: err.message,
            response: "Fail to update"
        })
    }
}

exports.deleteUser = async (req, res) => {
    try{
        let deleteuser = await useSearchParams.findByIdAndDelete({ _id: req.params.id})
        return res.json({
            message: "Success",
            response: deleteuser
        })
    } catch (err){

    }
}