import './CarFilter.css'; // Import the CSS file
import CarSelector from './CarSelector';
import SortButton from './SortButton';

export default function CarFilter() {
    return (
        <div>
            <div className='carFilterContainer mt-5'>
                <div className='carInnerContainner'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1 mt-3">
                        <div className="flex justify-center">
                            <CarSelector />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector />
                        </div>
                    </div>
                </div>

                {/* <div className='moreCarInnerContainner'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1">
                        <div className="flex justify-center">
                            <CarSelector />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector />
                        </div>

                        <div className="flex justify-center">
                            <CarSelector />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector />
                        </div>
                        <div className="flex justify-center">
                            <CarSelector />
                        </div>
                        
                    </div>
                </div> */}

                <div className='carControllerInnerContainner'>
                    <div className='grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-1 mt-3'>
                        <div className='mt-1'>
                            <a className='flex justify-center showMoreLink'>Show more filters</a>
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
