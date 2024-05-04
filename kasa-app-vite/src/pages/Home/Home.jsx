import { useState } from 'react';
import { Outlet } from "react-router-dom";
import NavBarre from "../../components/Header/Header";
import Banner from '../../components/Banner/Banner';
import BannerHome from '../../assets/banner-home.jpg';
import Cards from '../../components/Cards/Cards';
import LogementsData from "../../components/LogementsData/LogementsData";
import Footer from "../../components/Footer/Footer";
import './Home.scss'

export function Home() {
  const [cardsData, setCardsData] = useState([]);

  const handleDataFetch = (data) => {
    setCardsData(data);
  };

  return (
    <>
      <NavBarre />
      <Banner img>
        <div className="banner-container">
          <img className="banner-container-img" src={BannerHome} alt='img acceuil' />
          <h1 className="banner-container-txt">Chez vous, partout et ailleurs</h1>
        </div>
      </Banner>
      <Outlet />

{/* voir hook */}
      <LogementsData onDataFetch={handleDataFetch} />
      
      <div className="cards-container">
        <Cards cardsData={cardsData} />
      </div>
      <Footer />
    </>
  );
}
