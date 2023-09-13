import { useState, useEffect } from "react";
import FuzyTextFields from "../../common/FuzyTextFields";
import { fuzyLoginActions } from "../../actions/FuzyLoginActions";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCookies } from "../../utils/Cookies";

const Login = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { fuzyLoginData } = useSelector((state) => state.fuzyLoginData);

  useEffect(() => {
    if (fuzyLoginData && getCookies("token")) {
      navigate("/");
    }
  }, [navigate, fuzyLoginData]);

  const onHandleLoginChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setValue((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };
  const onHandleLoginClick = (event) => {
    event.preventDefault();
    dispatch(fuzyLoginActions(value.fuzy_email, value.fuzy_password));
  };

  return (
    <div className="fuzy_login_outer_wrapper">
      <div className="fuzy_login_inner_wrapper">
        <div className="fuzy_register_header">
          <h1>FuzzyBox</h1>
          <h3>Sign in to view pictures and videos from friends</h3>
        </div>
        <form>
          <FuzyTextFields
            name="fuzy_email"
            value={value.fuzy_email || ""}
            type="text"
            placeholder="Email or Phone"
            onChange={onHandleLoginChange}
          />
          <FuzyTextFields
            name="fuzy_password"
            value={value.fuzy_password || ""}
            type="password"
            placeholder="password"
            onChange={onHandleLoginChange}
          />
          <FuzyTextFields
            type="submit"
            value="Login"
            className="fuzy_sign_in_btn"
            onClick={onHandleLoginClick}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
