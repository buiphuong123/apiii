const express = require('express');
const User = require('../models/user.model.js');

const getListUser = async(req, res) => {
    console.log('vao day nhe');
    const user = await User.find();
    return res.json({user: user});
}

module.exports = {
    getListUser,
}