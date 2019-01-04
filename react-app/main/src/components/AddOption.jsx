import React, {Component} from 'react';
export default class AddOption extends Component{
    constructor(props) {
        super(props);
        this.onClickAddOption = this.onClickAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    onClickAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.onClickAddOption(option);
        this.setState(() => ({error}));
    }
    render() {
        return (
            <div>
                {this.state.error && <div>{this.state.error}</div>}
                <form onSubmit={this.onClickAddOption}>
                    <input name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }    
}