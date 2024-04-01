import './Foot.css'; // Import the CSS file

export default function Foot() {
    return (
        <div className='FootContainor flex justify-between items-center'>
            <div></div>
            <div className=''>
                © 2024 xxx Pty Limited |
                <a href='https://pricespeoplepay.com.au/terms-condition'>Terms & Conditions</a> |
                <a href='https://pricespeoplepay.com.au/privacy-policy'>Privacy Policy</a>
            </div>
            <div></div>

        </div>
    );
}
