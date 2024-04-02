'use client'
import './CarFilter.css';
import CarSelector from './CarSelector';
import SortButton from './SortButton';
import React, { useState, useRef, ChangeEvent, useEffect } from 'react';
import AbarthFilters from './service/AbarthFilters.json';
import AlfaRomeoFilters from './service/AlfaRomeoFilters.json';
import AudiFilters from './service/AudiFilters.json';
import AustinFilters from './service/AustinFilters.json';
import BentleyFilters from './service/BentleyFilters.json';
import { formatAge, FactorsProps, CarData, getDefaultMake, getDefaultModel, setDefaultModel } from '../types/interfaces';

export default function CarFilter({
    setMake,
    setModel,
    setYear,
    setOdometer,
    setVehicleCondition,
    setStates,
    setCustomDate,
    setSaleCategory,
    setBadges,
    setBodyType,
    setBodyTypeConfig,
    setFuelType,
    setTransmission,
    setEngine,
    setCylinders,
    setDivision,
    setDrive,
    setSeat,
    setDoors,
    setDescription,
    setSort,
    setAsc,
    carData,
    setApply,
    setVisibleCount }: FactorsProps) {

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        setDescription(event.target.value);
    };
    const Makes = [
        {
            id: 0,
            name: 'Make',
        },
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

    const [inputValue, setInputValue] = useState('');

    const [showMoreFilters, setShowMoreFilters] = useState(false); // State to track whether to show more filters
    const [triggerDefault, setTriggerDefault] = useState(0); // State to track whether to show more filters
    const [recordCount, setRecordCount] = useState<number>(0);
    const [averageKM, setAverageKM] = useState<string>("0");
    const [averageAge, setAverageAge] = useState<string>("0");

    const ascButtonRef = useRef<HTMLButtonElement>(null);
    const descButtonRef = useRef<HTMLButtonElement>(null);

    const handleAscClick = () => {
        setAsc('ASC');
        if (ascButtonRef.current) {
            ascButtonRef.current.style.backgroundColor = '#aaa';
        }
        if (descButtonRef.current) {
            descButtonRef.current.style.backgroundColor = 'transparent';
        }
    };

    const handleDescClick = () => {
        setAsc('DESC');
        if (descButtonRef.current) {
            descButtonRef.current.style.backgroundColor = '#aaa';
        }
        if (ascButtonRef.current) {
            ascButtonRef.current.style.backgroundColor = 'transparent';
        }
    };

    const handleClearClick = () => {
        setMake({ id: 0, name: "Make" });
        setModel({ id: 0, name: "Family" });
        setDescription("");
        setInputValue("");
        setRecordCount(0);
        setAverageAge("0");
        setAverageKM("0");
        setApply(Math.random);
        setTriggerDefault(Math.random);

        setYear({ "id": 0, "name": '' });
        setOdometer({ "id": 0, "name": '' });
        setVehicleCondition({ "id": 0, "name": '' });
        setStates({ "id": 0, "name": '' });
        setCustomDate({ "id": 0, "name": '' });
        setSaleCategory({ "id": 0, "name": '' });
        setBadges({ "id": 0, "name": '' });
        setBodyType({ "id": 0, "name": '' });
        setBodyTypeConfig({ "id": 0, "name": '' });
        setFuelType({ "id": 0, "name": '' });
        setTransmission({ "id": 0, "name": '' });
        setEngine({ "id": 0, "name": '' });
        setCylinders({ "id": 0, "name": '' });
        setDivision({ "id": 0, "name": '' });
        setDrive({ "id": 0, "name": '' });
        setSeat({ "id": 0, "name": '' });
        setDoors({ "id": 0, "name": '' });
        setSort({ "id": 0, "name": 'Sort by Sale Date' });
        setAsc('DESC');
    };

    const handleApplyClick = () => {
        setVisibleCount(3);
        setApply(Math.random);
    };

    useEffect(() => {
        if (Array.isArray(carData)) {
            for (const car of carData) {
                const carDataLength = carData.length;
                setRecordCount(carDataLength);

                const totalOdometer = carData.reduce((accumulator, currentCar) => accumulator + currentCar.odometer, 0);
                const averageOdometer = totalOdometer / carDataLength;
                const formattedAverageOdometer = (Math.round(averageOdometer)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
                setAverageKM(formattedAverageOdometer);

                const currentYear = new Date().getFullYear();
                const totalAgeByYear = carData.reduce((accumulator, currentCar) => {
                    const age = currentYear - currentCar.year;
                    return accumulator + age;
                }, 0);
                const averageAgeByYear = totalAgeByYear / carDataLength;
                setAverageAge(formatAge(averageAgeByYear));

            }
        } else {
            //console.error("No Record");
        }
    }, [carData]);


    //Load the filters by defaultmake
    const [filters, setFilters] = useState<any>(AudiFilters);
    useEffect(() => {
        const defaultMake = getDefaultMake()?.toLowerCase();
        if (defaultMake === "abarth") {
            setFilters(AbarthFilters);
        } else if (defaultMake === "alfaromeo") {
            setFilters(AlfaRomeoFilters);
        } else if (defaultMake === "audi") {
            setFilters(AudiFilters);
        } else if (defaultMake === "austin") {
            setFilters(AustinFilters);
        } else if (defaultMake === "bentley") {
            setFilters(BentleyFilters);
        }
    }, []);

    const [modelValue, setModelValue] = useState<string>("");

    return (
        <div>
            <div className='carFilterContainer mt-5' style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                <div className='carInnerContainner'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1 mt-3">
                        <div className="flex justify-center">
                            <CarSelector jsonData={Makes} defaultWidth={0} setSelected={setMake} triggerDefault={triggerDefault} defaultValue={getDefaultMake()} setFilters={setFilters} modelValue={modelValue} setModelValue={setModelValue} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={filters.Family} defaultWidth={0} setSelected={setModel} triggerDefault={triggerDefault} defaultValue={getDefaultModel()} setFilters={setFilters} modelValue={modelValue} setModelValue={setModelValue} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={filters.Year} defaultWidth={0} setSelected={setYear} triggerDefault={triggerDefault} defaultValue="" setFilters={setFilters} modelValue={modelValue} setModelValue={setModelValue} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={filters.Odometer} defaultWidth={0} setSelected={setOdometer} triggerDefault={triggerDefault} defaultValue="" setFilters={setFilters} modelValue={modelValue} setModelValue={setModelValue} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={filters.AllCarConditions} defaultWidth={0} setSelected={setVehicleCondition} triggerDefault={triggerDefault} defaultValue="" setFilters={setFilters} modelValue={modelValue} setModelValue={setModelValue} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={filters.States} defaultWidth={0} setSelected={setStates} triggerDefault={triggerDefault} defaultValue="" setFilters={setFilters} modelValue={modelValue} setModelValue={setModelValue} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={filters.CustomDate} defaultWidth={0} setSelected={setCustomDate} triggerDefault={triggerDefault} defaultValue="" setFilters={setFilters} modelValue={modelValue} setModelValue={setModelValue} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={filters.SaleCategory} defaultWidth={0} setSelected={setSaleCategory} triggerDefault={triggerDefault} defaultValue="" setFilters={setFilters} modelValue={modelValue} setModelValue={setModelValue} />
                        </div>
                    </div>
                </div>

                <div id="moreFilter" className={`moreCarInnerContainner ${showMoreFilters ? '' : 'hidden'}`}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1">
                        <div className="flex justify-center">
                            <CarSelector jsonData={filters.Badges} defaultWidth={0} setSelected={setBadges} triggerDefault={triggerDefault} defaultValue="" setFilters={setFilters} modelValue={modelValue} setModelValue={setModelValue} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={filters.BodyType} defaultWidth={0} setSelected={setBodyType} triggerDefault={triggerDefault} defaultValue="" setFilters={setFilters} modelValue={modelValue} setModelValue={setModelValue} />
                        </div>

                        <div className="flex justify-center">
                            <CarSelector jsonData={filters.BodyTypeConfig} defaultWidth={0} setSelected={setBodyTypeConfig} triggerDefault={triggerDefault} defaultValue="" setFilters={setFilters} modelValue={modelValue} setModelValue={setModelValue} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={filters.FuelType} defaultWidth={0} setSelected={setFuelType} triggerDefault={triggerDefault} defaultValue="" setFilters={setFilters} modelValue={modelValue} setModelValue={setModelValue} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={filters.Transmission} defaultWidth={0} setSelected={setTransmission} triggerDefault={triggerDefault} defaultValue="" setFilters={setFilters} modelValue={modelValue} setModelValue={setModelValue} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={filters.Engine} defaultWidth={0} setSelected={setEngine} triggerDefault={triggerDefault} defaultValue="" setFilters={setFilters} modelValue={modelValue} setModelValue={setModelValue} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={filters.Cylinders} defaultWidth={0} setSelected={setCylinders} triggerDefault={triggerDefault} defaultValue="" setFilters={setFilters} modelValue={modelValue} setModelValue={setModelValue} />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector jsonData={filters.Division} defaultWidth={0} setSelected={setDivision} triggerDefault={triggerDefault} defaultValue="" setFilters={setFilters} modelValue={modelValue} setModelValue={setModelValue} />
                        </div>

                        <div className="flex justify-center">
                            <CarSelector jsonData={filters.Drive} defaultWidth={0} setSelected={setDrive} triggerDefault={triggerDefault} defaultValue="" setFilters={setFilters} modelValue={modelValue} setModelValue={setModelValue} />
                        </div>
                        <div className="flex justify-center gap-2">
                            <CarSelector jsonData={filters.Seat} defaultWidth={108} setSelected={setSeat} triggerDefault={triggerDefault} defaultValue="" setFilters={setFilters} modelValue={modelValue} setModelValue={setModelValue} />
                            <CarSelector jsonData={filters.Doors} defaultWidth={108} setSelected={setDoors} triggerDefault={triggerDefault} defaultValue="" setFilters={setFilters} modelValue={modelValue} setModelValue={setModelValue} />
                        </div>

                        <div className="">
                            <input className="flex  descriptionInput descriptionInput560" value={inputValue}  onChange={handleInputChange} placeholder="e.g. Metallic Paint, Power front seats, ..." />
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
                            <button className='applyButton' onClick={() => handleApplyClick()}>Apply</button>
                            <button className='clearButton' onClick={() => handleClearClick()}>Clear</button>
                        </div>
                    </div>
                </div>
            </div>

            <div >
                <div className='mt-10 mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 filterStatistics'>
                    <div className='mt-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 '>
                        <div className='whitespace-nowrap'>Records: <strong>{recordCount}</strong></div>
                        <div className='whitespace-nowrap'>Average KM:  <strong>{averageKM}</strong></div>
                        <div className='whitespace-nowrap'>Average age: <strong>{averageAge}</strong> </div>
                    </div>

                    <div className='flex justify-center sm:justify-end'>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <SortButton setSelected={setSort} />
                        </div>
                        <div className="flex items-center flex-shrink-0">
                            <button className="ascButton" onClick={handleAscClick} ref={ascButtonRef}>ASC</button>
                            <button className="descButton" onClick={handleDescClick} ref={descButtonRef}>DESC</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
