import { useState } from 'react';
import { useParams } from 'react-router-dom';
import LogementData from '../../components/LogementData/LogementData';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Slideshow from '../../components/Slideshow/Slideshow';
import Tag from '../../components/Tag/Tag';
import Collapse from '../../components/Collapse/Collapse';

import fullStar from '../../assets/full-star.png';
import emptyStar from '../../assets/empty-star.png';
import './Logements.scss';


const arrayStars = [1, 2, 3, 4, 5]
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
                        <div className='content-logement'>
                            <div className='logement-infos'>
                                <h2 className='logement-title'>{logement.title}</h2>
                                <p className='logement-location'>{logement.location}</p>
                            </div>
                            <div className='logement-host'>
                                <p className='logement-host-info'>{logement.host.name}</p>
                                <img src={logement.host.picture} className='logement-host-img' alt={logement.host.name} />
                            </div>
                        </div>
                        <div className='display-tags-stars'>
                            <div className='logement-tags'>
                                {logement.tags.map(tag => (
                                    <Tag key={tag} tag={tag} />
                                ))}
                            </div>

                            <div className='stars'>
                                {arrayStars.map(number => {
                                    const countStar = parseInt(logement.rating);
                                    return (
                                        <img
                                            key={`star-${number}`}
                                            src={number <= countStar ? fullStar : emptyStar}
                                            alt={number <= countStar ? "full star" : "empty star"}
                                            className="star-img"
                                        />
                                    );
                                })}
                            </div>
                        </div>
                        <div className='collapseLogement'>
                            <div className='collapseItem'>
                                <Collapse
                                    title="Description"
                                    content={logement.description}
                                    contentClassName={"description"}
                                />
                            </div>
                            <div className='collapseItem'>
                                <Collapse
                                    title="Equipements"
                                    content={logement.equipments}
                                    contentClassName={"equipments"}
                                />
                            </div>
                        </div>
                    </div>

                )}

            </div>
            <Footer />
        </div>

    );
};

export default Logements;
