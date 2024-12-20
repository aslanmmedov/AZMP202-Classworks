import React from 'react'
import styles from "./index.module.scss"
const HeroBanner = () => {
  return (
    <main>
        <div className={styles.container}>
            <div className={styles.sectone}>
                <h4>The new way to work online</h4>
                <h1>Get the important
                work done faster</h1>
                <p>With Quickly, you can get more productive 
                work done in far less time than ever before.</p>
                <div className={styles.btnContainer}>
                                    <button className={`${styles.btn} ${styles["btn-sign-up"]} `}>Sign Up</button>
                                    <button className={`${styles.btn} ${styles["btn-sign-in"]} `}>Log In</button>
                </div>
            </div>
            <div className={styles.secttwo}>
                <img src="https://s3-alpha-sig.figma.com/img/da2b/5d75/419dc94b005bd48b9df689102e6f2c1a?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TdNAjQOLyF40GYqtPNvy6dmJSh7uklImhrWDM2tIkn5xbr5Zhq-yeJeZwAxJRB2oNRK-Xo2STEWTQ494dhActtt6ojpzGdHfuqXgr3LgYW-Lc~kteRnRIxTw-cRE255OaBMLzLDqrgRjyqySqevAt6FA3G76C8O6GNubVaVWrB56sRiZcYo1z8YWNAZU9v0zJnMD8h9XUHVN6Mh3tbAgghkiXYicA7AV~y5V91ovgQic8wdAwMe2beou2rLL47xZTY7uFGbP6zprSmBFOSbzffYI1XwKRSe450dRTnoVmvms4rlHlMcNaGmI-t5dF6kbjOV5vR6FTBvfDlfm6F0G1A__" alt="" />
            </div>
        </div>
    </main>
  )
}

export default HeroBanner