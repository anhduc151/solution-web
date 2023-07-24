import Image from "next/image";
import React, { useState } from "react";
import logofooter from "../public/images/logofooter.png";

import emailjs from 'emailjs-com';
import validator from 'validator';
import { notification } from 'antd';

export interface FooterProps { }

export default function Footer(props: FooterProps) {

  const [email, setEmail] = useState("")
  const openNotification = (message: string) => {
    notification.open({
      message: message,
      style: {
        fontSize: '18px',
        top: '50px',
      },
    });
  };

  const handleSendEmailer = (e: any) => {
    e.preventDefault();
    if (!validator.isEmail(email)) {
      openNotification('Email invalidate!!')
    } else {
      // Gửi email bằng emailjs-com
      emailjs.send('service_e893xdc', 'template_973yes2', {
        to_email: email,
      }, 'gvI3GwRJ28mvTVd-B')
        .then((response) => {
          openNotification('Successfully! Please check your email!')
        })
        .catch((error) => {
          openNotification('Error sending email!')
        });
      setEmail('')
    }
  }



  return (
    <div>
      <div className="footer">
        <div className="footer_child1">
          <div className="footer_child1_logo">
            <Image src={logofooter} alt="" className="footer_child1_imgs" />
          </div>

          <div className="footer_callus">
            <i className="bx bxs-phone"></i>
            <div className="footer_callus_infor">
              <h2 className="footer_callus_infor_h2">Call Us</h2>
              <p className="footer_callus_infor_p">+01 569 896 654</p>
            </div>
          </div>
          <div className="footer_mailus">
            <i className="bx bxl-gmail"></i>
            <div className="footer_callus_infor">
              <h2 className="footer_callus_infor_h2">Mail Us</h2>
              <p className="footer_callus_infor_p">Info@Example.com</p>
            </div>
          </div>
          <div className="footer_location">
            <i className="bx bx-map"></i>
            <div className="footer_callus_infor">
              <h2 className="footer_callus_infor_h2">Location</h2>
              <p className="footer_callus_infor_p">Amsterdam, 109-74</p>
            </div>
          </div>
        </div>




        <div className="footer_child2">
          <div className="footer_child2_container">

            <div className="footer_child2_box1">
              <h4 className="footer_child2_box1_h4">
                <i className="bx bxs-rectangle"></i> Quick Link
              </h4>

              <p className="footer_child2_box1_p">Home</p>
              <p className="footer_child2_box1_p">About Us</p>
              <p className="footer_child2_box1_p">Blog</p>
              <p className="footer_child2_box1_p">Services</p>
              <p className="footer_child2_box1_p">Contact</p>
            </div>

            <div className="footer_child2_box2">
              <h4 className="footer_child2_box1_h4">
                <i className="bx bxs-rectangle"></i> Our Services
              </h4>

              <p className="footer_child2_box1_p">Financial Consulting</p>
              <p className="footer_child2_box1_p">Business Management</p>
              <p className="footer_child2_box1_p">Consultant & Programs</p>
              <p className="footer_child2_box1_p">Company Management</p>
              <p className="footer_child2_box1_p">Insurance & Finance</p>
            </div>

            <div className="footer_child2_box3">
              <h4 className="footer_child2_box1_h4">
                <i className="bx bxs-rectangle"></i> Uitility Page
              </h4>

              <p className="footer_child2_box1_p">Style Guide</p>
              <p className="footer_child2_box1_p">Licensess</p>
              <p className="footer_child2_box1_p">Instructions</p>
              <p className="footer_child2_box1_p">Changelog</p>
              <p className="footer_child2_box1_p">404 Page</p>
            </div>

          </div>


          <div className="footer_child2_box4">
            <div className="footer_child2_box4_form">
              <h4 className="footer_form_subscribe">Subscribe</h4>
              <h4 className="footer_form_joinour">
                Join Our Mailing List & to get our news.
              </h4>
              <div className="footer_child2_box4_email_subscribe">
                <input
                  value={email}
                  type="text"
                  placeholder="your email address"
                  className="footer_child2_boxx4_form_input"
                  onChange={(e) => { setEmail(e.target.value) }}
                />
                <button
                  onClick={(e) => handleSendEmailer(e)}
                  className="footer_child2_boxx4_form_buttons">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>


        <div className="footer_child3">
          <div className="footer_child3_left">
            <p className="footer_child3_left_p">
              Copyright © <span className="footer_span1">WhiteCollar</span>
              <span className="hide_768px"> | Designed by <span className="footer_span2">VictorFlow</span> Templates - Powered by Webflow</span>
            </p>
          </div>

          <div className="footer_child3_right">
            <p className="footer_child3_right_p">Follow :</p>
            <i className="icon_footer bx bxl-instagram"></i>
            <i className="icon_footer bx bxl-facebook-circle"></i>
            <i className="icon_footer bx bxl-twitter"></i>
            <i className="icon_footer bx bxl-pinterest"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
