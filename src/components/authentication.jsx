import {useState, useEffect, useContext} from 'react';
import {Link} from "react-router-dom";
import styles from "./styles/authentication.module.css";


export const Auth = ()  => {
    return (
        <div id = {styles.Container}>
            <div id = {styles.midContainer}>
                <img id = {styles.logo} src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/233px-Google_2015_logo.svg.png"></img>
                <p id = {styles.signIn}>Sign in</p>
                <p id = {styles.toContinue}>to continue to YoutTube</p>
                <input id = {styles.input} placeholder="Email or phone"></input>
                <button id = {styles.forgot}>Forgot email?</button>
                <p id = {styles.notYours}>Not your computer? Use Guest mode to sign in privately.</p>
                <button id = {styles.learnMore}>Learn more</button>
            </div>
        </div>
    )
}