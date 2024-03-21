import React, { useState } from 'react';
import Button from '../Button/Button';

const Header = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div className='header'>
            <Button onClick={handleClick}>Counter {count}</Button>
        </div>
    );
};

export default Header;