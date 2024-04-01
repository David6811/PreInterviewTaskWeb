import './Estimate.css'; // Import the CSS file

export default function Estimate() {
    return (
        <div className='estimateContainor'>
            <div className="flex flex-row">
                <div className="w-1/5 none-730"></div>
                <div className="w-4/5 ml-5 full-730">
                    <div className="flex flex-col h-full ">
                        <div className='estimateTitle estimateTitle-730'>Looking for a car estimate?</div>
                        <div className='subEstimateTitle mt-3 subEstimateTitle-730'>Try our free valuation tool for an estimated value of your car.</div>
                        <div>
                            <button className='estimateButton'>Get free estimate</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
