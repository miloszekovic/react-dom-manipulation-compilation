import React, { Component } from 'react'

class ToggleContent extends Component {

    constructor( props ) {
        super( props );
        this.state = { show : false /* true */ };

        this.toggleDiv = this.toggleDiv.bind(this)
    }

    toggleDiv = () => {
        const { show } = this.state;
        this.setState( { show : !show } )
    }

    render() {
        return (
            <section>
                <button onClick={ this.toggleDiv }>Toggle Div</button>
                <br /><br />
                { this.state.show && <HidenBox /> }
            </section>
        )
    }
}

class HidenBox extends Component {
    render(){
        return(
            <div>This is a div</div>
        )
    }
}

export default ToggleContent