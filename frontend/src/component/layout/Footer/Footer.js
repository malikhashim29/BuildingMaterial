import React from "react";
import footerlogo from "../../../images/logo.png"
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import LocationIcon from "@material-ui/icons/Room";

import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        
    
        <img src={footerlogo} alt="LOGO" />
       
      </div>

      <div className="midFooter">
        <h2>&copy;ŜMART ŜTEEL & BŘICKS</h2>
        <p>All &copy;Rights Reserved</p><br></br>

        <p>2022 &copy; SmartSteel&Bricks</p>
      </div>

      <div className="rightFooter">
        <h4>Have any questions?</h4>
          
         <a href="https://instagram.com/" target="blank">
              <LocationIcon className="instagramSvgIcon" />    Islamabad, Pakistan
            </a>

           <a href="https://instagram.com/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />    Instagram
            </a>
            
        <a
              href="https://www.youtube.com"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />    Youtube

            </a>
      </div>
    </footer>
  );
};

export default Footer;