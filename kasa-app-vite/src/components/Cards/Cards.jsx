import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Cards.scss';

const Cards = ({ cardsData }) => {
  const slicedData = cardsData.slice(0, 6);

  return (
    <div className="cardsGlobale">
      <div className="cardsDisplay">
        {slicedData.map((card) => (
          <Link className="card" to="logements" key={card.id}>
            <h4 className='locationNom'>{card.title}</h4>
            <div className="cover">
              <img className='locationCover' src={card.cover} alt={card.title} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

Cards.propTypes = {
  cardsData: PropTypes.array.isRequired
};

export default Cards;
