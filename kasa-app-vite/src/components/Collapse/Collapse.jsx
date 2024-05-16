import { useState } from 'react';
import PropTypes from 'prop-types';
import './Collapse.scss';
import arrow from '../../assets/arrow.png';

export default function Collapse({ title, content }) {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <div className='collapse'>
            <p className='collapse-title' onClick={handleToggle}>
                {title}
                <img
                    className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'}
                    src={arrow}
                    alt={title}
                />
            </p>
            <div className={toggle ? 'collapse-content' : 'collapse-content-hidden'}>
                {Array.isArray(content) ? (
                    content.map((item, index) => {
                        return <p key={index}>{item}</p>;
                    })
                ) : (
                    <p>{content}</p>
                )}
            </div>
        </div>
    );
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
};
