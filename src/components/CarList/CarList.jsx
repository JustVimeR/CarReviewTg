import React from 'react';
import './CarList.scss';
import CarItem from "../CarItem/CarItem";
import CarImg from '../../../public/carimg.png';

const cars = [
    {id: '1', title: 'Honda', price: 5000, image: CarImg},
    {id: '2', title: 'Merin', price: 12000, image: CarImg},
    {id: '3', title: 'McLaren', price: 5000, image: CarImg},
    {id: '4', title: 'Jeep', price: 122, image: CarImg},
    {id: '5', title: 'Volkswagen', price: 5000, image: CarImg},
    {id: '6', title: 'Porshe', price: 600, image: CarImg},
    {id: '7', title: 'Lamborghini', price: 5500, image: CarImg},
    {id: '8', title: 'Toyota', price: 12000, image: CarImg},
]

const CarList = () => {

    return (
        <div className={'list'}>
            {cars.map(item => (
                <CarItem
                    key={item.id}
                    car={item} 
                    className={'item'}
                />
            ))}
        </div>
    );
};

export default CarList;