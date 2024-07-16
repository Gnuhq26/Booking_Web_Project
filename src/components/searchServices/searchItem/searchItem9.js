import "./searchItem9.css";
import { Link } from "react-router-dom";

const SearchItem9 = () => {
  return (
    <div className="searchItem">
      <img
        src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/434646582_122170118858025952_7747680265581195470_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEJ69EHfn8slRBzBtKoe10CiTNOjG6d-KKJM06Mbp34ogKGVb6J3FvmzWvRTqQF-nB1B-q27jRFVLkiOanuhY6y&_nc_ohc=df0dFE4NLtwQ7kNvgG0Pvjt&_nc_ht=scontent.fhan5-11.fna&oh=00_AYDtGxUD8UKWH6lxIjI9TNSCuzGmDulKgMl7skUgvSHYsA&oe=666D2179"
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
          <Link to='/hotel9' className="siCheckButton">See availability</Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem9;