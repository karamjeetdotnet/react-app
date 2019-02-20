import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                <button
                    className="button button-link"
                    disabled={!props.hasOptions}
                    onClick={props.onClickDeleteOptions}
                >Remove All</button>
            </div>
            {props.list.length === 0 && <p className="widget__message">Please add an option</p>}
            {props.list.map((option, i) => <Option key={i}
                text={option}
                srno = {i + 1}
                onClickDeleteOption={props.onClickDeleteOption} />)}
        </div>
    );
}

export default Options;