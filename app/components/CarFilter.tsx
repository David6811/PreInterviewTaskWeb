import './CarFilter.css'; // Import the CSS file
import CarSelector from './CarSelector';

export default function CarFilter() {
    return (
        <div>
            <div className='carFilterContainer mt-5'>
                <div className='carFilterInnerContainner'>
                    <div className='flex justify-between items-center  mt-3 carFilters'>
                        <CarSelector />
                        <CarSelector />
                        <CarSelector />
                        <CarSelector />
                        <CarSelector />
                        <CarSelector />
                        <CarSelector />
                        <CarSelector />
                    </div>
                    <div className='flex justify-between items-center mt-8 mr-3 carFilterButtons'>
                        <a className='showMoreLink'>Show more filters</a>
                        <div>
                            <button className='applyButton mr-3'>Apply</button>
                            <button className='clearButton'>Clear</button>
                        </div>
                    </div>
                </div>
            </div>

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

            </div>
        </div>
    );
}
