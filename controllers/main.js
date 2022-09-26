const express = require('express')


module.exports={
    getMain: (req, res) =>{
        res.render('main',{
             title: "Main",
        });
    },
    getPersonal: (req, res) =>{
        res.render('personal',{
             title: "Personal",
        });
    },
    getWork: (req, res) =>{
        res.render('work',{
             title: "Work",
        });
    },
    getCollege: (req, res) =>{
        res.render('college',{
             title: "College",
        });
    }
};