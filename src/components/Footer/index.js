import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "white",
    boxShadow: "1px 1px 7px 0px #888888",
    width: "100%",
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 20px",
    zIndex: 9,
  },
}));

const Footer = () => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      <Typography>Footer</Typography>
    </Box>
  );
};

export default Footer;
