import { useSelector } from "react-redux";
import "./TopBar.css";
import { useNavigate } from "react-router-dom";
const TopBar = () => {
  const navigate = useNavigate();
  const { fuzyLoginData } = useSelector((state) => state.fuzyLoginData);
  const { id, fname, lname, emailorNumber } = fuzyLoginData;
  const handleOnClickProfile = (event) => {
    event.preventDefault();
    navigate(`/profile/${id}`);
  };
  return (
    <div className="fuzy_top_bar_wrapper">
      <div className="fuzy_top_bar_inner_wrapper">
        <div>
          <h1>FuzzyBox</h1>
        </div>
        <div>Stories</div>
        <div className="fuzy_profile">
          <h5>{emailorNumber}</h5>
          <h4 onClick={handleOnClickProfile}>{fname + " " + lname}</h4>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
