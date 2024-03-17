import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import personalized from '../../assets/others/personalized'
import ColorizeIcon from '@mui/icons-material/Colorize';
function Personalized() {
  return (
    <>
    <Header/>
    <div className='personalized-container'>
    <h1>Personalized Gifts</h1>
    <div className='filters'>
    <h3>Other Categories:</h3>
    <div className='filter-items'>Flowers</div>
    <div className='filter-items'>Cakes</div>
    <div className='filter-items'>Plants</div>
    <div className='filter-items'>Fashion</div>
    <div className='filter-items'>Gourmet</div>
    <div className='filter-items'>Home & Living</div>
    <div className='filter-items'>Jewllery</div>
    </div>
    <div className='personalized-enclosure'>
    <div className='personalized-items'>
    {personalized.map((item, index) => (
      <div key={index} className='personalized-items1'>
        <img src={item.link} className='p-image' />
        <div className='p-items1'>
        <h3>{item.text}</h3>
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

export default Personalized