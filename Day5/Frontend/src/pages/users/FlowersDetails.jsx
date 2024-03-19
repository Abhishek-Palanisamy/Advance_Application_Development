import React, { useEffect, useState } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../assets/css/Styles.css'; // Import your CSS file
import { useNavigate, useParams } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/features/cartSlice';
import getFlowersbyId from './getFlowersbyId';
import { ToastContainer, toast } from 'react-toastify';
function FlowersDetails() {
    const navigate = useNavigate();
  const { id } = useParams();
  const flowerId = parseInt(id, 10);
  const flowerDetails = getFlowersbyId(flowerId);
  
  if (!flowerDetails) {
    return <div>Vegetable not found</div>;
  }
  
  const [images, setImages] = useState([]);
  const [slide, setSlide] = useState(null); // Initially set to null

  useEffect(() => {
    if (flowerDetails.imgs && flowerDetails.imgs.length > 0) {
      setImages(flowerDetails.imgs);
      // Set the slide to the first image only if the current slide is null
      if (!slide) {
        setSlide(flowerDetails.imgs[0]);
      }
    }
  }, [flowerDetails, slide]); // Update the effect when slide changes
  
  const handleClick = (index) => {
    if (images && images.length > 0) {
      setSlide(images[index]);
    }
  };

  const [showTextArea, setShowTextArea] = useState(false);
  const [showTextArea1, setShowTextArea1] = useState(false);

  const handleButtonClick = () => {
    setShowTextArea(!showTextArea); // Toggle the state
  };
  const handleButtonClick1 = () => {
    setShowTextArea1(!showTextArea1); // Toggle the state
  };
  
  const dispatch = useDispatch();

  // add to cart 
  const handleAddToCart = () => {
    dispatch(addToCart({
      id: flowerDetails.id,
      name: flowerDetails.name,
      image: flowerDetails.imgs[0], // Assuming the first image is the main one
      price: flowerDetails.price,
    }));
    toast.success("Item added to Cart");

  };
  const handleViewCart=()=>{
    navigate("/cart")
  }
  return (
    <>
    <Header />
    <Breadcrumbs/>
    <ToastContainer/>
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
          <div>
            {slide ? (
              <img src={slide} width='500' height='500' />
            ) : (
              <p>Click on an image to view</p>
            )}
          </div>
          
          <div className='options1'>
            <button className='personalization1' onClick={handleButtonClick1}>
              {showTextArea1 ? 'Delivery and Return Policy' : 'Delivery and Return Policy'}
              <span className="icon1">{showTextArea1 ? <ExpandLessIcon /> : <ExpandMoreIcon />}</span>
            </button>
            {showTextArea1 && (
              <div className='text'>
                <h4>Dispatches within 1-2 weeks</h4>
                <h4>Returns & exchanges not accepted</h4>
                <h4>Delivery Cost : 80</h4>
              </div>
            )}
          </div>
          
     
        </div>
        <div className='content'>
          <h1>{flowerDetails.name}</h1>
          <p>{flowerDetails.rating} <span style={{ color: 'gold' }}>&#9733;</span> {flowerDetails.persons} <span> ratings</span></p>
          <hr/>
          <p style={{color:'red',fontSize:'25px',fontWeight:'bolder',fontFamily:'cursive'}}>&#x20B9; {flowerDetails.price}</p>
          <h4>Color<span>&#x2A;</span></h4>
          <div className='options'>
            <select name='custom'>
              <option value='Black'>Select One</option>
              <option value='Black'>Black</option>
              <option value='Black'>Blue</option>
              <option value='Black'>White</option>
            </select>
          </div>
          <h4>Size<span>&#x2A;</span></h4>
          <div className='options'>
            <select name='custom'>
              <option value='Black'>Select</option>
              <option value='Black'>Small</option>
              <option value='Black'>Medium</option>
              <option value='Black'>Large</option>
            </select>
          </div>
          <div className='options'>
            <button className='personalization' onClick={handleButtonClick}>
              {showTextArea ? 'Add Your Personalization' : 'Add Your Personalization'}
              <span className="icon">{showTextArea ? <ExpandLessIcon /> : <ExpandMoreIcon />}</span>
            </button>
            {showTextArea && (
              <div>
                <h5 className='personalization-text'>Please message theme or color(s), add a name, even choose what items you want to add.</h5>
                <textarea placeholder="Enter your personalization..." maxLength="250"></textarea>
              </div>
            )}
          </div>
          <button className='basket' onClick={handleAddToCart}>Add to Cart</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className='basket' onClick={handleViewCart}>View Cart</button>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default FlowersDetails