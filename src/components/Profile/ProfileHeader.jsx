import Avatar from "@mui/material/Avatar";
import "./ProfileHeader.css";
import { useEffect, useRef, useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import { fuzyModalOpenActions } from "../../actions/FuzyModalActions";
import { fuzyModalCloseActions } from "../../actions/FuzyModalActions";
import { useDispatch, useSelector } from "react-redux";
import FuzyModal from "../../common/FuzyModal";
import { FuzyButton } from "../../common/FuzyButton";
import { fuzylogoutActions } from "../../actions/FuzyLoginActions";
import { useNavigate } from "react-router-dom";

const ProfileHeader = (props) => {
  const { loading } = props;
  const [lengthPosts, setLengthPosts] = useState(0);
  const [users, setUsers] = useState({});
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.fuzyModelData);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      const {
        postsData: [
          {
            fuzyUser: { fname, lname, emailorNumber },
          },
        ],
      } = props;

      const lengthPosts = props.postsData.length;
      const fuzyFname = fname;
      const fuzyLname = lname;
      const fuzyemailOrNumber = emailorNumber;

      setUsers({ fuzyFname, fuzyLname, fuzyemailOrNumber });
      setLengthPosts(lengthPosts);
    }
  }, [props, loading]);

  const onHandleSettingsClick = (event) => {
    event.preventDefault();
    dispatch(fuzyModalOpenActions(true));
  };

  const onHandleCloseModal = (event) => {
    event.preventDefault();
    dispatch(fuzyModalCloseActions(false));
  };

  const onHandleBtnClick = (event) => {
    event.preventDefault();
    dispatch(fuzylogoutActions());
    navigate("/accounts/login");
  };

  return (
    <div className="fuzy_header_outer_wrapper">
      <FuzyModal
        open={open}
        handleOnCloseModal={onHandleCloseModal}
        ariaLabelBy="Logout"
        ariaLableDescribedBy="Sessions expired"
      >
        <>
          <FuzyButton
            variant="outlined"
            text="LogOut"
            onClick={onHandleBtnClick}
          />
        </>
      </FuzyModal>
      <div className="fuzy_right_header_section">
        <Avatar sx={{ bgcolor: " #3c6255" }}>A</Avatar>
      </div>
      <div className="fuzy_left_header_section">
        <div className="fuzy_left_header_top_section">
          {users.fuzyemailOrNumber}
        </div>
        <div className="fuzy_left_header_middle_section">
          <ul>
            <li>{lengthPosts}Posts</li>
            <li>Followers</li>
            <li>Following</li>
            <li>
              <SettingsIcon
                className="settingsIcon"
                onClick={onHandleSettingsClick}
              />
            </li>
          </ul>
        </div>
        <div className="fuzy_left_header_bottom_section">
          <ul>
            <li>{users.fuzyFname + " " + users.fuzyLname}</li>
            <li>{users.fuzyemailOrNumber}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { ProfileHeader };
