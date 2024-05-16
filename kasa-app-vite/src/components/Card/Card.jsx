import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ cardData }) => {
  return (
    <Link className="card" to={`logements/${cardData.id}`}>
      <div className='card-wrap'>
          <img className='locationCover' src={cardData.cover} alt={cardData.title} />
        <div className='card-layer'>
          <p className='locationNom'>{cardData.title}</p>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  cardData: PropTypes.object.isRequired
};

export default Card;
