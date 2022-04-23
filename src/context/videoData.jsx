import { createContext, useState, useEffect } from "react";
import axios from "axios";
import {config} from "../config";

export const videoContext = createContext();


export const VideoData = ({children}) =>{
    let token = config.my_key;
    let [video, setVideo] = useState([]);

    useEffect(() => {
        fetch();
    },[]);
   
    const fetch = () =>{
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?q=${"trending"}&type=video&chart=mostPopular&regionCode=IN&key=${token}&maxResults=20&part=snippet`).then(res => {
            setVideo(res.data.items);
        });
    }
    // console.log(video)
    const searchFetch = (e) =>{
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?q=${e}&type=video&chart=mostPopular&regionCode=IN&key=${token}&maxResults=20&part=snippet`).then(res => {
            setVideo(res.data.items);
        });
    }
    console.log(video)
    const handleChange = (e) =>{
        // console.log(e)
        searchFetch(e)
    }

    return <videoContext.Provider value = {{video, handleChange}}>{children}</videoContext.Provider>
}