import './Banner.css'; // Import the CSS file
import Menu from './Menu';
import UsedCarTitle from './UsedCarTitle';

export default function Banner() {
  return (
    <div id="banner" className="flex justify-between items-center banner">
      <div></div>
      <div id="pageHead" className="flex items-left h-full midBody">
        <Menu />
        <UsedCarTitle />
      </div>
      <div></div>
    </div>
  );
}
