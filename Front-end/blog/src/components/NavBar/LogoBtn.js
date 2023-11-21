import styles from "./nav.module.css";

function Logo({text}){
    return <button className = {styles.logo}>{text}</button>
}

export default Logo;