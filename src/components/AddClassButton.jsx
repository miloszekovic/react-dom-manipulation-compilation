import React, { Component } from 'react'

export default class AddActiveClassButton extends Component {

    constructor( props ) {
        super( props );

        this.state = {
            state: false
        };

        this.addActiveClass = this.addActiveClass.bind(this)
    }

    addActiveClass = () => {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    }

    render() {
        return (
            <section>
                <button onClick={ this.addActiveClass } className={this.state.active ? 'neka-klasa': null} >Add Active class</button>
            </section>
        )
    }
}