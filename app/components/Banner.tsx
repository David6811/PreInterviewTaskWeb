import './Banner.css'; // Import the CSS file
import CarFilter from './CarFilter';
import Menu from './Menu';
import UsedCarTitle from './UsedCarTitle';
import { Factors, FactorsProps } from '../types/interfaces';

export default function Banner({
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
  setVisibleCount}: FactorsProps) {
  return (
    <div id="banner" className="flex justify-between items-center banner">
      <div></div>
      <div id="pageHead" className="flex items-left h-full midBody">
        <Menu />
        <UsedCarTitle />
        <CarFilter setMake={setMake}
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
          setAsc ={setAsc}
          carData = {carData}
          setApply = {setApply}
          setVisibleCount ={setVisibleCount}/>
      </div>
      <div></div>
    </div>
  );
}
