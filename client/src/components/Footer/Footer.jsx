import React from 'react';
import './Footer.scss';

const Footer = (props) => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer_action">
					Тебе нужен сайт? <span>Давай работать вместе!</span>
					<div className="btn" onClick={props.handleShow}>
						<a href="#">Напиши мне</a>
					</div>
				</div>
				<div className="footer_contacts">
					<ul className="footer_contacts_social">
						<li className="footer_contacts_social_item">
							<a href="https://www.facebook.com/Vitalii.de.Radaiev" className="footer_contacts_social_item_link"><span className="icon-facebook"></span></a>
						</li>
						<li className="footer_contacts_social_item">
							<a href="https://www.instagram.com/vitalii.radaiev/" className="footer_contacts_social_item_link"><span className="icon-instagram"></span></a>
						</li>
						<li className="footer_contacts_social_item">
							<a href="https://m.vk.com/vitalii.radaiev" className="footer_contacts_social_item_link"><span className="icon-vk"></span></a>
						</li>
					</ul>
					<div className="footer_contacts_phone">
						<span className="icon-mobile1"></span>
						+380 63-22-903-22
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;