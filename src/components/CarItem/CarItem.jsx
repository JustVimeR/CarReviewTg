import React, { useState } from 'react';
import Button from "../Button/Button";
import './CarItem.scss';

const CarItem = ({car, className}) => {

    const [count, setCount] = useState(0);

    const handleClickPlus = () => {
        setCount(count + 1);
    }

    const handleClickMinus = () => {
        setCount(count - 1);
    }

    return (
        <div className={'car ' + className}>
            <div className={'img'} img={car.image}  alt={car.id}/>
            <div className={'title'}>{car.title}</div>
            <div className={'price'}>
                <span>Price: <b>{car.price}</b></span>
            </div>
            <div  className={'btn-wrapper'}>
                <Button className={'plus-btn'} onClick={handleClickPlus}>
                +
                </Button>
                <div className={'counter'}>{count}</div>
                <Button className={'minus-btn'} onClick={handleClickMinus}>
                -
                </Button>
            </div>
        </div>
    );
};

export default CarItem;