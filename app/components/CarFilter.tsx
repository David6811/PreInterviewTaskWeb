'use client'
import './CarFilter.css';
import CarSelector from './CarSelector';
import SortButton from './SortButton';
import React, { useState } from 'react';
import AbarthFilters from './service/AbarthFilters.json';
import AlfaRomeoFilters from './service/AlfaRomeoFilters.json';
import AudiFilters from './service/AudiFilters.json';
import AustinFilters from './service/AustinFilters.json';
import BentleyFilters from './service/BentleyFilters.json';


export default function CarFilter() {
    const Makes = [
        {
            id: 1,
            name: 'Abarth',
        },
        {
            id: 2,
            name: 'Alfa Romeo',
        },
        {
            id: 3,
            name: 'Audi',
        },
        {
            id: 4,
            name: 'Austin',
        },
        {
            id: 5,
            name: 'Bentley',
        },
    ]

    const [showMoreFilters, setShowMoreFilters] = useState(false); // State to track whether to show more filters

    const filters = AbarthFilters;
    return (
        <div>
            <div className='carFilterContainer mt-5' style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                <div className='carInnerContainner'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1 mt-3">
                        <div className="flex justify-center">
                            <CarSelector jsonData={Makes} defaultWidth={0} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={filters.Family} defaultWidth={0} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={Makes} defaultWidth={0} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={Makes} defaultWidth={0} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={filters.AllCarConditions} defaultWidth={0} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={filters.States} defaultWidth={0} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={filters.CustomDate} defaultWidth={0} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={filters.SaleCategory} defaultWidth={0} />
                        </div>
                    </div>
                </div>

                <div id="moreFilter" className={`moreCarInnerContainner ${showMoreFilters ? '' : 'hidden'}`}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1">
                        <div className="flex justify-center">
                            <CarSelector jsonData={filters.Badges} defaultWidth={0} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={filters.BodyType} defaultWidth={0} />
                        </div>

                        <div className="flex justify-center">
                            <CarSelector jsonData={filters.BodyTypeConfig} defaultWidth={0} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={filters.FuelType} defaultWidth={0} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={filters.Transmission} defaultWidth={0} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={filters.Engine} defaultWidth={0} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={filters.Cylinders} defaultWidth={0} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={filters.Division} defaultWidth={0} />
                        </div>

                        <div className="flex justify-center">
                            <CarSelector jsonData={filters.Drive} defaultWidth={0} />
                        </div>
                        <div className="flex justify-center gap-2">
                            <CarSelector jsonData={filters.Seat} defaultWidth={108} />
                            <CarSelector jsonData={filters.Doors} defaultWidth={108} />
                        </div>

                        <div className="ml-2">
                            <input className="descriptionInput" style={{ width: 420 }} placeholder="e.g. Metallic Paint, Power front seats, Power Sunrroof, ..." />
                        </div>

                    </div>
                </div>

                <div className='carControllerInnerContainner'>
                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 mt-3 mb-5'>
                        <div className='mt-1'>
                            <a className='flex justify-left showMoreLink showMore560' onClick={() => setShowMoreFilters(!showMoreFilters)}>
                                {showMoreFilters ? 'Hide more filters' : 'Show more filters'}
                            </a>
                        </div>
                        <div></div>
                        <div className='flex justify-between items-right gap-3 flex1'>
                            <button className='applyButton'>Apply</button>
                            <button className='clearButton'>Clear</button>
                        </div>
                    </div>
                </div>

            </div>

            <div >
                <div className='mt-10 mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 filterStatistics'>
                    <div className='mt-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 '>
                        <div className='whitespace-nowrap'>Records: <strong>125</strong></div>
                        <div className='whitespace-nowrap'>Average KM:  <strong>94,107</strong></div>
                        <div className='whitespace-nowrap'>Average age: <strong>8yrs 10mos</strong> </div>
                    </div>


                    <div className='flex justify-center sm:justify-end'>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <SortButton />
                        </div>
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
