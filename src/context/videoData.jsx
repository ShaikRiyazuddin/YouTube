import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const videoContext = createContext();


export const VideoData = ({children}) =>{
    const key = process.env.REACT_APP_Youtube_API_KEY ;
    let [video, setVideo] = useState([]);

    useEffect(() => {
        fetch();
    },[]);
   
    const fetch = () =>{
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?q=${"trending"}&type=video&chart=mostPopular&regionCode=IN&key=${key}&maxResults=20&part=snippet`).then(res => {
            setVideo(res.data.items);
        });
    }
    const searchFetch = (e) =>{
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?q=${e}&type=video&chart=mostPopular&regionCode=IN&key=${key}&maxResults=20&part=snippet`).then(res => {
            setVideo(res.data.items);
        });
    }
    const handleChange = (e) =>{
        searchFetch(e)
    }

    return <videoContext.Provider value = {{video, handleChange}}>{children}</videoContext.Provider>
}