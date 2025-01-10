import React, { useEffect, useState } from "react";
import styles from "./trendingMovies.module.css";
import CardContainer from "../../../Utilities/CardContainer";
import useApi from "../../../../custom_hooks/UseApi";
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
export default function TrendingMovies() {
  const { data, loading, error, sendMovieReq } = useApi();
  useEffect(() => {
    sendMovieReq(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`
    );
  }, []);
  const images = data
    ? data.results.map((dat) => ({ poster: dat.poster_path, id: dat.id , backdrop: dat.backdrop_path}))
    : trendingMovies;
  return (
    <div className={styles.TMoviesContainer}>
      <h2>Trending now</h2>
      <CardContainer items={images} className={"movie"} />
    </div>
  );
}
