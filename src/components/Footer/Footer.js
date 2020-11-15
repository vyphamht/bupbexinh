import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <h3>Bup Be Xinh</h3>
        <div className="address">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            style={{ fontSize: "1.2rem" }}
          />
          <h5>Lầu 1, Trung Tâm Văn Hoá Thể Thao Quận Tân Bình</h5>
          <h6>18 Xuân Hồng, Phường 4, Quận Tân Bình</h6>
        </div>
        <div className="phone">
          <FontAwesomeIcon icon={faPhone} style={{ fontSize: "1.2rem" }} />
          <h5>+84 90 363 09 26</h5>
        </div>
        <div className="email">
          <a
            href="mailto:clbbupbexinh2000@yahoo.com.vn"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "white" }}
          >
            <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "1.2rem" }} />
            <h5>clbbupbexinh2000@yahoo.com.vn</h5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
