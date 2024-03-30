import Banner from "./components/Banner";
import CarDetails from "./components/CarDetails";
import Foot from "./components/Foot";
import LoadMore from "./components/LoadMore";
import Estimate from "./components/Estimate";


export default function Home() {
  return (
    <div>
      <Banner />
      <CarDetails />
      <LoadMore />
      <Estimate />
      <Foot />
    </div>
  );
}
