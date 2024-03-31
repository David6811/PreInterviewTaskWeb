import { CarData } from '../types/interfaces';
import { formatSaleDateDate } from '../action/UsedCarSalesUtil';

interface TableListProps {
    carData: CarData[] | null; // Pass carData as prop
}

export default function TableList({ carData }: TableListProps) {
    return (
        <div className="h-full mx-auto px-8">
            {carData && carData.map((car: CarData, index: number) => (
                <div key={index}>
                    <div>
                        <strong> <span>{car.make}</span> <span>{car.model}</span> <span>{car.year}</span></strong>
                    </div>
                    <div>
                        {car.description}
                    </div>

                    <div className="mt-1 border-b border-gray-800">
                        <div className="flex items-center mt-1 mr-5">
                            <div className="mr-1">
                                <div className="h-1 w-1 rounded-full bg-black"></div>
                            </div>
                            <div>{car.odometer}</div>
                        </div>
                        <div className="flex items-center mt-1 mr-5">
                            <div className="mr-1">
                                <div className="h-1 w-1 rounded-full bg-black"></div>
                            </div>
                            <div>{car.vehiclecondition}</div>
                        </div>

                        <div className="flex items-center mt-1 mr-5">
                            <div className="mr-1">
                                <div className="h-1 w-1 rounded-full bg-black"></div>
                            </div>
                            <div>{car.salelocation}</div>
                        </div>

                        <div className="flex items-center mt-1 mr-5">
                            <div className="mr-1">
                                <div className="h-1 w-1 rounded-full bg-black"></div>
                            </div>
                            <div>{car.salecategory}</div>
                        </div>

                        <div className="flex items-center mt-1 mr-5">
                            <div className="mr-1">
                                <div className="h-1 w-1 rounded-full bg-black"></div>
                            </div>
                            <div>{car.salvagevehicle}</div>
                        </div>

                        <div className="flex items-center mt-1 mr-5">
                            <div className="mr-1">
                                <div className="h-1 w-1 rounded-full bg-black"></div>
                            </div>
                            <div>{formatSaleDateDate(car.saledate)}</div>
                        </div>

                        <div className="flex items-center mt-1 mr-5">
                            <div className="mr-1">
                                <div className="h-1 w-1 rounded-full bg-black"></div>
                            </div>
                            <div> <a>More</a></div>
                        </div>

                        <div className="flex items-center justify-center mb-5">
                            <button className="subscribeButton">Subscribe to reveal price</button>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
}
