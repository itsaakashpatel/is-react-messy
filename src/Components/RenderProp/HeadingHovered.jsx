import React, { Component } from 'react'

export default class HeadingHovered extends Component {
    
    render() {
        return (
            <div className="heading-render-prop">
                <h2 onMouseMove={this.props.incrementCount}> Heading hovered {this.props.count} times.</h2>
            </div>
        )
    }
}
