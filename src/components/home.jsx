import styles from "./styles/home.module.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {videoContext} from "../context/videoData";
import {Nav} from "./nav"

export const Home = () =>{

    const {video} = useContext(videoContext);
    return(
        
        <div className = {styles.mainCont}>
           <Nav />
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
                        <Link key = {item.id.videoId} style = {{textDecoration:"none", color:"black"}} to={`/video/${item.id.videoId}`}>
                    <div id = {styles.gridData} key = {item.id} onClick = {()=>{
                        
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