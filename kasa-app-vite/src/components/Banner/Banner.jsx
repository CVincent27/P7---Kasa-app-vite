import PropTypes from 'prop-types';
import './Banner.scss'

export default function Banner({ children, img }) {
    return (
        <div className="banner">
            <img className="banner-container-img" src={img} alt='img acceuil' />
            {children}
        </div>
    )
}

Banner.propTypes = {
    children: PropTypes.node.isRequired
}