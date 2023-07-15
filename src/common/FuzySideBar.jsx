import "./FuzySideBar.css";
import ListViewSideBar from "./FuzyListViewSideBar";

const FuzySideBar = () => {
  return (
    <div className="fuzy_modal_sidebar_main_wrapper">
      <div className="fuzy_modal_sidebar_inner_wrapper">
        <ListViewSideBar />
      </div>
    </div>
  );
};

export default FuzySideBar;
