import styles from "./styles/home.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



export const Home = () =>{
    let api = "AIzaSyBRVuhKhZJhJ-2XBiKTvUvqKerJf01rYoI";
    let [video, setVideo] = useState([]);

    useEffect(() => {
        fetch();
    },[]);
   
    const fetch = () =>{
        axios.get(`https://youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&regionCode=IN&key=${api}&type=video&part=snippet&maxResults=32`).then(res => {
            setVideo(res.data.items);
        });
    }
    console.log(video)
    return(
        <div className = {styles.mainCont}>
            <div className = {styles.leftCont}>
                <div id = {styles.leftIconsDiv}>
                    <span id={styles.leftIcons} class="material-icons"> home </span>
                    <span id = {styles.leftNaming}>Home</span>
                </div>
                <div id = {styles.leftIconsDiv}>
                    <span id={styles.leftIcons} class="material-symbols-outlined">explore</span>
                    <span>Explore</span>
                </div>
                <div id = {styles.leftIconsDiv}>
                    <span id={styles.leftIcons} class="material-symbols-outlined">screen_rotation_alt</span>
                    <span>Shorts</span>
                </div>
                <div id = {styles.leftIconsDiv}>
                    <span id={styles.leftIcons} class="material-symbols-outlined"> subscriptions </span>
                    <span>Subscriptions</span>
                </div>
                <hr></hr>
                <div id = {styles.leftIconsDiv}>
                    <span id={styles.leftIcons} class="material-symbols-outlined"> video_library </span>
                    <span>Library</span>
                </div>
                <div id = {styles.leftIconsDiv}>
                    <span id={styles.leftIcons} class="material-symbols-outlined">history</span>
                    <span>History</span>
                </div>
                <div id = {styles.leftIconsDiv}>
                    <span id={styles.leftIcons} class="material-symbols-outlined">smart_display</span>
                    <span>Your Videos</span>
                </div>
                <div id = {styles.leftIconsDiv}>
                    <span id={styles.leftIcons} class="material-symbols-outlined">schedule</span>
                    <span>Watch Later</span>
                </div>
                <div id = {styles.leftIconsDiv}>
                    <span id={styles.leftIcons} class="material-symbols-outlined">thumb_up</span>
                    <span>Liked Videos</span>
                </div>      
            </div>

            {/* ////////////////Right cont ////////////////////////////// */}
            <div id = {styles.rightCont}>
                {video.map((item, index) => {
                    return(
                        <Link style = {{textDecoration:"none", color:"black"}} to={`/video/${item.id}`}>
                    <div id = {styles.gridData} key = {index} onClick = {()=>{
                        
                    }}>
                        <img id = {styles.thumImg} src = {item.snippet.thumbnails.high.url}></img>
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