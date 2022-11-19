import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "40%",
  },
}));

const Instructions = () => {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <Typography>Press the "Add Card" to add new Card. </Typography>
      <Typography>
        Press the "Sort Cards" button to sort the cards by the increase.{" "}
      </Typography>
      <Typography>
        Press the X icon on the card top right to delete them.{" "}
      </Typography>
    </Box>
  );
};

export default Instructions;
