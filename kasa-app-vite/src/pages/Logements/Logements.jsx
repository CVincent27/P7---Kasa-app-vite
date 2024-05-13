import { useState } from 'react';
import { useParams } from 'react-router-dom';
import LogementData from '../../components/LogementData/LogementData';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Slideshow from '../../components/Slideshow/Slideshow';
import Tag from '../../components/Tag/Tag';
import './Logements.scss';

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
                        <p className='content-logement'>
                            <div className='logement-infos'>
                                <h2 className='logement-title'>{logement.title}</h2>
                                <p className='logement-location'>{logement.location}</p>
                            </div>
                            <p className='logement-host'>
                                <p className='logement-host-info'>{logement.host.name}</p>
                                <img src={logement.host.picture} className='logement-host-img' alt={logement.host.name} />
                            </p>
                        </p>
                        <div className='logement-tags'>
                            {logement.tags.map(tag => (
                                <Tag key={tag} tag={tag} />
                            ))}
                        </div>


                    </div>
                )}
            </div>
            <Footer />
        </div>

    );
};

export default Logements;
