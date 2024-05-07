import { useState } from 'react';
import { useParams } from 'react-router-dom';
import LogementData from '../../components/LogementData/LogementData';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Slideshow from '../../components/Slideshow/Slideshow';

const Logements = () => {
    // extraire id de l'URL
    const { id } = useParams();
    const [logement, setLogement] = useState(null);

    //   recherche de données par id
    const handleDataFetch = (data) => {
        const selected = data.find(logement => logement.id === id);
        setLogement(selected);
    };

    return (
        <div>
            <div className='main-content'>
                <Header />
                <Slideshow images={logement ? logement.pictures : []} />
                <LogementData onDataFetch={handleDataFetch} />
                {logement && (
                    <div key={logement.id}>
                        <h2>{logement.title}</h2>
                        <p>{logement.description}</p>
                        <p>
                            {logement.host.name}
                            <img src={logement.host.picture} alt={logement.host.name} />
                        </p>
                        <p>{logement.rating}</p>
                        <p>{logement.location}</p>
                    </div>
                )}
            </div>
            <Footer />
        </div>

    );
};

export default Logements;
