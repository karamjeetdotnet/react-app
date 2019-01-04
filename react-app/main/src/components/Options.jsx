import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.onClickDeleteOptions}>Remove All</button>
            
            {props.list.map((option, i) => <Option key={i} 
            text={option} 
            onClickDeleteOption={props.onClickDeleteOption}/>)}
        </div>
    );    
}

export default Options;