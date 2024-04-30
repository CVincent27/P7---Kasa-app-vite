import PropTypes from 'prop-types';
import './Banner.scss'

export default function Banner(props) {
    return (
        <div className="banner">
            {props.children}
        </div>
    )
}

Banner.propTypes = {
    children: PropTypes.node.isRequired
}