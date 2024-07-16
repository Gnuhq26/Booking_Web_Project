import "./searchItem1.css";
import {   Link   } from "react-router-dom";

const SearchItem1 = () => {
  return (

    <div className="searchItem">
      <img
        src="https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/434740884_122170118528025952_8945151055865792911_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeENTN4KrNw3bmjxZ6-0qTBly-htMFaLYtLL6G0wVoti0osCjte7egRqhVlKCB116CMq8db5yX-Mzq9L9LcRWhtZ&_nc_ohc=kVFiJVbrQJwQ7kNvgERq4U7&_nc_ht=scontent.fhan5-10.fna&oh=00_AYCsMpCEihaNQMcYV9F-ZGK-0-OAjPCZeb2HuQ_rMFVSxA&oe=666D00B5"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Zico Apartments</h1>
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
          <Link to='/hotel1' className="siCheckButton">See availability</Link>
        </div>
      </div>
    </div>

  );
};

export default SearchItem1;