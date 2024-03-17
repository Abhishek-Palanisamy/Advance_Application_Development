import React from "react";
import "../assets/css/Styles.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-enclosure">
          <div className="footer-closure">
            <div className="footer1">
              <h3>Follow Us</h3>
              <ul className="contacts1">
                <a href="#"><FacebookIcon/></a>
                <a href="#"><XIcon/></a>
                <a href="#"><InstagramIcon/></a>
                <a href="#"><YouTubeIcon/></a>
                <a href="#"><WhatsAppIcon/></a>
              </ul>
            </div>
            <div className="footer1">
              <h3>Contact Us</h3>
              <ul className="contacts">
                <a href="#">GiftCraft</a>
                <a href="#">91, OMR Road, Chennai-21</a>
                <a href="#">+91 7894562230</a>
              </ul>
            </div>
            <div className="footer1">
              <h3>Information</h3>
              <ul className="contacts">
                <a href="#">About Us</a>
                <a href="#">Shipping Policy</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms and Condition</a>
              </ul>
            </div>
            <div className="footer1">
              <h3>Help</h3>
              <ul className="contacts">
                <a href="#">Contact Us</a>
                <a href="#">FAQ</a>
              </ul>
            </div>
            <div className="footer1">
              <h3>Categories</h3>
              <ul className="contacts">
                <a href="#">Bulk Gifts</a>
                <a href="#">Fashion</a>
                <a href="#">Flowers</a>
                <a href="#">Gourmet</a>
                <a href="#">Birthday Gifts</a>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <h4>Copyright Reserved @ GiftCraft 2024</h4>
      </div>
    </>
  );
}

export default Footer;
