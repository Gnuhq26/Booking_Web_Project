import "./searchItem6.css";
import { Link } from "react-router-dom";

const SearchItem6 = () => {
  return (
    <div className="searchItem">
      <img
        src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/356826495_231190326349297_430676604510562779_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGXtuB83fas_Eiw7-QUB1RUBvJjbRuW2gAG8mNtG5baAGAWscOY7qRw7RGWTSGgzjyDu5BXR9mEqJxKmJnXaYE-&_nc_ohc=NsSYuYuSDwoQ7kNvgHGFNDM&_nc_ht=scontent.fhan5-11.fna&oh=00_AYAaeGjljrRUtFYde3DIduU8XccA9NugKiMxP-3xGWA-Tw&oe=666D27B5"
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
          <Link to='/hotel6' className="siCheckButton">See availability</Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem6;