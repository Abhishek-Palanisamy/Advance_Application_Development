import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ColorizeIcon from '@mui/icons-material/Colorize';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/Styles.css'
import Breadcrumbs from '../../components/Breadcrumbs';
import flowerss from '../../assets/others/flowers';
function Flowers() {
    const nav=useNavigate('');
    const customize = (id) => {
      console.log(id);
      nav(`/flowers/${id}`);
    };
    
    useEffect(() => {
      window.scrollTo(0, 0);
  }, []);
  return (
<>
<Header/>
    <Breadcrumbs/>
    <div className='personalized-container'>
    <h1>Flower Gifts</h1>
    <div className='filters'>
    <h3>Other Categories:</h3>
    <div className='filter-items'>Personalization</div>
    <div className='filter-items'>Cakes</div>
    <div className='filter-items'>Plants</div>
    <div className='filter-items'>Fashion</div>
    <div className='filter-items'>Gourmet</div>
    <div className='filter-items'>Home & Living</div>
    <div className='filter-items'>Jewellery</div>
    </div>
    <div className='personalized-enclosure'>
    <div className='personalized-items'>
    {flowerss.map((item, index) => (
      <div key={index} className='personalized-items1' onClick={()=>customize(item.id)} style={{cursor:'pointer'}} >
        <img src={item.img} className='p-image' />
        <div className='p-items1'>
        <h3>{item.name}</h3>
        <p className='price'>&#x20B9; {item.price}</p>
        <div className='bottom'>
        <p>{item.rating}<span style={{ color: 'gold' }}>&#9733;</span> ({item.persons})</p>
        <p ><ColorizeIcon style={{fontSize:'15px',marginTop:'3px'}}/> Personalizable</p>
        </div>
        </div>
      </div>
    ))}
  </div>
    
    </div>
    </div>


    <Footer/>
</>

    )
}

export default Flowers