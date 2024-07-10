import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo.png" alt="" width={120} />
          <span className="secondaryText">
            Наше видение состоит в том, чтобы сделать всех людей <br /> 
            лучшим местом для них.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Информация</span>
          <span className="secondaryText">Samarkand</span>
          
          <div className="flexCenter f-menu">
            <span>разработчик
            </span>
            <span>Свойство</span>
            <span>Услуги</span>
            <span>Продукт</span>
            <span>О Нас</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
