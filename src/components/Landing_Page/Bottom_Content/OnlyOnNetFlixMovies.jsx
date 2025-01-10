import React, { useEffect } from "react";
import styles from "./onlyOnNetflixMovies.module.css";
import CardContainer from "../../Utilities/CardContainer";
import useApi from "../../../custom_hooks/UseApi";
const trendingMovies = [
  "Y2K",
  "Mary",
  "Nightb—ch",
  "A Nonsense Christmas",
  "Maria",
  "Kraven The Hunter",
  "Carry On",
  "Mufasa: The Lion King",
  "Babygirl",
  "A Complete Unknown",
  "The Fall Guy",
  "Wicked",
  "The Hunger Games",
  "The Marvels",
  "Killers of the Flower Moon",
];
export default function OnlyOnNetFlixMovies() {
  const { data, loading, error, sendMovieReq } = useApi();
  useEffect(() => {
    sendMovieReq(
      `https://api.themoviedb.org/3/discover/tv?with_watch_providers=8&watch_region=US`
    );
  }, []);
  const images = data
    ? data.results.map((dat) => ({ poster: dat.poster_path, id: dat.id }))
    : trendingMovies;
  return (
    <div className={styles.MoviesContainer}>
      <h2>Only on Netflix</h2>
      <CardContainer items={images} className={"happeningMovie"} />
    </div>
  );
}
