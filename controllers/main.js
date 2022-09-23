const express = require('express')


module.exports={
    getMain: (req, res) =>{
        res.send('<a href="/logout">Salir</a>')
    }
}