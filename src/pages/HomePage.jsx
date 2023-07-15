import TopBar from "../components/TopBar/TopBar";
import SideBar from "../components/SideBar/SideBar";
import MiddleContent from "../components/MiddleContent/MiddleContent";
import ProfileSectionSideBar from "../components/SideBar/ProfileSectionSideBar";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <TopBar />
      <div className="fuzy_homepage">
        <div className="fuzy_flex_items_sidebar">
          <SideBar />
        </div>
        <div className="fuzy_flex_items_middlebar">
          <MiddleContent />
        </div>
        <div className="fuzy_profile_section_sidebar">
          <ProfileSectionSideBar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
