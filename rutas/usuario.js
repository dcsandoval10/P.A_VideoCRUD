const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemaPelicula = new eschema ({
    movieID: String,
    titleMovie: String,
    year: String, 
    duration: String,
    lang: String,
    release: String,
    country: String
})

const ModeloPelicula = mongoose.model('pelicula', eschemaPelicula)
module.exports = router

router.get('/ejemplo', (req,res)=>{
    res.end('Saludo carga desde ruta ejemplo')
})

router.post('/agregarpelicula',(req,res) => {
    const nuevapelicula = new ModeloPelicula({
        movieID: req.body.movieID,
        titleMovie: req.body.title,
        year: req.body.year,
        duration: req.body.duration,
        lang: req.body.lang,
        release: req.body.release,
        country: req.body.country
    })
    nuevapelicula.save(function(err){
        if(!err){
            res.send('Usuario agregado correctamente')
        }
        else {
            res.send(err + 'ERROR EN USUARIO.JS')
        }
    })
})

