const { PrismaClient } = require('@prisma/client');

var express = require('express');
var router = express.Router();
const prisma = new PrismaClient();

router.get('/', function (req, res) {
    
    res.render('create', { title: "Crear Nuevo Usuario"});
});

router.post('/', async function (req, res) {
    
    const user = {
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }

    await prisma.user.create({
        data: {
            ...user
        }
    });

    res.redirect('/')
});

module.exports = router;
