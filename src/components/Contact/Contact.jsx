import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';

const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">связывайтесь с нами</span>
          <span className="primaryText"> С нами Легко связаться</span>
          <span className="secondaryText">
            Мы всегда готовы помочь, чтобы предоставить вам лучшие услуги.
            Поверьте, что хорошее место для жизни может сделать вашу жизнь лучше{" "}
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Вызов</span>
                    <span className="secondaryText">
                      <a href="tel:915433199">91 543 31 99</a>
                    </span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="tel:915433199">Позвони сейчас</a>
                </div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Чат</span>
                    <span className="secondaryText">
                      <a href="tel:915433199">91 543 31 99</a>
                    </span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="tel:915433199">Теперь говорите</a>
                </div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Видеозвонок</span>
                    <span className="secondaryText">
                      <a href="tel:915433199">91 543 31 99</a>
                    </span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="tel:915433199">Видео-звонок сейчас</a>
                </div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Сообщение</span>
                    <span className="secondaryText">
                      <a href="tel:902130401">90 213 04 01</a>
                    </span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="tel:902130401">Сообщение сейчас</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;