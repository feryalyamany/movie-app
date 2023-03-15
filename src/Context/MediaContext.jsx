import axios from "axios";
import { createContext, useEffect, useState } from "react";
export let MediaContext = createContext("");

const MediaContextProvider = (props) => {
  const [trendingMovies, settrendingMovies] = useState([]);
  const [trendingTv, settrendingTv] = useState([]);
  const [trendingPerson, settrendingPerson] = useState([]);

  let gettrending = async (mediatype, callback) => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediatype}/week?api_key=1a80c6d660f78bb60d1b8fc2326c85c5`
    );
    callback(data.results);
    console.log(data);
  };

  useEffect(() => {
    gettrending("movie", settrendingMovies);
    gettrending("tv", settrendingTv);
    gettrending("person", settrendingPerson);
  }, []);
  return (
    <MediaContext.Provider
      value={{ trendingMovies, trendingTv, trendingPerson }}
    >
      {props.children}
    </MediaContext.Provider>
  );
};

export default MediaContextProvider;
