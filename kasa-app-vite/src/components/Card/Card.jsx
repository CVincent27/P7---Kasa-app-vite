import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ cardData }) => {
  return (
    <div className="card-container">
      <Link className="card" to={`logements/${cardData.id}`}>
        <h4 className='locationNom'>{cardData.title}</h4>
          <img className='locationCover' src={cardData.cover} alt={cardData.title} />
      </Link>
    </div>
  );
};

Card.propTypes = {
  cardData: PropTypes.object.isRequired
};

export default Card;
