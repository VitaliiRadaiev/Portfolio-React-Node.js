import React from 'react';
import './Works.scss';

const Works = () => {
	return (
		<div className="works">
			<div className="container">
				<div className="title">
					<h2>Последние работы</h2>
				</div>
				
				<div className="works_cards">
					<div className="works_cards_item">
						<div className="works_cards_item_preview">
							<a href="https://vitaliiradaiev.github.io/LandingShapeUp/" target="_blank"><img src={require("../../assets/img/works/ScreenShapeUp.jpg").default} alt="preview"/></a>
						</div>
						<div className="works_cards_item_title">
							<a href="https://vitaliiradaiev.github.io/LandingShapeUp/" target="_blank">Адаптивная вёрстка LandingPage</a>
						</div>
					</div>
					<div className="works_cards_item">
						<div className="works_cards_item_preview">
							<a href="https://pizzakamenka.firebaseapp.com/" target="_blank"><img src={require("../../assets/img/works/pizza.jpg").default} alt="preview"/></a>
						</div>
						<div className="works_cards_item_title">
							<a href="https://pizzakamenka.firebaseapp.com/" target="_blank">Адаптивная вёрстка, страница заказов</a>
						</div>
					</div>
					<div className="works_cards_item">
						<div className="works_cards_item_preview">
							<a href="https://vitaliiradaiev.github.io/LandingSurf/" target="_blank"><img src={require("../../assets/img/works/surf.jpg").default} alt="preview"/></a>
						</div>
						<div className="works_cards_item_title">
							<a href="https://vitaliiradaiev.github.io/LandingSurf/" target="_blank">Адаптивная вёрстка и анимация LandingPage</a>
						</div>
					</div>
					<div className="works_cards_item">
						<div className="works_cards_item_preview">
							<a href="https://vitaliiradaiev.github.io/LandingFork/" target="_blank"><img src={require("../../assets/img/works/fork.jpg").default} alt="preview"/></a>
						</div>
						<div className="works_cards_item_title">
							<a href="https://vitaliiradaiev.github.io/LandingFork/" target="_blank">Адаптивная вёрстка LandingPage</a>
						</div>
					</div>
					<div className="works_cards_item">
						<div className="works_cards_item_preview">
							<a href="https://vitaliiradaiev.github.io/LandingFrilancer/" target="_blank"><img src={require("../../assets/img/works/frilancer.jpg").default} alt="preview"/></a>
						</div>
						<div className="works_cards_item_title">
							<a href="https://vitaliiradaiev.github.io/LandingFrilancer/" target="_blank">Адаптивная вёрстка и анимация LandingPage</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Works;