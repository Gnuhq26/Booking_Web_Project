import "./searchItem2.css";
import { Link } from "react-router-dom";

const SearchItem2 = () => {
  return (
    <div className="searchItem">
      <img
        src="https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/434641422_122170118492025952_4427780503947867142_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEakzInyA6XJG8Oj6v7dCW97osGmaqRfvDuiwaZqpF-8NbQsTQb1mpaY9h3XSsXFcn4SeMptL0s0VSnahl8G3e2&_nc_ohc=crv-NcmuY94Q7kNvgEVkrVq&_nc_ht=scontent.fhan5-8.fna&oh=00_AYDVa8wVybxOM9wXT-V2DgwIZeaf-e7P_kEsXN_70Bte0g&oe=666CE5E3"
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
          <Link to='/hotel2' className="siCheckButton">See availability</Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem2;