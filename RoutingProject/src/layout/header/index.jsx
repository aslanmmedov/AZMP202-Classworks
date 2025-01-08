import React, { useContext } from 'react'
import { Link } from "react-router";
import styles from '../Aheader/index.module.css'
import { NavLink } from "react-router";
import { FavoriteContext } from '../../context/addfavscontext';
const ClientHeader = () => {
  const {favorites,toggleFavorites} = useContext(FavoriteContext)
  return (
    <>
      <nav className={styles.CNav}>
        <div className={styles.nav}>
            <div>
              <h1>App(Client Side)</h1>
            </div>
            <ul>
              <li><NavLink to="/">HOME</NavLink></li>
              <li><NavLink to="/contact">CONTACT</NavLink></li>
              <li><NavLink to="/products">PRODUCTS</NavLink></li>
              <li><NavLink to="/basket">BASKET</NavLink></li>
              <li><NavLink to="/favorites">FAVORITES<sup>{favorites.length}</sup></NavLink></li>
            </ul>
        </div>
      </nav>

    </>
  )
}

export default ClientHeader