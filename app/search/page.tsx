'use client'
import Banner from "../components/Banner";
import CarDetails from "../components/CarDetails";
import Estimate from "../components/Estimate";
import Foot from "../components/Foot";
import LoadMore from "../components/LoadMore";
import { useSearchParams } from 'next/navigation'
import React, { useState, useEffect } from 'react';

const url_prod = "https://api.helloai.ink/";
const url_dev = "http://localhost:8080/";

  export default function Home() {
    const searchParams = useSearchParams()
    const make = searchParams.get('make') || 'Audi';
    const model = searchParams.get('model') || 'A5';

    const [carData, setCarData] = useState(null);

    useEffect(() => {
      const fetchCarData = async () => {
        try {
          const response = await fetch(url_dev + `car?maker=${make}&model=${model}&year=2016`);
          if (!response.ok) {
            throw new Error('Failed to fetch car data');
          }
          const data = await response.json();
          console.log("fetch used car sales data sucessfully");
          setCarData(data);
        } catch (error) {
          console.error('Error fetching car data:', error);
          setCarData(null);
        }
      };

      fetchCarData();
    }, []);


    return (
      <div>
        <Banner make={make} mode={model} />
        <CarDetails carData={carData} />
        <LoadMore />
        <Estimate />
        <Foot />
      </div>
    );
  }
