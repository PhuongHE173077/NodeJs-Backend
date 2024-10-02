const path = require('path')
const express = require('express')
const configViewEngine = (app) => {
    app.set('views', './src/views')
    app.use(express.static(path.join(__dirname, 'public')))
}
module.exports = configViewEngine;
