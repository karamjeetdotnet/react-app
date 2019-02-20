import React from 'react';

const Header = (props) => {
    return (
        <div className='header'>
            <div className='container'>
                <h1 className='header__title'>{props.title}</h1>
                <h5 className='header__subtitle'>{props.description}</h5>
            </div>
        </div>
    );
}

export default Header;