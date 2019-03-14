import React, { Component } from 'react'
import Modal from 'react-awesome-modal'

class ModalExample extends Component {

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
                <button onClick={() => this.openModal()}>Open modal</button>
                <Modal visible={this.state.visible} width="50%" height="60%" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                {/* ILI width="500" height="450" */}
                    <div className="modal-ui">
                        <h1>Title</h1>
                        <p>Some Contents</p>
                        <button onClick={() => this.closeModal()}>Close</button>
                    </div>
                </Modal>
            </section>
        );
    }
  
  }
  
  export default ModalExample