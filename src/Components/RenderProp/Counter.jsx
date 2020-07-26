import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
          count: 0,
        };
    }

    incrementCount = () => {
        this.setState(state => ({ count : state.count + 1}))
    }

    render() {
        return (
            <div>
               {this.props.render(this.state.count, this.incrementCount)} 
            </div>
        )
    }
}
