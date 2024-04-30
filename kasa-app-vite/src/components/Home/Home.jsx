import { Outlet } from "react-router-dom";
import NavBarre from "../Header/Header";
import Banner from '../Banner/Banner';
import BannerHome from './banner-home.jpg'
import Footer from "../Footer/Footer";
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