//const express= require('express');

const express = require('express'),
     router = express. Router(),
     {
        signup,
        getUser,
        updateUser,
        deleteUser,
     } = require ('../controllers');

router.post('/', signup);
router.get('/', getUser);
router.put('/', updateUser);
router.delete('/id:', deleteUser);

module.exports = router;



