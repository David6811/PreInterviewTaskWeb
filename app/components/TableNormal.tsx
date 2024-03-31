import './TableNormal.css';
import { CarData } from '../types/interfaces';
import { formatSaleDateDate } from '../action/UsedCarSalesUtil';
import React from 'react';

interface TableNormalProps {
    carData: CarData[] | null; // Pass carData as prop
}

export default function TableNormal({ carData }: TableNormalProps) {

    return (
        <div className="flex justify-center items-center h-full">
            <table>
                <thead>
                    <tr>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th style={{ width: '225px' }}>Description</th>
                        <th>Odometer</th>
                        <th>Vehicle condition</th>
                        <th>Sale location</th>
                        <th>Sale category</th>
                        <th>Salvage Vehicle</th>
                        <th>Sale date</th>
                        <th></th>
                        <th>Sale price</th>
                    </tr>
                </thead>
                <tbody>
                    {carData && carData.map((car: CarData, index: number) => (
                        <tr key={index}>
                            <td>{car.make}</td>
                            <td>{car.model}</td>
                            <td>{car.year}</td>
                            <td>{car.description}</td>
                            <td>{car.odometer}</td>
                            <td>{car.vehiclecondition}</td>
                            <td>{car.salelocation}</td>
                            <td>{car.salecategory}</td>
                            <td>{car.salvagevehicle}</td>
                            <td>{formatSaleDateDate(car.saledate)}</td>
                            <td><a className='underline cursor-pointer'>More</a></td>
                            <td><button className="subscribeButton">Subscribe to reveal price</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
