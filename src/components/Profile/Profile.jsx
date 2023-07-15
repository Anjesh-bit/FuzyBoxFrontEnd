import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fuzyPostFindPostsOfOneUser } from "../../actions/FuzyPostsActions";
import { ProfileHeader } from "./ProfileHeader";
import { ProfileAllPictureSection } from "./ProfileAllPictureSect";
const Profile = () => {
  const dispatch = useDispatch();
  const { fuzyPostsOfOneUserData, loading } = useSelector(
    (state) => state.fuzyPostsOfOneUserData
  );
  const { id } = useParams();
  
  //on mount displays profile
  useEffect(() => {
    dispatch(fuzyPostFindPostsOfOneUser(id));
  }, [id, dispatch]);

  return (
    <div className="fuzy_profile_outer_wrapper">
      <div className="fuzy_profile_inner_wrapper">
        <ProfileHeader postsData={fuzyPostsOfOneUserData} loading={loading} />
        <ProfileAllPictureSection
          postsData={fuzyPostsOfOneUserData}
          loading={loading}
        />
      </div>
    </div>
  );
};
export default Profile;
