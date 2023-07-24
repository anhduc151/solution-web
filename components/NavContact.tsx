import React from "react";

export interface NavContactProps {}

export default function NavContact(props: NavContactProps) {
  return (
    <div className="nav_contact">
      <div className="nav_contact_left">
        <p className="nav_contact_left_p">
          <i className="bx bxs-map"></i> 24 Olive Street, Prairie, NY 53590
        </p>
        <p className="nav_contact_left_p">
          <i className="bx bx-envelope"></i> whitecollar@gmail.com
        </p>
      </div>

      <div className="nav_contact_right">
        <p className="nav_contact_right_p">
          <i className="bx bx-time"></i> Mon - Fri: 8:00 am - 5:00 pm
        </p>
        <div className="nav_contact_right_p_icons">
          <i className="bx bxl-instagram"></i>
          <i className="bx bxl-facebook-circle"></i>
          <i className="bx bxl-twitter"></i>
          <i className="bx bxl-pinterest"></i>
        </div>
      </div>
    </div>
  );
}
