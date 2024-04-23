import React from "react";
import "./Landing.css";
import BannerBackground from "../Assets/istockphoto-182862514-612x612.jpg";
export const Landing = () => {
  return (
    <>
     <div className="home-container">
     
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Welcome to INotebook
          </h1>
          <p className="primary-text">
            Write your Daily Notes here
          </p>
          <button className="secondary-button">
            Signup now {" "}
          </button>
        </div>
        <div className="home-image-section">
          
        </div>
      </div>
    </div>
    </>
  );
};
