import "./Work.css";
import coinbased from "../../assets/images/coin-based.png";
import fanfic from "../../assets/images/fan-fix.png";
import budget from "../../assets/images/budget_tr.png";
import passgen from "../../assets/images/mypassgen.png";
import portfolio from "../../assets/images/port_web.png";
import ecomm from "../../assets/images/ecomm.png";

export default function Work() {
  return (
    <div id="work">
      <section className="work-section">
        <h1 className="port-h1">Portfolio</h1>
        <div className="cards">
          <a
            href="https://worldunfurled.github.io/project-1_RDB/"
            target="_blank"
          >
            <div className="card card1">
              <div className="card-container">
                <img
                  src={coinbased}
                  alt="Project 1: Crypto"
                  className="card-image"
                />
              </div>
              <div className="details">
                <h3>Coinbased</h3>
                <p>Html/Bootstrap/JS</p>
              </div>
            </div>
          </a>
          <a
            href="https://mysterious-lowlands-06062.herokuapp.com/"
            target="_blank"
          >
            <div className="card card2">
              <div className="card-container">
                <img src={fanfic} alt="" className="card-image" />
              </div>
              <div className="details">
                <h3>OnlyFanFics</h3>
                <p>Handlebars/Node/Express.js</p>
              </div>
            </div>
          </a>
          <a href="https://budget-tracker-bg.herokuapp.com/" target="_blank">
            <div className="card card3">
              <div className="card-container">
                <img src={budget} alt="" className="card-image" />
              </div>
              <div className="details">
                <h3>Budget Tracker</h3>
                <p>Node/Express.js/MongoDB</p>
              </div>
            </div>
          </a>
          <a
            href="https://worldunfurled.github.io/my-password-generator_BG"
            target="_blank"
          >
            <div className="card card4">
              <div className="card-container">
                <img src={passgen} alt="" className="card-image" />
              </div>
              <div className="details">
                <h3>Password Generator</h3>
                <p>HTML/CSS/JS</p>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/WorldUnfurled/portfolio-website_BG"
            target="_blank"
          >
            <div className="card card5">
              <div className="card-container">
                <img src={portfolio} alt="" className="card-image" />
              </div>
              <div className="details">
                <h3>First Portfolio</h3>
                <p>HTML/CSS</p>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/WorldUnfurled/ecommerce-backend_BG"
            target="_blank"
          >
            <div className="card card6">
              <div className="card-container">
                <img src={ecomm} alt="" className="card-image" />
              </div>
              <div className="details">
                <h3>E-Commerce Backend</h3>
                <p>Node/APIs</p>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
