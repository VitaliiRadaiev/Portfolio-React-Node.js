const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
	{
		host: 'smtp.office365.com',
		port: 587, 
		secure: false,
		auth : {
			user: 'vitalii.radaiev@outlook.com',
			pass: 'fioletovy47pomidory'
		}
	},
	{
		from: 'vitalii.radaiev@outlook.com',
	}
);

const mailer = (message) => {
	transporter.sendMail(message, (err, info) => {
		if(err) return console.log(err);
		console.log('Email sent', info);
	})
}

module.exports = mailer;