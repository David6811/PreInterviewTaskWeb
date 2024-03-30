import './CarFilter.css'; // Import the CSS file
import CarSelector from './CarSelector';

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
            {/* 
            <div className='mt-10 flex justify-between items-center'>
                <div className='flex justify-between items-center filterStatistics'>
                    <div className='mr-6'>Records: 125</div>
                    <div className='mr-6'>Average KM: 94,107</div>
                    <div className='mr-6'>Average age: 8yrs 10mos</div>
                </div>
                <div>
                    <button className="sortButton mr-10">Sort by Sold Date</button>
                    <button className="ascButton">ASC</button>
                    <button className="descButton">desc</button>
                </div>

            </div> */}
        </div>
    );
}
