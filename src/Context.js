import { createContext, useContext, useEffect, useState } from "react";
const BASEURL = "http://omdbapi.com/";

export const API_URL = `${BASEURL}?apikey=${process.env.REACT_APP_MOVIE_API}`;

//  context is a store  when i store our all data
const AppContext = createContext();

// provider for export data

const AppProvider = ({ children }) => {
  // state
  const [movie, setmovie] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: "false", msg: "" });
  const [query, setQuery] = useState("iron-man");

  const fetchMovie = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.Response === "True") {
        setLoading(false);
        setmovie(data.Search);
        setError({
          show: false,
          msg: null,
        });
      } else {
        setError({
          show: true,
          msg: data.Error,
        });
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let fixTime = setTimeout(() => {
      fetchMovie(`${API_URL}&s=${query}`);
    }, 1000);

    return () => clearTimeout(fixTime);
  }, [query]);

  return (
    <AppContext.Provider value={{ movie, Loading, error, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

//  this is a global custam hook bye using global cusstam hook we are get our data in any component and make code more redable and short.

const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };
