import Box from "@mui/material/Box";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";

const FuzyCircularLoader = (props) => {
  return (
    <Box sx={{ position: "relative" }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
        }}
        size={40}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: (theme) =>
            theme.palette.mode === "light" ? "#3c6255;" : "#308fe8",
          animationDuration: "550ms",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={40}
        thickness={4}
        {...props}
      />
    </Box>
  );
};

const FuzyLoader = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <FuzyCircularLoader />
    </Box>
  );
};

export default FuzyLoader;
