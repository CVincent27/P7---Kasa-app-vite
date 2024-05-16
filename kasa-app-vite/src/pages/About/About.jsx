import NavBarre from "../../components/Header/Header";
import './About.scss'
import Footer from "../../components/Footer/Footer"
import Banner from "../../components/Banner/Banner";
import BannerAbout from "../../assets/banner-about.jpg";
import Collapse from "../../components/Collapse/Collapse";

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
                <div className="collapse-container">
                    <Collapse
                        title="Fiabilité"
                        content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, 
                        et toutes les informations sont régulièrement vérifiées par nos équipes."
                    />
                    <Collapse
                        title="Respect"
                        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de 
                        perturbation du voisinage entraînera une exclusion de notre plateforme."
                    />
                    <Collapse
                        title="Service"
                        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de 
                        perturbation du voisinage entraînera une exclusion de notre plateforme."
                    />
                    <Collapse
                        title="Sécurité"
                        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de 
                        perturbation du voisinage entraînera une exclusion de notre plateforme."
                    />
                </div>
            </div>

            <Footer />
        </>
    );
}