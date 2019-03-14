import React, { Component } from 'react'
import Modal from 'react-awesome-modal'

class ModalExample2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }
 
    openModal() {
        this.setState({
            visible : true
        });
    }
 
    closeModal() {
        this.setState({
            visible : false
        });
    }
 
    render() {
        return (
            <section>
                <button onClick={() => this.openModal()}>Open modal 2</button>
                <Modal visible={this.state.visible} width="300" height="300" effect="fadeInLeft" onClickAway={() => this.closeModal()}>
                    <div className="modal-ui">
                        <button onClick={() => this.closeModal()}>Close</button>
                    </div>
                </Modal>
            </section>
        );
    }
  
  }
  
  export default ModalExample2