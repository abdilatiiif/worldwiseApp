import styles from "./CountryList.module.css";

import Spinner from "./Spinner.jsx";
import Message from "./Message.jsx";
import CountryItem from "./CountryItem.jsx";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message
        message={"Add your first city by clicking on a city on the map"}
      />
    );

  const uniq = new Set();

  const countries = cities.reduce((arr, city) => {
    if (!uniq.has(city.country)) {
      uniq.add(city.country);
      arr.push({ country: city.country, emoji: city.emoji });
    }
    return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
