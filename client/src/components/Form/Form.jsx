import React, { useState } from 'react';
import './Form.scss';
import ErrorBox from '../ErrorBox/ErrorBox';
import Loader from '../Loader/Loader';

const Form = (props) => {
	const [form, setForm] = useState({name: '', email: '', message: ''});
	const [error, setError] = useState(null);
	const [loader, setLoader] = useState(false);

	const inputName = React.createRef();
	const inputEmail = React.createRef();
	const inputMessage = React.createRef();

	const useErrorBox = (text) => {
		setError(<ErrorBox><p>{text}</p></ErrorBox>);
		setTimeout(() => {
			setError(null);
		}, 2950)
	}

	const handleForm = (event) => {
		console.log(event.target.value);
		setForm({...form, [event.target.name]:event.target.value})
	}

	const sendMessage = async () => {
		if(form.name.trim().length === 0) {
			useErrorBox('Введите пожалуйста ваше Имя!');
			inputName.current.style.border = '1px solid red';
		} else if(form.email.trim().length === 0){
			useErrorBox('Введите пожалуйста ваш E-Mail!');
			inputEmail.current.style.border = '1px solid red';
		} else if(form.message.trim().length === 0) {
			useErrorBox('Вы ещё ничего не написали!');
			inputMessage.current.style.border = '1px solid red';
		} else if(!/^([a-zA-Z0-9_\.+-]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g.test(form.email.trim())) {
			useErrorBox('Некорректный E-Mail!');
			inputEmail.current.style.border = '1px solid red';
		} else {
			const headers = {
				"Content-Type": "application/json"
			}

			const body = {
				name: form.name.trim(),
				email:form.email.trim(),
				message: form.message.trim()
			}
			setLoader(true);
	        let response = await fetch('/api/send/email', {
	        	method: 'POST',
				headers: headers,
				body: JSON.stringify(body)
	        })
		 	setLoader(false);
	        let data = await response.json();
			useErrorBox(`${data.message}`)
	        console.log(data);
		}
	}

	return (
		<form className="form">
			{error}
			{loader && <Loader />}
			<div className="form_btn_close" onClick={props.handleHide}></div>
			<div className="form_name">
				<input
					ref={inputName} 
					className="form_item name" 
					type="text" name="name" 
					placeholder="Ваше Имя"
					onChange={handleForm}
					onFocus={() => {
						inputName.current.style.border = '1px solid #b7c0c9';
					}}
					/>				
			</div>
			<div className="form_email">
				<input 
					ref={inputEmail} 
					className="form_item email" 
					type="text" name="email" 
					placeholder="Ваше E-Mail"
					onChange={handleForm}
					onFocus={() => {
						inputEmail.current.style.border = '1px solid #b7c0c9';
					}}
					/>
			</div>
			<div className="form_message">
				<textarea 
					ref={inputMessage} 
					className="form_item message" 
					name="message" 
					placeholder="Сообщение"
					onChange={handleForm}
					onFocus={() => {
						inputMessage.current.style.border = '1px solid #b7c0c9';
					}}
					></textarea>
			</div>
			<div className="form_btn">
				<input 
					className="form-button" 
					type="button" 
					defaultValue="Отправить сообщение"
					onClick={sendMessage}
					/>			
			</div>
		</form>
	);
}

export default Form;