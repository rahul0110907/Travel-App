import React from "react";
import "../style/Footer.css";
import{AiFillLinkedin,AiOutlineTwitter,AiFillFacebook,AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="footermain">
    <div className="footer">
        <div className="first">
      <h1>Travel.Net</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        saepe, voluptatem accusamus doloribus accusantium velit minus officia
        voluptatum blanditiis at iure dicta cupiditate magnam laudantium quis
        ipsa, non sed placeat!
      </p>
      </div>
      <div className="second">
      <h3>Our Agency</h3>
        <ul>
        <li>Insurance</li>
        <li>Agancy</li>
        <li>Tourism</li>
        <li>Paymnet</li>
        </ul>
       
      
      </div>
      <div className="third">
        <h3>Partners</h3>
        <ul>
        <li>Booking</li>
        <li>RentalCar</li>
        <li>HotelWord</li>
        <li>TripAdvisor</li>
        </ul>
        
      </div>

      <div className="fourth">
        <h3>Last Minute</h3>
        <ul>
        <li>Jodhpur</li>
        <li>Agra</li>
        <li>bangalore</li>
        <li>Delhi</li>
        </ul>
        </div>
      </div>
      <div className="follow">
        <span>Follow us on :</span>
        <ul>
        <a href="/"><AiOutlineTwitter /></a>
        <a href="/"> <AiFillFacebook/></a>
        <a href="/"><AiFillInstagram/></a>
        <a href="/"><AiFillLinkedin/></a>
        </ul>
       
      
    </div>
    <div className="copyright">
    Copyright &#169; 2023 Rahul Kumar Gupta
    </div>
    </div>
  );
};

export default Footer;
