import { useState } from "react";
import FuzyTextFields from "../../common/FuzyTextFields";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import FuzyDatePicker from "../../common/FuzyDatePicker";
import { TextField } from "@mui/material";
import { fuzyRegisterActions } from "../../actions/FuzyRegiterActions";
import { useDispatch } from "react-redux";
import "./Register.css";

const Register = () => {
  const [value, setValue] = useState("");
  const [dateValue, setDateValue] = useState(null);
  const dispatch = useDispatch();

  const fuzyHandleOnchange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setValue((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const onHandleDateChange = (newDateValue) => {
    setDateValue(newDateValue);
  };
  const onHandleRenderInputField = (params) => {
    return <TextField {...params} />;
  };
  
  const onHandleRegisterClick = (event) => {
    event.preventDefault();
    dispatch(
      fuzyRegisterActions(
        value.fuzzy_firstname,
        value.fuzzy_lastname,
        value.fuzzy_email,
        value.fuzzy_password,
        dateValue
      )
    );
  };

  return (
    <div className="fuzy_register_outer_wrapper">
      <div className="fuzy_register_inner_wrapper">
        <div className="fuzy_register_header">
          <h1>FuzzyBox</h1>
          <h3>Sign up to view pictures and videos from friends</h3>
        </div>

        <form>
          <FuzyTextFields
            type="text"
            placeholder="First Name"
            name="fuzzy_firstname"
            value={value.fuzzy_firstname || ""}
            onChange={fuzyHandleOnchange}
          />
          <FuzyTextFields
            type="text"
            placeholder="Last Name"
            name="fuzzy_lastname"
            value={value.fuzzy_lastname || ""}
            onChange={fuzyHandleOnchange}
          />
          <FuzyTextFields
            type="text"
            f
            placeholder="Email or Number"
            name="fuzzy_email"
            value={value.fuzzy_email || ""}
            onChange={fuzyHandleOnchange}
          />
          <FuzyTextFields
            type="password"
            placeholder="Password"
            name="fuzzy_password"
            value={value.fuzzy_password || ""}
            onChange={fuzyHandleOnchange}
          />
          <FuzyDatePicker
            AdapterDayjs={AdapterDayjs}
            className="fuzy_date_picker"
            openTo="year"
            label="Pick the dob"
            dateValue={dateValue}
            onHandleDateChange={onHandleDateChange}
            onHandleRenderInputField={onHandleRenderInputField}
          />
          {/* <FuzyLoader /> */}
          <FuzyTextFields
            className="fuzy_sign_up_btn"
            type="button"
            value="Sign Up"
            onClick={onHandleRegisterClick}
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
