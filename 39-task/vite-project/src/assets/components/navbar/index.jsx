import React from 'react'
import styles from "./index.module.scss"

const Navbar = () => {
  return (
    <nav>
        <div className={styles.navbar}>
        <h3>Quickly.</h3>
        <ul>
            <li>About Us</li>
            <li>Products</li>
            <li>Features</li>
            <li>Our Blog</li>
            <li>Downloads</li>
        </ul>
        <div className={styles.btnContainer}>
            <button className={`${styles.btn} ${styles["btn-sign-up"]} `}>Sign Up</button>
            <button className={`${styles.btn} ${styles["btn-sign-in"]} `}>Log In</button>
        </div>
    </div>
    </nav>
    
  )
}

export default Navbar