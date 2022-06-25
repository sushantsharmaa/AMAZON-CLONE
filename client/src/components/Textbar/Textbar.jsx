import "./textbar.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
const Textbar = () => {
  return (
    <div className="new_nav">
      <div className="nav_data">
        <MenuIcon className="menu-icon" />
        <div className="left_data">
          <p>All</p>
          <p>Fresh</p>
          <Link to="/products" className="phones">
            <p>Mobiles</p>
          </Link>
          <p>Fashion</p>
          <p>Customer Service</p>
          <p>Electronics</p>
          <p>Prime</p>
          <p>Today's Deals</p>
          <p>Amazon Pay</p>
        </div>
        <div className="right_data">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2021/img/Mobile_Traffic_/XCM_Manual_1321458_1651511_IN_3781247_400x39_en_IN._CB655944656_.jpg"
            alt="navdata"
          />
        </div>
      </div>
    </div>
  );
};

export default Textbar;
