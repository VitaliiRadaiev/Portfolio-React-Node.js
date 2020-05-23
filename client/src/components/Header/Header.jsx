import React from 'react';
import './Header.scss';

const Header = (props) => {  
	return (
		<header className="header">
			<div className="container">
				<div className="header_top">
					<ul className="header_top_social">
						<li className="header_top_social_item">
							<a href="https://www.facebook.com/Vitalii.de.Radaiev" className="header_top_social_link"><span className="icon-facebook"></span></a>
						</li>
						<li className="header_top_social_item">
							<a href="https://www.instagram.com/vitalii.radaiev/" className="header_top_social_link"><span className="icon-instagram"></span></a>
						</li>
						<li className="header_top_social_item">
							<a href="https://m.vk.com/vitalii.radaiev" className="header_top_social_link"><span className="icon-vk"></span></a>
						</li>
					</ul>

					<div className="header_top_phone">
						<span className="icon-mobile1"></span>+380 63-22-903-22
					</div>
				</div>

				<div className="header_content">
					<div className="header_content_wrapper">
						<div className="header_content_photo">
							<img src={require("../../assets/img/header/me.jpeg").default} alt="me photo"/>
						</div>
						<div className="header_content_title">
							<h1>Вёрстка сайтов любой сложности</h1>
						</div>
						<div className="header_content_subtitle">
							<p>Адаптивная вёрстка сайтов с учетом SEO оптимизации кода, стандартов W3C и кроссбраузерность.</p>
						</div>

						<div className="btn" onClick={props.handleShow}>
							<a href="#">Напишите мне</a>
						</div>
					</div>
				</div>
			</div>
			<div className="header_content_arrow">
				<a href="#"><span className="icon-arrow-down2"></span></a>
			</div>
		</header>
	);
}

export default Header;