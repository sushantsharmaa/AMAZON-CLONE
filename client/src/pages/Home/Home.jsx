import "./home.css";
import { rowOne } from "./data";
import Card from "../../components/Card/Card";
import Carousel from "../../components/Carousel/Carousel";

const Home = () => {
  return (
    <div className="home">
      <Carousel />
      <div className="product-field">
        <div className="home__row">
          {rowOne.map((item) => {
            return <Card key={item.id} {...item} />;
          })}
          <div className="last_card">
            <div id="last_card_one">
              <h5>Shop on the Amazon App</h5>
              <p>
                Fast, convenient and secure | Over 17 crore products in your
                pocket
              </p>
              <span>Download the Amazon App</span>
            </div>
            <div id="last_card_two">
              <img
                src="https://m.media-amazon.com/images/I/71zorsANP+L._SL1500_.jpg"
                alt="Havells"
              />
              <h6>Havells HC4085 - 1000 W Air Care Styler</h6>
              <p>₹2,149.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
