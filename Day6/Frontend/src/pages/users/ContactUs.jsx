import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../assets/css/Styles.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';
function ContactUs() {
    const nav=useNavigate("");
    const[firstname,setFirstname]=useState(" ");
    const[subject,setSubject]=useState(" ");
    const[emailid,setEmailid]=useState(" ");
    const[mobile,setMobile]=useState(" ");
  const[query,setQuery]=useState(" ");
  return (
<>
<Header/>
<Breadcrumbs/>
<section className="contact-info-area">
  <div className="container">
              <div className="contact-form">
                          <div className="sec-title-style1 float-left">
                              <div className="title">Send Your Message</div>
                              <div className="text"><div className="decor-left"><span></span></div><p>Contact Form</p></div>
                          </div>
                      <form id="contact-form" name="contact_form" className="default-form" >
                                          <div className="input-box">   
                                              <input type="text" name="form_name"  placeholder="Name"  onChange={(e)=>setFirstname(e.target.value)}/>
                                          </div> 
                                           <div className="input-box"> 
                                              <input type="text" name="form_phone"  placeholder="Phone" onChange={(e)=>setMobile(e.target.value)}/>
                                          </div>
                                          <div className="input-box"> 
                                              <input type="email" name="form_email"  placeholder="Email" onChange={(e)=>setEmailid(e.target.value)}/>
                                          </div>
                                          <div className="input-box"> 
                                              <input type="text" name="form_subject"  placeholder="Subject" onChange={(e)=>setSubject(e.target.value)}/>
                                          </div>     
                                  <div className="input-box">    
                                      <textarea name="form_message" placeholder="Your Message..." onChange={(e)=>setQuery(e.target.value)}></textarea>
                                  </div>
                                  <div className="button-box">
                                      <button type="submit">Send Message</button>    
                                  </div>         
                      </form>
                  </div>
              </div>
</section>
<Footer/>
</>
    )
}

export default ContactUs