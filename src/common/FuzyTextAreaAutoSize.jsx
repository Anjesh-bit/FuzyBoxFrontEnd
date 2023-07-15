import { TextareaAutosize } from "@mui/material";

const FuzyTextAreaAutoSize = (props) => {
  const {
    ariaLabel,
    minRows,
    placeHolder,
    textAreaStyle,
    name,
    value,
    onChange,
  } = props;

  return (
    <>
      <TextareaAutosize
        aria-label={ariaLabel}
        minRows={minRows}
        placeholder={placeHolder}
        style={textAreaStyle}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export { FuzyTextAreaAutoSize };
