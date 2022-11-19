import { useState } from "react";
import { MainContext } from "../context/main";

const MainLayout = ({ children }) => {
  const [list, setList] = useState([]);
  return (
    <MainContext.Provider value={{ list, setList }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainLayout;
