import { createContext, useState, useEffect, useContext } from "react";

const mainUrl = "https://disease.sh/v3/covid-19/all";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [allData, setAllData] = useState();

  const fetchReq = async (url) => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setAllData(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchReq(mainUrl);
  }, []);
  return (
    <AppContext.Provider value={{ allData }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
