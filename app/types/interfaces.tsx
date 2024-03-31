// types.ts

export interface CarData {
    id: string;
    make: string;
    model: string;
    year: number;
    description: string;
    odometer: number;
    vehiclecondition: string;
    salelocation: string;
    salecategory: string;
    salvagevehicle: string;
    saledate: string;
    saleprice: number | null;
    colour: string;
    engine: string;
    transmission: string;
    accessories: any;
    states: string;
    customdate: any;
    badges: any;
    bodytype: any;
    bodytypeconfig: any;
    fueltype: any;
    cylinders: any;
    division: any;
    drive: any;
    seat: any;
    doors: any;
}

export interface CarDetailsProps {
    carData: CarData[] | null; // It's an array of CarData or null
}


export interface Factors {
    id: number;
    name: string;
}

type FactorsSetter = (newValue: { id: number; name: string }) => void;

export interface FactorsProps {
    setMake: FactorsSetter;
    setModel: FactorsSetter;
    setYear: FactorsSetter;
    setOdometer: FactorsSetter;
    setVehicleCondition: FactorsSetter;
    setStates: FactorsSetter;
    setCustomDate: FactorsSetter;
    setSaleCategory: FactorsSetter;
    setBadges: FactorsSetter;
    setBodyType: FactorsSetter;
    setBodyTypeConfig: FactorsSetter;
    setFuelType: FactorsSetter;
    setTransmission: FactorsSetter;
    setEngine: FactorsSetter;
    setCylinders: FactorsSetter;
    setDivision: FactorsSetter;
    setDrive: FactorsSetter;
    setSeat: FactorsSetter;
    setDoors: FactorsSetter;
    setDescription: React.Dispatch<React.SetStateAction<string>>;
    setSort: FactorsSetter;
    setAsc: React.Dispatch<React.SetStateAction<string>>;
    carData: CarData | null; 
}

