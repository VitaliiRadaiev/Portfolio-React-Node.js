const { Router } = require('express');
const nodemailer = require('nodemailer');
const mailer = require('../nodemailer/nodemailer')

const router = Router();

// /api/auth/register
router.post('/email', async (req, res) => {
	try {
		console.log(req.body)

   	const message = {
   		to: 'hf.chelenger@gmail.com',
   		subject: 'Congratulations! Comrade.',
   		html: `
			<h2>Письмо от заказчика!</h2>
			<p>${req.body.name}</p>
			<p>${req.body.email}</p>
			<p>${req.body.message}</p>
   		`
   	}

	let result = await mailer(message);
	console.log('result',result)
	setTimeout(() => {

	res.status(201).json({message: 'Письмо отправлено!'})
	}, 2000)


	} catch(e) {
		res.status(500).json({message: 'Что-то пошло нетак, попробуйте ещё раз.'})
	}
})


module.exports = router