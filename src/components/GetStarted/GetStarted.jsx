import './GetStarted.css'
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Начните с Fortuna</span>
          <span className="secondaryText">
            Подпишитесь и найдите супер привлекательные ценовые дома от нас.
            <br />
Найдите свою резиденцию быстро          </span>
          <button className="button">
            <a href="https://t.me/fortuna_agentstvo">начать</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;