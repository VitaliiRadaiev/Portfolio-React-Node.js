import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

const modalRoot = document.getElementById('modal');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }
  
  render() {
    return ReactDOM.createPortal(
    <div className="modal">
    {this.props.children}
    </div>	,
      this.el,
    );
  }
}

export default Modal;