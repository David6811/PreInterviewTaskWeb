import './LoadMore.css'; // Import the CSS file

export default function LoadMore({ onLoadMore }) {

    return (
        <div className='flex flex-col items-center h-full'>
            <button className='loadMoreButton mt-8' onClick={onLoadMore}>Load more</button>
            <div className='mt-10'>Too many records to go through?</div>
            <div className="mt-2">
                <a className="mr-2"><strong>Subscribe to download summary report</strong></a>
                <a>View sample</a>
            </div>
        </div>
    );
}
