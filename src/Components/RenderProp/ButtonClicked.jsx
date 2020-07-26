import React, { Component } from "react";

export default class ButtonClicked extends Component {
    render() {
        return (
        <div className="button-render-prop">
            <button onClick={this.props.incrementCount}>Click me! </button>
            <p>Button clicked {this.props.count} times.</p>
        </div>
        );
    }
}
