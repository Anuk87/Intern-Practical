import React from "react";
import "./footer.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope, faFacebookf } from "@fortawesome/free-solid-svg-icons";
// import { BiLogoFacebook } from "@react-icons/all-files/fa/BiLogoFacebook";

function Footer() {
  return (
    <div>
      <div className="footerMainDivOne">
        <div className="footerMainDivTwo">
          <div className="design"></div>

          <div className="footerMainDiv">
            <div>
              <div className="aboutDiv">
                <h1>About</h1>
                <a href="##">About cinnamon Hotels & Resorts</a>
                <a href="##">Media & Accociae</a>
                <a href="##">Gallery</a>
                <a href="##">CSR & Sustanability</a>
                <a href="##">John Keells Group</a>
                <a href="##">Cinnamon Air</a>
              </div>
            </div>
            <div>
              <div className="getInTouch">
                <h1>Get In Touch</h1>
                <a href="##">Cinnamon Air</a>
                <a href="##">Know Sri Lanka</a>
                <a href="##">Know Maldives</a>
                <a href="##">Contact Us</a>
                <a href="##">FAQs</a>
              </div>
            </div>
            <div>
              <div className="section">
                <h1>Sections</h1>
                <a href="##">Careers</a>
                <a href="##">Blog</a>
              </div>
            </div>
            <div>
              <div className="followUp">
                <h1>Follow Us</h1>
                <div>
                  <img
                    className="onlyP"
                    src="https://i.ibb.co/hVMHCdb/facebook-logo.png"
                    alt="facebook"
                  />
                  <img
                    className="onlyP"
                    src="https://i.ibb.co/qB94fBN/twitter-logo.png"
                    alt="twitter"
                  />
                  <img
                    className="onlyP"
                    src="https://i.ibb.co/vcfLNTv/linkedin.png"
                    alt="linkdin"
                  />
                  <img
                    className=""
                    src="https://i.ibb.co/v3jbx7P/youtube-logo.png"
                    alt="youtube"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="inputBox">
                <h1>Get Cinnamon in your inbox</h1>
                <input
                  className="inputField"
                  type="text"
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div className="textDetails">
              <p>
                By Checking this box, I consent to the processing of my Personal
                Data by Cinnamon for the purpose and within the Conditions set
                out in this form and the Cinnamon Data Protection Policy.*
              </p>
            </div>
          </div>
        </div>
        <div className="design2"></div>
      </div>
    </div>
  );
}

export default Footer;
