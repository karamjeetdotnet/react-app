import React, {Component} from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';

export default class MasterApp extends Component{
    constructor(props) {
        super(props);
        this.onClickDeleteOptions = this.onClickDeleteOptions.bind(this);
        this.onClickRandomOption = this.onClickRandomOption.bind(this);
        this.onClickAddOption = this.onClickAddOption.bind(this);
        this.onClickDeleteOption = this.onClickDeleteOption.bind(this);
        this.state = {
            title: 'Dreamzalive',
            description: 'Let your dreams fly',
            options: ['one', 'two', 'three']
        };
    }
    onClickDeleteOptions() {
        this.setState(() => ({options: []}))
    }
    onClickDeleteOption(opt) {
        this.setState((prevState)=> ({ options: prevState.options.filter((option) => option !== opt) }));
    }
    onClickRandomOption() {
        const rand = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[rand]);
    }
    onClickAddOption(option) {
        if(!option) {
            return "Please specify valid option";
        }
        else if(this.state.options.indexOf(option) > -1) {
            return "Option already exists";
        }
        
        this.setState((prevState) => ({ 
            options: prevState.options.concat(option)
        }));
    }
    render() {
        return (
            <div>
                <Header title = {this.state.title} description = {this.state.description}/>
                <Action onClickRandomOption = {this.onClickRandomOption} hasOptions = {this.state.options.length > 0} />
                <Options 
                    onClickDeleteOptions={this.onClickDeleteOptions} 
                    list={this.state.options} 
                    hasOptions = {this.state.options.length > 0}
                    onClickDeleteOption = {this.onClickDeleteOption}
                    />
                <AddOption onClickAddOption = {this.onClickAddOption}/>
            </div>
        );
    }    
}