import React, {Component} from 'react';

export default class ToggleApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
        this.toggleVisiblePanel = this.toggleVisiblePanel.bind(this);
    }
    toggleVisiblePanel() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        })
    }
    render() {
        return (
            <div>
            <h1>Visibility program</h1>
            <button onClick={this.toggleVisiblePanel}>{this.state.visible ? "Hide Details": "Show detials"}</button>
            {(
                this.state.visible && <div>I am here</div>
            )}
        </div>
        );
    }
}