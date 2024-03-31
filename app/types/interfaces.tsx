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
