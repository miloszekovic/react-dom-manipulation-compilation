import React, { Component } from 'react'

import ToggleContentBox from './ToggleContentBox'

class ToggleContent2 extends Component {

    constructor( props ) {
        super( props );

        this.state = { 
            show: false,
            state: false
        };

        this.toggleDiv = this.toggleDiv.bind(this)
    }

    toggleDiv = () => {
        const { show } = this.state
        this.setState( { show: !show } )

        const currentState = this.state.active;
        this.setState({ active: !currentState });
    }

    render() {
        return (
            <section>
                <button onClick={ this.toggleDiv } className={this.state.active ? 'neka-klasa': null} >Toggle Div 2</button>
                <br /><br />
                { this.state.show && <ToggleContentBox /> }
            </section>
        )
    }
}

export default ToggleContent2