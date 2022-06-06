import styles from "./styles/navbar.module.css";
import { useContext, useState, useEffect } from "react";
import { videoContext } from "../context/videoData";
import { Link } from "react-router-dom";

export const Nav = () => {
  const { handleChange } = useContext(videoContext);
  const [value, setValue] = useState("");
  const [keyValue, setKeyValue] = useState("");

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  console.log(value, "value");

  useEffect(() => {
    if (!value) {
      return;
    }
    if (keyValue === 13) {
      handleChange(value);
    }
  }, [keyValue]);

  const handleSearch = (e) => {
    handleChange(value);
  };

  return (
    <div className={styles.nav}>
      <span class="material-icons" id={styles.icons}>
        {" "}
        reorder{" "}
      </span>
      <Link to="/">
        <img
          id={styles.logo}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          alt=""
        />
      </Link>
      <input
        placeholder="Search"
        id={styles.inputBar}
        onChange={handleInput}
        onKeyUp={(x) => setKeyValue(x.keyCode)}
      ></input>
      <div id={styles.searchDiv} onClick={handleSearch}>
        <span class="material-icons" id={styles.searchIcon}>
          search
        </span>
      </div>
      <div className={styles.micDiv}>
        <span class="material-symbols-outlined" id={styles.micIcon}>
          mic
        </span>
      </div>
      <div className={styles.userIcons}>
        <span class="material-icons" id={styles.userIconsSize}>
          video_call
        </span>
        <span class="material-icons" id={styles.userIconsSize}>
          {" "}
          apps{" "}
        </span>
        <span class="material-icons" id={styles.userIconsSize}>
          {" "}
          notifications_none{" "}
        </span>
      </div>
      <Link
        to="/auth"
        style={{ textDecoration: "none", color: "#1c8ff3", marginTop: "5px" }}
      >
        {" "}
        <div className={styles.loginDiv}>
          <span>Sing in</span>
          <span class="material-icons" id={styles.userIconsSizeAccount}>
            account_circle
          </span>
        </div>
      </Link>
    </div>
  );
};
