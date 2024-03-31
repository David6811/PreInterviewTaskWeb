'use client'
import Banner from "../components/Banner";
import CarDetails from "../components/CarDetails";
import Estimate from "../components/Estimate";
import Foot from "../components/Foot";
import LoadMore from "../components/LoadMore";
import { useSearchParams } from 'next/navigation'


export default function Home() {
  const searchParams = useSearchParams()
 
  const make = searchParams.get('make') || 'Audi';
  const model = searchParams.get('model') || 'A5';

  return (
    
    <div>
      <Banner  make={make} mode={model} />
      <CarDetails />
      <LoadMore />
      <Estimate />
      <Foot />
    </div>
  );
}
