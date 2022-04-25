import { useParams  } from "react-router-dom";
import styles from "./styles/video.module.css";
import {useState, useEffect, useContext} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {videoContext} from "../context/videoData";
import {Nav} from "./nav";

export const Video = () =>{
    let {id} = useParams();
  
    const {video} = useContext(videoContext);

    return(
        <div id = {styles.mainVideo} >
            <Nav />
        <div id = {styles.leftVideo}>
            <iframe  id = {styles.iframe} src={`https://www.youtube.com/embed/${id}`} frameborder="0" allow="accelerometer;autoplay;play; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
        </div>
        <div id = {styles.rightVideo}>
        {video.map((item, index) => {
                    return(
                        <Link style = {{textDecoration:"none", color:"black"}} to={`/video/${item.id.videoId}`}>
                        <div id = {styles.gridData} key = {item.id.videoId}>
                            <div id = {styles.gridLeft}>
                                <img id = {styles.thumImg} src = {item.snippet.thumbnails.high.url}></img>
                            </div>
                            <div id = {styles.videoDetails}>
                                <p id = {styles.videoTitle}>{item.snippet.title}</p>
                                <p id = {styles.videoChannel}>{item.snippet.channelTitle}</p>
                            </div>
                        </div>
                    </Link>
                    )
                })}

        </div>
        </div>
    )
}