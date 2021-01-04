import { createContext, useState, useEffect, useContext } from "react";

const mainUrl = "https://disease.sh/v3/covid-19/all";
const countriesUrl = "https://disease.sh/v3/covid-19/countries";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [allData, setAllData] = useState();
  const [countries, setCountries] = useState([]);
  const [newCountries, setNewCountries] = useState([])
  const [text, setText] = useState('')

  const fetchReq = async (url) => {
    try {
      const response = await fetch(url);
      if (url === mainUrl) {
        const result = await response.json();
        setAllData(result);
      } else if (url === countriesUrl) {
        const result = await response.json()
        setCountries([...result])
        setNewCountries([...result])
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchReq(mainUrl);
    fetchReq(countriesUrl);
  }, []);

  const handleClick = e => {
    if (e.target.textContent) {
      if (e.target.textContent === 'All') {
        setNewCountries(countries)
      } else {
        let tempArr = countries.filter(item => item.continent === e.target.textContent)
        setNewCountries(tempArr)
      // console.log(tempArr)
      }
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    let tempArr = countries.filter(item => item.country.toUpperCase() === text.toUpperCase() || item.continent.toUpperCase() === text.toUpperCase())
    setNewCountries(tempArr)
    // console.log(tempArr)
    setText('')
  }

  return (
    <AppContext.Provider value={{ allData, newCountries, text, setText, handleClick, handleSubmit }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
