import React from "react";
import "../../no.css";

const ProfileImage = ({ src }) => {
  return (
    <div className="portfolio-container">
      <div className="wavy-border">
        <img
          src={src} 
          alt="Portfolio"
          className="portfolio-image"
        />
      </div>
    </div>
  );
};

export default ProfileImage;
