import React, { Component } from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class MasterApp extends Component {
    state = {
        title: 'Dreamzalive',
        description: 'Let your dreams fly',
        isOpen: false,
        optionText: '',
        options: ['one', 'two', 'three']
    };
    onClickDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }
    onClickDeleteOption = (opt) => {
        this.setState((prevState) => ({ options: prevState.options.filter((option) => option !== opt) }));
    }
    onClickRandomOption = () => {
        const rand = Math.floor(Math.random() * this.state.options.length);
        this.setState(() => ({ optionText: this.state.options[rand], isOpen: true }));
    }
    onClickAddOption = (option) => {
        if (!option) {
            return "Please specify valid option";
        }
        else if (this.state.options.indexOf(option) > -1) {
            return "Option already exists";
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    }
    onClickRandomOptionClose = (e) => {
        e.preventDefault();
        this.setState(() => ({ optionText: '' }));
    }
    render() {
        return (
            <div>
                <Header title={this.state.title} description={this.state.description} />
                <div className="container">
                    <Action onClickRandomOption={this.onClickRandomOption} hasOptions={this.state.options.length > 0} />
                    <div className="widget">
                        <Options
                            onClickDeleteOptions={this.onClickDeleteOptions}
                            list={this.state.options}
                            hasOptions={this.state.options.length > 0}
                            onClickDeleteOption={this.onClickDeleteOption}
                        />
                        <AddOption onClickAddOption={this.onClickAddOption} />
                    </div>
                    <OptionModal title='Random Option'
                     selectedOption={this.state.optionText}
                     onRequestClose={this.onClickRandomOptionClose}>
                    </OptionModal>
                </div>
            </div>
        );
    }
}