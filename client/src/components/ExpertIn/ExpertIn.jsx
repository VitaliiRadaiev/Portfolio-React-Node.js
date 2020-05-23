import React from 'react';
import './ExpertIn.scss';

const ExpertIn = () => {
	return (
		<div className="expertIn">
			<div className="container">
				<div className="title">
					<h2>Использую технологии</h2>
				</div>
				<div className="expertIn_cards">
					<div className="expertIn_cards_item">
						<div className="expertIn_cards_item_icon">
							<span className="icon-html5"></span>
						</div>
						<div className="expertIn_cards_item_title">
							<h3>HTML5</h3>
						</div>
						<div className="expertIn_cards_item_text">
							SEO оптимизированная вёрстка, которая влияет на выдачу сайта в Google, а также на корректный поиск по сайту.
						</div>
					</div>
					<div className="expertIn_cards_item">
						<div className="expertIn_cards_item_icon">
							<span className="icon-css31"></span>
						</div>
						<div className="expertIn_cards_item_title">
							<h3>CSS3</h3>
						</div>
						<div className="expertIn_cards_item_text">
							Великолепный внешний вид, сложные цветовые градиенты, адаптивность и анимация. Всё это будет работать во всех браузерах.
						</div>
					</div>
					<div className="expertIn_cards_item">
						<div className="expertIn_cards_item_icon">
							<span className="icon-javascript"></span>
						</div>
						<div className="expertIn_cards_item_title">
							<h3>Java Script</h3>
						</div>
						<div className="expertIn_cards_item_text">
							Использование чистого Java Script последних версий ES6, ES7, ES8 дают сайту большие возможности как визуально так и в обработке данных. 
						</div>
					</div>
					<div className="expertIn_cards_item">
						<div className="expertIn_cards_item_icon">
							<span className="icon-sass"></span>
						</div>
						<div className="expertIn_cards_item_title">
							<h3>SCSS/SASS</h3>
						</div>
						<div className="expertIn_cards_item_text">
							Перепроцессоры максимально упрощают работу с CSS3, что позволяет делать работу быстро и без ошибок.
						</div>
					</div>
					<div className="expertIn_cards_item">
						<div className="expertIn_cards_item_icon">
							<span className="icon-gulp"></span>
						</div>
						<div className="expertIn_cards_item_title">
							<h3>Gulp</h3>
						</div>
						<div className="expertIn_cards_item_text">
							Большой проект - это много файлов и различных библиотек. Знания Gulp позволяет легко с ними работаь, что ускоряет работу.
						</div>
					</div>
					<div className="expertIn_cards_item">
						<div className="expertIn_cards_item_icon">
							<span className="icon-webpack"></span>
						</div>
						<div className="expertIn_cards_item_title">
							<h3>Webpack</h3>
						</div>
						<div className="expertIn_cards_item_text">
							Есть проекты, где очень много Java Script файлов, и для комфортной и быстрой работы с такими проектами, знания WebPack просто необходимы.
						</div>
					</div>
					<div className="expertIn_cards_item">
						<div className="expertIn_cards_item_icon">
							<span className="icon-react"></span>
						</div>
						<div className="expertIn_cards_item_title">
							<h3>React</h3>
						</div>
						<div className="expertIn_cards_item_text">
							Библиотека React максимально облегчает работу в большой команде. Помогает писать структурированный и многократно переиспользуемый код.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ExpertIn;