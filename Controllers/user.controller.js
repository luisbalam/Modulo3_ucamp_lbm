const mongoose = require ('mongoose'), 
      User = mongoose.model('User');

//const User = require('mongoose').model('User'); //esta forma es válida para lo que está en las lineas 1 y 2

const signup = async (req, res)=> {
    try {
        const user = new User(req.body);

        const resp = await user.save();

        return res.json({
            menssage: 'User creado satisfactoriamente',
            detail: resp
        })
    }catch (e){
        return res.json({
            menssage: 'error',
            detail: e
        })
    }
}


const getUsers = async (req, res)=> {
    try {

        const resp = await user.find();

        if (resp.length===0){
            return res.json({
                menssage: 'error',
                detail: 'no hay registros'
            })
        } else {
            return res.json({
                menssage: 'Users',
                detail: resp
            })
        }
        
    }catch (e){
        return res.json({
            menssage: 'error',
            detail: e
        })
    }
}


const updateUser = async (req, res)=> {
    try {
        const newData = req.body;

        const resp = await User.findByIdAndUpdate(
            newData.userId,
            {$set: newData },
            {new: true }
        )

       
        return res.json({
                menssage: 'Users update succesfully',
                detail: resp
            })
        
    }catch (e){
        return res.json({
            menssage: 'error',
            detail: e
        })
    }
}


const deleteUser = async (req, res) => {
    try {
        const resp = await User.findByIdAndDelete(req.body.userId)

        return res.json({
            menssage: 'User deleted successfully',
            detail: resp
        })
    } catch (e) {
        return res.json({
            menssage: 'Error',
            detail: e
        })
    }
}

module.exports = {
    signup,
    getUsers,
    updateUser,
    deleteUser,
}