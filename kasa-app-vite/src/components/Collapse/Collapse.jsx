// import { useState } from 'react'
// import arrowUp from "../../assets/arrow-up.png"
// import arrowDown from "../../assets/arrow-down.png"
// import "./Collapse.scss"
// import PropTypes from 'prop-types'; 

// function Collapse({title, content, contentClassName}) {
//     // collapse fermée par defaut
//     const [contentVisible, setContentVisible] = useState(false)

//     // inverse valeur open/close
//     const displayContent = () => { 
//         setContentVisible(!contentVisible)
//     }

//     // def classe selon si c'est open ou close
//     const collapseContent = (contentVisible ? "visible" : "hidden") + " collapse"
//     const collapseArrow = (contentVisible ? arrowUp : arrowDown)

//     return (
//         <div className='collapse'>

//             <div className='collapse-header' onClick={displayContent}>
//                 <span>{title}</span>
//                 <div className="arrowValue">
//                     <img src={collapseArrow} alt=""/>
//                 </div>
//             </div>

//             <div className={collapseContent} >
//                 <ul className={contentClassName}>{content}</ul>
//             </div>
//         </div>
//     )
// }

// // Déf proptypes
// Collapse.propTypes = {
//     title: PropTypes.string.isRequired, 
//     content: PropTypes.node.isRequired,
//     contentClassName: PropTypes.string
// };

// export default Collapse;

import { useState } from 'react';
import PropTypes from 'prop-types';
import './Collapse.scss';
import arrow from '../../assets/arrow.png';

export default function Collapse({ title, content }) {

    const [toggle, setToggle] = useState(false);

    return (
        <div className='collapse'>
            <p className='collapse-title' onClick={() => setToggle(!toggle)}>
                {title}
                <img
                    className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'}
                    src={arrow}
                    alt={title}
                />
            </p>
            <div className={toggle ? 'collapse-content' : 'collapse-content-hidden'}>
                {Array.isArray(content) ? content.map((item, index) => {
                    return (
                        <p key={index}>{item}</p>
                    )
                }) : content
                }
            </div>
        </div>
    )
    // Déf proptypes
}
Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired
};
