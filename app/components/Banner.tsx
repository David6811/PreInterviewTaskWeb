import './Banner.css'; // Import the CSS file
import CarFilter from './CarFilter';
import Menu from './Menu';
import UsedCarTitle from './UsedCarTitle';

interface BannerProps {
  make: string;
  mode: string;
}
export default function Banner({ make, mode }: BannerProps) {
  return (
    <div id="banner" className="flex justify-between items-center banner">
      <div></div>
      <div id="pageHead" className="flex items-left h-full midBody">
        <Menu />
        <UsedCarTitle />
        <CarFilter />
      </div>
      <div></div>
    </div>
  );
}
