import styles from "./styles/navbar.module.css";
export const Nav = () => {
  return (
    <div className={styles.nav}>
      <span class="material-icons" id={styles.icons}>
        {" "}
        reorder{" "}
      </span>
      <img
        id={styles.logo}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
        alt=""
      />
      <input placeholder="Search" id={styles.inputBar}></input>
      <div id={styles.searchDiv}>
        <span class="material-icons" id={styles.searchIcon}>
          search
        </span>
      </div>
      <div className={styles.micDiv}>
        <span class="material-symbols-outlined" id={styles.micIcon}>
          mic
        </span>
      </div>
      <div className = {styles.userIcons}>
        <span class="material-icons" id = {styles.userIconsSize}>video_call</span>
        <span class="material-icons" id = {styles.userIconsSize}> apps </span>
        <span class="material-icons" id = {styles.userIconsSize}> notifications_none </span>
        <span class="material-icons" id = {styles.userIconsSize}> face </span>
      </div>
    </div>
  );
};
