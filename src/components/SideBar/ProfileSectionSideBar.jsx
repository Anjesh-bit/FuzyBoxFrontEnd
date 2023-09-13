import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fuzyUserFindAll } from "../../actions/FuzyUsersActions";
import "./ProfileSectionSideBar.css";
const ProfileSectionSideBar = () => {
  const dispatch = useDispatch();
  const { loading, fuzyUsersAllData } = useSelector(
    (users) => users.fuzyUserAllData
  );
  console.log(loading);
  console.log(fuzyUsersAllData);
  useEffect(() => {
    dispatch(fuzyUserFindAll());
  }, [dispatch]);

  return (
    <div className="suggestions_main_wrapper">
      {loading &&
        fuzyUsersAllData.map((users, index) => (
          <div className="suggestions_inner_wrapper" key={index}>
            {users.fname + " " + users.lname}
          </div>
        ))}
    </div>
  );
};

export default ProfileSectionSideBar;
