import React from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousal'

function Home() {
  const images = [
    'https://www.thebikeaffair.com/cdn/shop/files/5_190ff42d-d0c5-4c3c-82fe-09151e1889a7.png?v=1708408667&width=1080',
    'https://ik.imagekit.io/j83rchiauw/seo_popular_master/202304121925_q5KtAcKZTxDdWp4O.png',
    'https://images.prestogifts.com/upload/Main-Banner/Mobile-1000x539/652cec37c8684_642152f4240cc_4.webp',
    'https://www.littlecubess.com/wp-content/uploads/2021/03/2-Web-banner-2-mens-wallet.jpg'


  ];
  return (
    <>
    <Header/>
    <Carousel images={images}/>
    <div className='home-container'>
    <h2>Our Products</h2>
    </div>
    </>
  )
}

export default Home