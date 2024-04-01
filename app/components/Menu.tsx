import './Menu.css'; // Import the CSS file
import Image from 'next/image';
import logo from './images/logo.png';
import user from './images/user.jpeg';
import list from './images/list.jpeg';


export default function Menu() {
    return (
        <div className='flex justify-between items-center mt-3 mt-960'>
            <div className='mr-8 log-960 hover:cursor-pointer'>
                <Image src={logo} alt="" width={238} height={61} />
            </div>
            <div id="menus" className='flex justify-between items-center mt-7 ml-10 menus menus-960'>
                <span>What's my car worth?</span>
                <span className='ml-8 text-white'>Used car prices</span>
                <span className='ml-8'>Sell my car</span>
                <button className='ml-8'>More</button>
            </div>
            <div className='flex justify-between items-center mt-6 min-960'>
                <Image src={user} alt="" width={36} height={36} className='hover:cursor-pointer' />
                <Image src={list} alt="" width={42} height={42} className='mt-1 ml-5 list-xl hover:cursor-pointer list-960' />
            </div>
        </div>
    );
}
