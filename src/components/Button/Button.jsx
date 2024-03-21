import React from 'react';
import './Button.scss';

const Button = (props) => {
    return (
        <div>
            <button {...props} className={'button ' + props.className} />
        </div>
    );
};

export default Button;