import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const FuzyDatePicker = (props) => {
  const {
    AdapterDayjs,
    dateValue,
    onHandleDateChange,
    onHandleRenderInputField,
    openTo,
    className,
    label,
  } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        openTo={openTo}
        className={className}
        label={label}
        value={dateValue}
        onChange={onHandleDateChange}
        renderInput={onHandleRenderInputField}
      ></DatePicker>
    </LocalizationProvider>
  );
};
export default FuzyDatePicker;
