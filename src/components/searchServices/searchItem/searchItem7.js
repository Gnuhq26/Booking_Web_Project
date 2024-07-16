import "./searchItem7.css";
import { Link } from "react-router-dom";

const SearchItem7 = () => {
  return (
    <div className="searchItem">
      <img
        src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/415057117_882742190518964_7015545137906607235_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHT8vJPqNA0RJLnCKcChZzSelNm_1RZw2t6U2b_VFnDa59IpcmJ1Q0kDedfxPJP5_cgQnwkF5sxogip-2esR4II&_nc_ohc=IMOGEd9y_XMQ7kNvgFg-R-D&_nc_ht=scontent.fhan5-11.fna&oh=00_AYDqHGoax49zByFkgh9rccbp_EBcfNxMTt9s_LS1iGr76g&oe=666D1A26"
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
          <Link to='/hotel7' className="siCheckButton">See availability</Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem7;