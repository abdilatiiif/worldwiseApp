import styles from "./CityList.module.css";

function CityList({ cities, isLoading }) {
  console.log(cities, isLoading);

  return <ul className={styles.cityList}>List from CityList</ul>;
}

export default CityList;
