import React, {Component} from 'react';
export default class AddOption extends Component{
    state = {
        error: undefined
    };
    onClickAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.onClickAddOption(option);
        this.setState(() => ({error}));
        if(!error) { e.target.elements.option.value = ""; }
    }
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.onClickAddOption}>
                    <input name="option" className="add-option__input"></input>
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }    
}