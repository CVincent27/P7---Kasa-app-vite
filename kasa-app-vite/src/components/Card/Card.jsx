import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ cardData }) => {
  return (
    <Link className="card" to={`logements/${cardData.id}`}>
      <div className='card-wrap'>
        <h4 className='locationNom'>{cardData.title}</h4>
        <div className="image-container">
          <img className='locationCover' src={cardData.cover} alt={cardData.title} />
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  cardData: PropTypes.object.isRequired
};

export default Card;
