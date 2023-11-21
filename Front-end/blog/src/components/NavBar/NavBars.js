import styles from "./nav.module.css";
import Logo from "./LogoBtn";
import Li from "./Li";
import { useEffect, useState } from "react";
import { auth } from "firebase-config";
import { Link } from "react-router-dom";



// import { useDispatch, useSelector } from "react-redux";


function NavBars() {
    // const dispatch = useDispatch();
    // const {userObject, isAuth} = useSelector((state)=> state.authSlice)
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      auth.onAuthStateChanged((user) => {
          console.log(user);
          if (user) {
            // 로그인 된 상태일 경우
            setIsLoggedIn(true);
          } else {
            // 로그아웃 된 상태일 경우
            setIsLoggedIn(false);
          }
        });
      }, []);

    return (
        <nav className = {styles.bar}>
            <Logo text = {"PostureFlow"}/>
            <ul className={styles.menu}>
                <Li text = {"About Project"}/>
                <Li text = {"Members"}/>
            </ul>
            {isLoggedIn ? (
                <button onClick={() => auth.signOut()}
                 className={styles.login}>로그아웃</button>
            ) : (
                <Link to="/login" className={styles.txtd}>
                <button className={styles.login}>로그인</button>
                </Link>
            )
            }
           
        </nav>
    )
}

export default NavBars;