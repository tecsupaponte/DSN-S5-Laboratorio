const { PrismaClient } = require('@prisma/client')

var express = require('express');
var router = express.Router();
const prisma = new PrismaClient()

router.get('/', async function (req, res, next) {
	const users = await prisma.user.findMany({
		orderBy: {
			id: 'asc'
		}
	});

	res.render('index', { title: 'Usuarios', users: users });
});

router.post('/', async function (req, res, next) {
	
	await prisma.user.delete({
		where: {
			id: parseInt(req.body.userId)
		}
	});

	res.redirect('/');
});

module.exports = router;
