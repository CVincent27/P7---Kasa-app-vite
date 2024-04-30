import { Outlet } from "react-router-dom";
import NavBarre from "../../components/Header/Header";
import Banner from '../../components/Banner/Banner';
import BannerHome from '../../assets/banner-home.jpg'
import Footer from "../../components/Footer/Footer";
import './Home.scss'

export function Home() {

  return (
    <>
      <NavBarre />
      <Banner>
        <div className="banner-container">
          <img className="banner-container-img" src={BannerHome} alt='img acceuil' />
          <p className="banner-container-txt">Chez vous, partout et ailleurs</p>
        </div>
      </Banner>
      <Outlet />
      <Footer /></>
  )
}