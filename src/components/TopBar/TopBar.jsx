import "./TopBar.css";
const TopBar = () => {
  return (
    <div className="fuzy_top_bar_wrapper">
      <div className="fuzy_top_bar_inner_wrapper">
        <div>
          <h1>FuzzyBox</h1>
        </div>
        <div>Stories</div>
        <div className="fuzy_profile">
          <h4>Profile</h4>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
