import React from 'react';
import './AboutMe.scss';

const AboutMe = () => {
	return (
		<div className="aboutMe">
			<div className="container">
				<div className="title">
					<h2>Обо мне</h2>
				</div>
				<div className="aboutMe_text">
					<p>
						Меня зовут Виталий, мне 27 и я с Украины. Начал свой путь в веб-программировании с чистого интереса, хотел узнать - а как же оно всё работает? В итоге меня затянуло, веб-программирование - это дело, которое мне понастоящему нравится. Очень сильно ценю время, считаю, что это самый ценный ресурс каждого человека, поэтому ответственно отношусь к срокам сдачи проектов. 
					</p>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;