const express = require('express')
const path =  require('path');
const process = require('process');


module.exports={
    getMain: (req, res) =>{
        res.render('main',{
             title: "Main",
        });
    },
    getPersonal: (req, res) =>{
        res.render(path.join(process.cwd() + "/views" + "/sections" + "/personal"),{
             title: "Personal",
        });
    },
    getWork: (req, res) =>{
        res.render(path.join(process.cwd() + "/views" + "/sections" + "/work"),{
             title: "Work",
        });
    },
    getCollege: (req, res) =>{
        res.render(path.join(process.cwd() + "/views" + "/sections" + "/college"),{
             title: "College",
        });
    }
};