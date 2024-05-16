import { useState } from 'react';
import PropTypes from 'prop-types';
import ArrowRight from '../../assets/arrow-right.png';
import ArrowLeft from '../../assets/arrow-left.png';
import './Slideshow.scss';

const Slideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        if (currentIndex === images.length - 1) {
            setCurrentIndex(0); 
        } else {
            setCurrentIndex(currentIndex + 1); 
        }
    };

    const prevSlide = () => {
        if (currentIndex === 0) {
            setCurrentIndex(images.length - 1); 
        } else {
            setCurrentIndex(currentIndex - 1); 
        }
    };

    return (
        <section className='carousel'>
            <div style={{ backgroundImage: `url(${images[currentIndex]})` }} className='carousel-content'>
                {images.length > 1 && (
                    <>
                        <img
                            className='carousel_arrow carousel_arrow_right'
                            src={ArrowRight}
                            alt='flèche droite'
                            onClick={nextSlide}
                        />
                        <img
                            className='carousel_arrow carousel_arrow_left'
                            src={ArrowLeft}
                            alt='flèche gauche'
                            onClick={prevSlide}
                        />
                        <p className='slideCount'>{currentIndex + 1} / {images.length}</p>
                    </>
                )}
            </div>
        </section>
    );
};

// Validation props type
Slideshow.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired 
};

export default Slideshow;
