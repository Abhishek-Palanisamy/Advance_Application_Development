import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../assets/css/Styles.css';
import getPersonalizedbyId from './getPersonalizedbyId';
import { useParams } from 'react-router-dom';

function PersonalizedDetails() {
    const { id } = useParams();
    const personalizeId = parseInt(id, 10);
    const personalizeDetails = getPersonalizedbyId(personalizeId);
  
    if (!personalizeDetails) {
      return <div>Vegetable not found</div>;
    }
  
    const [images, setImages] = useState([]);
    const [slide, setSlide] = useState(null); // Initially set to null

    useEffect(() => {
      if (personalizeDetails.images && personalizeDetails.images.length > 0) {
        setImages(personalizeDetails.images);
        // Set the slide to the first image only if the current slide is null
        if (!slide) {
            setSlide(personalizeDetails.images[0]);
        }
      }
    }, [personalizeDetails, slide]); // Update the effect when slide changes
    
    const handleClick = (index) => {
      if (images && images.length > 0) {
        setSlide(images[index]);
      }
    };
    
    return (
        <>
            <Header />
            <div className='containerrd'>
                <div className='desimgs'>
                <div className='flex_row'>
                {images.map((data, i) => (
                    <div className='thumbnail' key={i}>
                    <img
                    className={slide === data ? "clicked" : ""}
                    src={data}
                    onClick={() => handleClick(i)}
                    height="90px"
                    width="90px"
                    />
                    </div>
                    ))}
                    </div>
                    <div id='main'>
                        {slide ? (
                            <img src={slide} width='500' height='500' />
                        ) : (
                            <p>Click on an image to view</p>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PersonalizedDetails;
