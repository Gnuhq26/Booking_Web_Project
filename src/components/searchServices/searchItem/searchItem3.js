import "./searchItem3.css";
import { Link } from "react-router-dom";

const SearchItem3 = () => {
  return (
    <div className="searchItem">
      <img
        src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/393155703_290757737059222_7201629049069716428_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGsvDcoyEgI1VuNUw4exgXqYUKYhVTrw1lhQpiFVOvDWZUxZfP3A6nHx5IZ3ZrnBGhbsLE_K3j5caKoDYINvuSi&_nc_ohc=4I6C15v11mMQ7kNvgFeci7S&_nc_ht=scontent.fhan5-11.fna&oh=00_AYBaUmm6ynC-CGLfC61ilEE4eXfZtsKrnWKU-vkzDi8OrA&oe=666D10C6"
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
          <Link to='/hotel3' className="siCheckButton">See availability</Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem3;