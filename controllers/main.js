const express = require('express')


module.exports={
    getMain: (req, res) =>{
        res.render('main',{
             title: "personal",
        });
    }
};