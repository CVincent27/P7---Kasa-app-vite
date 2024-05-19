import { useState } from 'react';
import PropTypes from 'prop-types';
import './Collapse.scss';
import arrow from '../../assets/arrow.png';

export default function Collapse({ title, children }) {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <div className='collapse'>
            <p className='collapse-title' onClick={handleToggle}>
                {title}
                <img
                    className={toggle ? 'arrow arrow_down' : 'arrow arrow_up'}
                    src={arrow}
                    alt={title}
                />
            </p>
            <div className={toggle ? 'collapse-content' : 'collapse-content-hidden'}>
                {children}
            </div>
        </div>
    );
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
