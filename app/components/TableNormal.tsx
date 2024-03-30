
import './TableNormal.css';
export default function TableNormal() {
    return (
        <div className="flex justify-center items-center h-full">
        <table>
            <thead>
                <tr>
                    <th>Make</th> 
                    <th>Model</th> 
                    <th>Year</th> 
                    <th style={{width:'225px'}}>Description</th>
                    <th>Odometer</th>
                    <th>Vehicle condition</th> 
                    <th>Sale location</th> 
                    <th>Sale category</th> 
                    <th>Salvage Vehicle</th>
                    <th>Sale date</th> 
                    <th></th>
                    <th>Sale price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Audi</td>
                    <td>A5</td>
                    <td>2016</td>
                    <td>8T MY16 S line plus Coupe 2dr S tronic 7sp quattro 2.0T</td>
                    <td>82,640</td>
                    <td>Above Average</td>
                    <td>Southport (QLD)</td>
                    <td>Dealership</td>
                    <td>No</td>
                    <td>Mar 2024</td>
                    <td><a className='underline cursor-pointer'>More</a></td>
                    <td><button className="subscribeButton">Subscribe to reveal price</button></td>
                </tr>
            </tbody>
        </table>
    </div>
    );
}
