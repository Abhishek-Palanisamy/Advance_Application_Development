import React from 'react'
import '../../assets/css/Styles.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useSelector } from 'react-redux'
import { selectUser } from '../../Redux/features/userSlice'

function Billing() {

  return (
    <>
    <Header/>
    <Footer/>
    </>

    )
}

export default Billing