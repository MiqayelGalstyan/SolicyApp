import { Box, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { MainContext } from "../../context/main";
import ClearIcon from "@mui/icons-material/Clear";
import { makeStyles } from "@mui/styles";
import Instructions from "../Instructions";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 120,
    display: "flex",
    justifyContent: "space-between",
    padding: "0 30px",
  },
  container: {
    height: "calc(100vh - 150px)",
    overflowY: "scroll",
    paddingTop: 10,
    width: "60%",
  },
  item: {
    position: "relative",
    backgroundColor: "white",
    boxShadow: "1px 1px 7px 0px #888888",
    height: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  removeBtn: {
    position: "absolute",
    right: 0,
    top: 0,
    cursor: "pointer",
  },
}));

const Main = () => {
  const { list, setList } = useContext(MainContext);

  const styles = useStyles();

  const handleRemove = (uniqueNumber) => {
    const updatedData = list.filter(
      (item) => item.uniqueNumber !== uniqueNumber
    );
    setList(updatedData);
  };

  return (
    <Box className={styles.root}>
      <Grid container spacing={2} className={styles.container}>
        {list.length > 0 ? (
          list.map((item) => (
            <Grid
              xs={5}
              item
              key={item.uniqueNumber}
              className={styles.item}
              mr={2}
              ml={2}
              mb={3}
            >
              <Box
                onClick={() => handleRemove(item.uniqueNumber)}
                className={styles.removeBtn}
              >
                <ClearIcon />
              </Box>
              <Typography>{item.uniqueNumber}</Typography>
            </Grid>
          ))
        ) : (
          <Typography variant="h4">No Data,please add card</Typography>
        )}
      </Grid>
      <Instructions />
    </Box>
  );
};

export default Main;
