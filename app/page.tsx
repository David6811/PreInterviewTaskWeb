import Banner from "./components/Banner";
import CarDetails from "./components/CarDetails";
import LoadMore from "./components/LoadMore";
import Estimate from "./components/estimate";


export default function Home() {
  return (
    <div>
      <Banner />
      <CarDetails />
      <LoadMore />
      <Estimate />
    </div>
  );
}
