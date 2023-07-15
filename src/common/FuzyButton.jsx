import { Button } from "@mui/material";

const FuzyButton = (props) => {
  const { variant, text, onClick,sx } = props;
  return (
    <Button variant={variant} onClick={onClick} sx={sx}>
      {text}
    </Button>
  );
};
export { FuzyButton };
