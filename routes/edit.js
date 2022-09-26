const { PrismaClient } = require('@prisma/client');

var express = require('express');
var router = express.Router();
const prisma = new PrismaClient();

router.get('/:id', async function (req, res) {

	const user = await prisma.user.findUnique({
		where: {
			id: parseInt(req.params.id)
		}
	});

	res.render('edit', { title: "Editar Usuario", user: user });
});

router.post('/', async function (req, res) {

	try {
		await prisma.user.update({
			where: {
				id: parseInt(req.body.userId)
			},
			data: {
				name: req.body.name,
				email: req.body.email,
				username: req.body.username,
				password: req.body.password
			}
		});
	} catch (error) {
		console.log(error.message)
	}


	res.redirect('/');
});

module.exports = router;
