import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBarre from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import BannerHome from '../../assets/banner-home.jpg';
import LogementData from "../../components/LogementData/LogementData";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import './Home.scss'

export function Home() {
  // init un tableau vide
  const [cardData, setCardData] = useState([]);
  // recup données
  const handleDataFetch = (data) => {
    setCardData(data);
  };

  return (
    <>
      <div className="main-content">
        <NavBarre />
        <Banner img>
          <div className="banner-container">
            <img className="banner-container-img" src={BannerHome} alt='img acceuil' />
            <h1 className="banner-container-txt">Chez vous, partout et ailleurs</h1>
          </div>
        </Banner>
        <Outlet />

        <LogementData onDataFetch={handleDataFetch} />

        <div className="cards-container">
          {cardData.map((card) => (
            <Card key={card.id} cardData={card} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
