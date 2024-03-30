import Banner from "../components/Banner";
import CarDetails from "../components/CarDetails";
import Estimate from "../components/Estimate";
import Foot from "../components/Foot";
import LoadMore from "../components/LoadMore";



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
