import Avatar from "@mui/material/Avatar";
import "./ProfileHeader.css";
import { useEffect, useRef, useState } from "react";

const ProfileHeader = (props) => {
  const { loading } = props;
  const [lengthPosts, setLengthPosts] = useState(0);
  const [users, setUsers] = useState({});

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
  console.log(users);
  return (
    <div className="fuzy_header_outer_wrapper">
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
          </ul>
        </div>
        <div className="fuzy_left_header_bottom_section">
          <ul>
            <li>{`${users.fuzyFname + " " + users.fuzyLname}`}</li>
            <li>{users.fuzyemailOrNumber}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export { ProfileHeader };
