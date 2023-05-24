import "./ModalSideBar.css";
import ListViewSideBar from "./ListViewSideBar";
const ModalSideBar = () => {
  return (
    <div className="fuzy_modal_sidebar_main_wrapper">
      <div className="fuzy_modal_sidebar_inner_wrapper">
        <ListViewSideBar />
      </div>
    </div>
  );
};
export default ModalSideBar;
