import { Button, Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FavoriteContext } from '../../../context/addfavscontext'
import styles from '../ClientProducts/index.module.css'
const Favorites = () => {
    const navigate = useNavigate(null)
const {favorites,toggleFavorites} = useContext(FavoriteContext)

const getDetail = (id) => {
    navigate(`/products/${id}`)
   }

  return (
    <>
      <div className={styles.container}>
    <div className={styles.cardHolder}>
          {favorites && favorites.map((product) => (
              <Card
              key={product.id}
              hoverable
              style={{
                width: 240,
              }}
              cover={<div className={styles.imgHeight}><img alt="example" src={product.image}/></div>}>
              <Meta title={product.title} /><br />
              <Meta title={`Price: $ ${product.price}`} /><br/>
              <Meta  description={product.description.slice(0-50)}/><br/>
              <Button color="default" variant="solid" onClick = {() => toggleFavorites(product)}>
                  {favorites.find((fav) => fav.id === product.id) ? "Remove from fav" : "Add fav"}
              </Button><br/><br/>
              <Button color="default" variant="solid" onClick = {() => getDetail(product.id)}>
                  Detail
              </Button>
            </Card>
          )
          )}
      </div>
    </div>
    </>
  )
}

export default Favorites