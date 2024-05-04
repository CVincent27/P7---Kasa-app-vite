import PropTypes from 'prop-types';
import './Banner.scss'

export default function Banner({ children }) {
    return (
        <div className="banner">
            {children}
        </div>
    )
}

Banner.propTypes = {
    children: PropTypes.node.isRequired,
};
