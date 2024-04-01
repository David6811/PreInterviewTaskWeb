import Banner from "./components/Banner";
import CarDetails from "./components/CarDetails";
import Foot from "./components/Foot";
import LoadMore from "./components/LoadMore";
import Estimate from "./components/Estimate";
import Head from 'next/head';



export default function Home() {
  <Head>
          <link rel="shortcut icon" href="favicon.ico" />
</Head>
  return (
    <div>
      
      <Banner  make="" mode=""/>
      <CarDetails />
      <LoadMore />
      <Estimate />
      <Foot />
    </div>
  );
}
