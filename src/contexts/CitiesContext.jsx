import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:9000";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    async function getCities() {
      try {
        setIsLoading(true);
        const res = await axios.get(`${BASE_URL}/cities`);

        setCities(res.data);
      } catch (error) {
        console.log("no cities added", error);
      } finally {
        setIsLoading(false);
      }
    }

    getCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await axios.get(`${BASE_URL}/cities/${id}`);

      setCurrentCity(res.data);
    } catch (error) {
      console.log("no cities added", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity }}>
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) throw new Error("bruk på feil plass");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { CitiesProvider, useCities };
