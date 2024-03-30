'use client'
import './CarFilter.css'; // Import the CSS file
import CarSelector from './CarSelector';
import SortButton from './SortButton';
import React, { useState } from 'react';


export default function CarFilter() {
    const data = [
        {
            id: 1,
            name: 'Audi',
        },
        {
            id: 2,
            name: 'Arlene Mccoy',
        },
        {
            id: 3,
            name: 'Devon Webb',
        },
        {
            id: 4,
            name: 'Tom Cook',
        },
        {
            id: 5,
            name: 'Tanya Fox',
        },
    ]

    const [showMoreFilters, setShowMoreFilters] = useState(false); // State to track whether to show more filters


    return (
        <div>
            <div className='carFilterContainer mt-5'>
                <div className='carInnerContainner'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1">
                        <div className="flex justify-center">
                            <CarSelector jsonData={data} defaultWidth={0} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={data} defaultWidth={0} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={data} defaultWidth={0} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={data} defaultWidth={0} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={data} defaultWidth={0} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={data} defaultWidth={0} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={data} defaultWidth={0} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={data} defaultWidth={0} />
                        </div>
                    </div>
                </div>

                <div id="moreFilter"  className={`moreCarInnerContainner ${showMoreFilters ? '' : 'hidden'}`}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1">
                        <div className="flex justify-center">
                            <CarSelector jsonData={data} defaultWidth={0} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={data} defaultWidth={0} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={data} defaultWidth={0} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={data} defaultWidth={0} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={data} defaultWidth={0} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={data} defaultWidth={0} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={data} defaultWidth={0} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={data} defaultWidth={0} />
                        </div>

                        <div className="flex justify-center">
                            <CarSelector jsonData={data} defaultWidth={0} />
                        </div>
                        <div className="flex justify-center gap-5">
                            <CarSelector jsonData={data} defaultWidth={108} />
                            <CarSelector jsonData={data} defaultWidth={108} />
                        </div>

                        <div className="ml-2">
                            <input className="descriptionInput" style={{ width: 420 }} placeholder="e.g. Metallic Paint, Power front seats, Power Sunrroof, ..." />
                        </div>

                    </div>
                </div>

                <div className='carControllerInnerContainner'>
                    <div className='grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-1 mt-3'>
                        <div className='mt-1'>
                            <a className='flex justify-center showMoreLink' onClick={() => setShowMoreFilters(!showMoreFilters)}>
                                {showMoreFilters ? 'Hide more filters' : 'Show more filters'}
                            </a>
                        </div>
                        <div></div>
                        <div></div>
                        <div className='flex justify-between items-center gap-3'>
                            <button className='applyButton'>Apply</button>
                            <button className='clearButton'>Clear</button>
                        </div>
                    </div>
                </div>

            </div>

            <div >
                <div className='mt-10 mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 filterStatistics'>
                    <div className='mt-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3'>
                        <div className='whitespace-nowrap'>Records: 125</div>
                        <div className='whitespace-nowrap'>Average KM: 94,107</div>
                        <div className='whitespace-nowrap'>Average age: 8yrs 10mos</div>
                    </div>

                    <div className='flex gap-5 justify-center sm:justify-end'>
                        {/* <button className="sortButton">Sort by Sold Date</button> */}
                        <SortButton />
                        <div className="flex items-center flex-shrink-0">
                            <button className="ascButton">ASC</button>
                            <button className="descButton">DESC</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
