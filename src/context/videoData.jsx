import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const videoContext = createContext();

export const VideoData = ({ children }) => {
  const key = process.env.REACT_APP_Youtube_API_KEY;
  // const key = "AIzaSyBnlOVq5CXK6fS8srhtMxRRJQcu-FRvTvM"s
  let [video, setVideo] = useState([]);
  console.log(key, "key");

  useEffect(() => {
    fetch();
  }, []);

  const fetch = () => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?q=${"latest"}&type=video&chart=mostPopular&regionCode=IN&key=${key}&maxResults=20&part=snippet`
      )
      .then((res) => {
        setVideo(res.data.items).catch((err) => {
          console.log(err);
        });
      });
  };
  const searchFetch = (e) => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?q=${e}&type=video&chart=mostPopular&regionCode=IN&key=${key}&maxResults=20&part=snippet`
      )
      .then((res) => {
        setVideo(res.data.items).catch((err) => {
          console.log(err);
        });
      });
  };
  const handleChange = (e) => {
    searchFetch(e);
  };

  return (
    <videoContext.Provider value={{ video, handleChange }}>
      {children}
    </videoContext.Provider>
  );
};
