import styles from "./styles/authentication.module.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useContext, useState} from "react";
 import {videoContext} from "../context/videoData";
 import { useNavigate } from "react-router-dom";



export const Auth = ()  => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    

    const navigate = useNavigate();

    const {handleUsers} = useContext(videoContext);
    const handleInput = (e) => {
        setUsername(e.target.value)
    }
    const handleSubmit = () => {
        handleUsers(username);
        navigate("/");
    }
    console.log(username)
    return (
        <div id = {styles.Container}>
            <div id = {styles.midContainer}>
                <img id = {styles.logo} src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/233px-Google_2015_logo.svg.png"></img>
                <p id = {styles.signIn}>Sign in</p>
                <p id = {styles.toContinue}>to continue to YoutTube</p>
                {/* <input className = {styles.input} placeholder="Email or phone"></input> */}
                <TextField onChange = {handleInput} className = {styles.input} id="outlined-basic" label="Email or Phone" variant="outlined" />
                <button id = {styles.forgot}>Forgot email?</button>
                <p id = {styles.notYours}>Not your computer? Use Guest mode to sign in privately.</p>
                <button id = {styles.learnMore}>Learn more</button>
                <div className = {styles.signInButtons}>
                     <Button style={{textTransform: 'none'}} variant="text">Create account</Button>
                     <Button onClick = {handleSubmit} style={{textTransform: 'none', width:"6vw"}} variant="contained" >Next</Button>
                </div>
            </div>
        </div>
    )
}