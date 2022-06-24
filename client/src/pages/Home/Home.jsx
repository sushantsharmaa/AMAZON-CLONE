import "./home.css";
import { rowOne, rowTwo, rowFour } from "./data";
import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import Carousel from "../../components/Carousel/Carousel";

const Home = () => {
  const { phones } = useSelector((state) => state.productPhoneData);
  const { clothes } = useSelector((state) => state.productClothData);
  return (
    <div className="home">
      <Carousel />
      <div className="products-category">
        <div className="row-one">
          <div className="row-one-left">
            {rowOne.map((item) => {
              return <Card key={item.id} {...item} />;
            })}
            <div className="row-one-right">
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
        <div className="row-two">
          <div className="row-two-left">
            <img
              src="https://otakukart.com/wp-content/uploads/2021/05/Dom-Season-1-1.jpg"
              alt="amazon-prime"
            />
          </div>
          <div className="row-two-right">
            {rowTwo.map((item) => {
              return <Card key={item.id} {...item} />;
            })}
          </div>
        </div>
        <div className="row-three">
          <h3>Related to items you've viewed</h3>
          <div className="row-three-img">
            {phones.map((item) => {
              return <img key={item.id} src={item.url} alt={item.title} />;
            })}
          </div>
        </div>
        <div className="row-four">
          {rowFour.map((item) => {
            return <Card key={item.id} {...item} />;
          })}
        </div>
        <div className="row-five">
          <h3>Related to items you've viewed</h3>
          <div className="row-five-img">
            {clothes.map((item) => {
              return <img key={item._id} src={item.img} alt={item.name} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
