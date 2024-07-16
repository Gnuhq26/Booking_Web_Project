import "./searchItem4.css";
import { Link } from "react-router-dom";

const SearchItem4 = () => {
  return (
    <div className="searchItem">
      <img
        src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/393132314_290757663725896_5828486831530859941_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEjDz2VYjOoo99T0mqkizZ6dRdLGkvjPut1F0saS-M-69jAeU86V3uGw5W0W6ZgJRXweGprQHl0yFKJfvP7EZ6b&_nc_ohc=-nSU5D5A3mQQ7kNvgFKzGGj&_nc_ht=scontent.fhan5-9.fna&oh=00_AYDJ5Qr0znJRdePb7wkJ83mHpKAuUr7sr6eT6xZQC5oq0w&oe=666D10EA"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to='/hotel4' className="siCheckButton">See availability</Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem4;