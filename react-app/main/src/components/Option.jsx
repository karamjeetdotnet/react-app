import React from 'react';

const Option = (props) => {
    return (
        <div className="option">
            <p className="option__text">{props.srno}. {props.text}</p>
            <button
                className="button button--link"
                onClick={(e) => {
                    props.onClickDeleteOption(props.text)
                }}>Remove</button>
        </div>
    );
};

export default Option;