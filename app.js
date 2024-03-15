const express = require ('express');
const authRouters = require ('./routes/auth.js')
const app = express ();

app.use ('/api/auth', authRoutes)



module.exports = app;