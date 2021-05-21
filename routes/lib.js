const express = require('express');

const routes = express.Router();

// @desc: Searchbar landing Page
routes.get('/', (req,res,next) => {
    res.render('index', {pageTitle: 'جستجوی کتاب', path: 'search'});
})


module.exports = routes;
