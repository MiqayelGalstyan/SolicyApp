import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useContext } from "react";
import { MainContext } from "../../context/main";
import { generateUniqueNumber } from "../../helpers/numberGenerator";

const useStyles = makeStyles(() => ({
  root: {
    position: "fixed",
    backgroundColor: "white",
    boxShadow: "1px 1px 7px 0px #888888",
    width: "100%",
    height: 70,
    left: 0,
    top: 0,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "0 20px",
    zIndex: 99,
  },
  addBtn: {
    marginRight: "10px!important",
  },
}));

const Header = () => {
  const styles = useStyles();
  const { list, setList } = useContext(MainContext);

  const handleAddCard = () => {
    let index =
      list.length > 0 ? list[list.length - 1].uniqueNumber + list.length : 1;
    const uniqueNumber = generateUniqueNumber(index);

    setList([...list, { uniqueNumber }]);
  };

  const handleSort = () => {
    const updatedData = list
      .slice()
      .sort((a, b) => a.uniqueNumber - b.uniqueNumber);
    setList(updatedData);
  };

  return (
    <Box className={styles.root}>
      <Button
        variant="contained"
        className={styles.addBtn}
        onClick={handleAddCard}
      >
        Add Card
      </Button>
      <Button variant="outlined" onClick={handleSort}>
        Sort Cards
      </Button>
    </Box>
  );
};

export default Header;
