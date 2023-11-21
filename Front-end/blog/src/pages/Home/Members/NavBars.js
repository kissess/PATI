import styles from "./nav.module.css";
import LoginBtn from "./LoginBtn";
import Logo from "./LogoBtn";
import Li from "./Li";


function NavBars() {
    return (
        <nav className = {styles.bar}>
            <Logo text = {"PostureFlow"}/>
            <ul className={styles.menu}>
                <li><Li text = {"About Project"}/></li>
                <li><Li text = {"Members"}/></li>
            </ul>
            <LoginBtn text = {"로그인"} />
        </nav>
    )
}

export default NavBars;