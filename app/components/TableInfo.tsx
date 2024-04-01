import './TableInfo.css';
import { CarData } from '../types/interfaces';
import { formatSaleDateDate } from '../action/UsedCarSalesUtil';


interface TableInfoProps {
    carData: CarData[] | null; // Pass carData as prop
}

export default function TableInfo({ carData }: TableInfoProps) {
    return (
        <div className="h-full mx-auto px-5">
            {carData && carData.map((car: CarData, index: number) => (
                <div key={index} className='border-b border-gray-800 mt-3'>
                    <div className="flex justify-between items-center">
                        <div>
                            <div>
                                <strong><span>{car.make}</span> <span>{car.model}</span> <span>{car.year}</span></strong>
                            </div>
                            <div>
                                {car.description}
                            </div>
                        </div>

                        <div className="bottom">
                            <button className="subscribeButton">Subscribe to reveal price</button>
                        </div>
                    </div>

                    <div className='mb-3 mt-2'>
                        <div className="flex justify-left items-center">
                            <div className="flex items-center mr-5">
                                <div className="mr-1">
                                    <div className="h-1 w-1 rounded-full bg-black"></div>
                                </div>
                                <div>{car.odometer}</div>
                            </div>
                            <div className="flex items-center mr-5">
                                <div className="mr-1">
                                    <div className="h-1 w-1 rounded-full bg-black"></div>
                                </div>
                                <div>{car.vehiclecondition}</div>
                            </div>

                            <div className="flex items-center mr-5">
                                <div className="mr-1">
                                    <div className="h-1 w-1 rounded-full bg-black"></div>
                                </div>
                                <div>{car.salelocation}</div>
                            </div>

                            <div className="flex items-center mr-5">
                                <div className="mr-1">
                                    <div className="h-1 w-1 rounded-full bg-black"></div>
                                </div>
                                <div>{car.salecategory}</div>
                            </div>

                            <div className="flex items-center mr-5">
                                <div className="mr-1">
                                    <div className="h-1 w-1 rounded-full bg-black"></div>
                                </div>
                                <div>{car.salvagevehicle}</div>
                            </div>

                            <div className="flex items-center mr-5">
                                <div className="mr-1">
                                    <div className="h-1 w-1 rounded-full bg-black"></div>
                                </div>
                                <div>{formatSaleDateDate(car.saledate)}</div>
                            </div>

                            <div className="flex items-center mr-5">
                                <div className="mr-1">
                                    <div className="h-1 w-1 rounded-full bg-black"></div>
                                </div>
                                <div> <a>More</a></div>
                            </div>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
