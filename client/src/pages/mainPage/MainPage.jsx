import React from 'react';
import './MainPage.scss';
import Header from '../../components/Header/Header';
import AboutMe from '../../components/AboutMe/AboutMe';
import ExpertIn from '../../components/ExpertIn/ExpertIn';
import Works from '../../components/Works/Works';
import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal/Modal';
import Form from '../../components/Form/Form';
import Banner from '../../components/Banner/Banner'; 

class MainPage extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {showModal: false};
	  
	  this.handleShow = this.handleShow.bind(this);
	  this.handleHide = this.handleHide.bind(this);
	}

	handleShow(event) {
    event.preventDefault();
	  this.setState({showModal: true});
	}
	
	handleHide() {
	  this.setState({showModal: false});
	}

	render() {
		const modal = this.state.showModal ? (
		  <Modal>
		    <Form handleHide={this.handleHide} />
		  </Modal>
		) : null;

		return (
			<>
			{modal}
			<Header handleShow={this.handleShow}/>
      <Banner />
			<AboutMe />
			<ExpertIn />
			<Works />
			<Footer handleShow={this.handleShow}/>
			</>
		);
	}
}

export default MainPage;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false};
    
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleShow() {
    this.setState({showModal: true});
  }
  
  handleHide() {
    this.setState({showModal: false});
  }

  render() {
    // Show a Modal on click.
    // (In a real app, don't forget to use ARIA attributes
    // for accessibility!)
    const modal = this.state.showModal ? (
      <Modal>
        <div className="modal">
          <div>
            With a portal, we can render content into a different
            part of the DOM, as if it were any other React child.
          </div>
          This is being rendered inside the #modal-container div.
          <button onClick={this.handleHide}>Hide modal</button>
        </div>
      </Modal>
    ) : null;

    return (
      <div className="app">
        This div has overflow: hidden.
        <button onClick={this.handleShow}>Show modal</button>
        {modal}
      </div>
    );
  }
}