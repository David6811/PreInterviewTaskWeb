'use client'
import Banner from "../components/Banner";
import CarDetails from "../components/CarDetails";
import Estimate from "../components/Estimate";
import Foot from "../components/Foot";
import LoadMore from "../components/LoadMore";
import { useSearchParams } from 'next/navigation'
import React, { useState, useEffect } from 'react';
import { setDefaultMake, setDefaultModel } from '../types/interfaces';
import { useFactorsState } from '../components/UseFactorsState';
import Head from 'next/head';

const url_prod = "https://api.helloai.ink/";
const url_dev = "http://localhost:8080/";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const searchParams = useSearchParams()

  setDefaultMake(searchParams.get('make') || 'Audi');
  setDefaultModel(searchParams.get('model') || 'A5');

  const [visibleCount, setVisibleCount] = useState(3);

  // 在 LoadMore 组件点击时，增加显示数据的数量
  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 3); // 每次增加3个
  };


  const [make, setMake] = useFactorsState({ "id": 0, "name": searchParams.get('make') || 'Audi' });
  const [model, setModel] = useFactorsState({ "id": 0, "name": searchParams.get('model') || 'A5' });
  const [year, setYear] = useFactorsState({ "id": 0, "name": '' });
  const [odometer, setOdometer] = useFactorsState({ "id": 0, "name": '' });
  const [vehicleCondition, setVehicleCondition] = useFactorsState({ "id": 0, "name": '' });
  const [states, setStates] = useFactorsState({ "id": 0, "name": '' });
  const [customDate, setCustomDate] = useFactorsState({ "id": 0, "name": '' });
  const [saleCategory, setSaleCategory] = useFactorsState({ "id": 0, "name": '' });
  const [badges, setBadges] = useFactorsState({ "id": 0, "name": '' });
  const [bodyType, setBodyType] = useFactorsState({ "id": 0, "name": '' });
  const [bodyTypeConfig, setBodyTypeConfig] = useFactorsState({ "id": 0, "name": '' });
  const [fuelType, setFuelType] = useFactorsState({ "id": 0, "name": '' });
  const [transmission, setTransmission] = useFactorsState({ "id": 0, "name": '' });
  const [engine, setEngine] = useFactorsState({ "id": 0, "name": '' });
  const [cylinders, setCylinders] = useFactorsState({ "id": 0, "name": '' });
  const [division, setDivision] = useFactorsState({ "id": 0, "name": '' });
  const [drive, setDrive] = useFactorsState({ "id": 0, "name": '' });
  const [seat, setSeat] = useFactorsState({ "id": 0, "name": '' });
  const [doors, setDoors] = useFactorsState({ "id": 0, "name": '' });
  const [description, setDescription] = useState('');
  const [sort, setSort] = useFactorsState({ "id": 0, "name": 'Sort by Sale Date' });
  const [asc, setAsc] = useState('DESC');

  const [carData, setCarData] = useState([]); // 将初始状态值设为空数组
  const [apply, setApply] = useState(0);

  useEffect(() => {
    document.title = `${make.name || 'Audi'} ${model.name || 'A5'} | How Much They Sold For in Australia`;
  }, [make, model]);


  useEffect(() => {
    setIsVisible(false);
    const fetchCarData = async () => {
      try {
        const params = {
          maker: make.name,
          model: model.name,
          year: year.name,
          odometer: odometer.name,
          vehicleCondition: vehicleCondition.name,
          states: states.name,
          customDate: customDate.name,
          saleCategory: saleCategory.name,
          badges: badges.name,
          bodyType: bodyType.name,
          bodyTypeConfig: bodyTypeConfig.name,
          fuelType: fuelType.name,
          transmission: transmission.name,
          engine: engine.name,
          cylinders: cylinders.name,
          division: division.name,
          drive: drive.name,
          seat: seat.name,
          doors: doors.name,
          description: description,
          sort: sort.name,
          asc: asc
        } as { [key: string]: string };
        const queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
        const response = await fetch(url_prod + `car?${queryString}`);
        if (!response.ok) {
          throw new Error('Failed to fetch car data');
        }
        const data = await response.json();
        setCarData(data.data);
        if (data.data.length >= 3) setIsVisible(true);
      } catch (error) {
        console.error('Error fetching car data:', error);
        setCarData([]);
      }
    };

    fetchCarData();
  }, [apply]);


  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
      </Head>
      <Banner
        setMake={setMake}
        setModel={setModel}
        setYear={setYear}
        setOdometer={setOdometer}
        setVehicleCondition={setVehicleCondition}
        setStates={setStates}
        setCustomDate={setCustomDate}
        setSaleCategory={setSaleCategory}
        setBadges={setBadges}
        setBodyType={setBodyType}
        setBodyTypeConfig={setBodyTypeConfig}
        setFuelType={setFuelType}
        setTransmission={setTransmission}
        setEngine={setEngine}
        setCylinders={setCylinders}
        setDivision={setDivision}
        setDrive={setDrive}
        setSeat={setSeat}
        setDoors={setDoors}
        setDescription={setDescription}
        setSort={setSort}
        setAsc={setAsc}
        carData={carData}
        setApply={setApply}
        setVisibleCount = {setVisibleCount}
      />
      <CarDetails carData={carData?.slice(0, visibleCount)} /> 

      {isVisible && <LoadMore onLoadMore={handleLoadMore}/>}
      <Estimate />
      <Foot />
    </div>
  );
}
