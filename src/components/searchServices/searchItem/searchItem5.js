import "./searchItem5.css";
import { Link } from "react-router-dom";

const SearchItem5 = () => {
  return (
    <div className="searchItem">
      <img
        src="https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/392952960_290757493725913_641149604398790414_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGhYEJdEuEQBPwTHI6_-WR14cQxgsPuVw3hxDGCw-5XDQLqlrsDtZT2WOvz_oX3M0w8azx0njTK5DDuxVKYB1Qu&_nc_ohc=vD9dZ1GM4RwQ7kNvgHdW8JJ&_nc_ht=scontent.fhan5-10.fna&oh=00_AYAJlExLRfHcSZ0uWhmk3Y-K7nEBadQJC9rDhLa0EXUzKA&oe=666D16B8"
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
          <Link to='/hotel5' className="siCheckButton">See availability</Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem5;