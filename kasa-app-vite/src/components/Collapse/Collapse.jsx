import { useState } from 'react'
import arrowUp from "../../assets/arrow-up.png"
import arrowDown from "../../assets/arrow-down.png"
import "./Collapse.scss"
import PropTypes from 'prop-types'; 

function Collapse({title, content}) {
    // collapse fermée par defaut
    const [contentVisible, setContentVisible] = useState(false)

    // inverse valeur open/close
    const displayContent = () => { 
        setContentVisible(!contentVisible)
    }

    // def classe selon si c'est open ou close
    const collapseContent = (contentVisible ? "visible" : "hidden") + " collapse"
    const collapseArrow = (contentVisible ? arrowUp : arrowDown)

    return (
        <div className='collapse'>

            <div className='collapse__header' onClick={displayContent}>
                <span>{title}</span>
                <div className="chevronValue">
                    <img src={collapseArrow} alt=""/>
                </div>
            </div>

            <div className={collapseContent}>
                <ul>{content}</ul>
            </div>
        </div>
    )
}

// Déf proptypes
Collapse.propTypes = {
    title: PropTypes.string.isRequired, 
    content: PropTypes.node.isRequired 
};

export default Collapse;
