import NavBarre from "../../components/Header/Header";
import './About.scss'
import Footer from "../../components/Footer/Footer"
import Banner from "../../components/Banner/Banner";
import BannerAbout from "../../assets/banner-about.jpg";

export function About() {
    return (
        <>
            <div className="main-content">
                <NavBarre />
                <Banner>
                    <div className="banner-container">
                        <img className="banner-container-img" src={BannerAbout} alt='img about' />
                    </div>
                </Banner>
            </div>

            <Footer />
        </>
    );
}