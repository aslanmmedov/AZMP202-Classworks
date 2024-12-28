import React, { useEffect } from 'react'
import { useState } from 'react'
import { endpoints } from '../../../services/constants';
import controller from '../../../services/functions';
import { useParams } from "react-router"
import styles from '../ClientProducts/index.module.css'
import { useNavigate } from "react-router";
import { Button, Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { useContext } from 'react';
import { FavoriteContext } from '../../../context/addfavscontext';
const ProductDetail = () => {
  const {favorites,toggleFavorites} = useContext(FavoriteContext)
  const [product,setProduct] = useState([]);
  const navigate = useNavigate(null);
 const {id} = useParams();
  const getProduct = async () => {
    const data = await controller.getDataById(endpoints.products,id)
    console.log("data",data)
    setProduct(data);
  }
  useEffect(() => {
    getProduct();
  }, [])
  //  console.log(product)
   
  const goBack = () => {
    navigate(-1)
  }
  return (
    <>
    <div className={styles.container}>
    <div className={styles.cardHolder}>
          {product &&(
              <Card
              key={product.id}
              hoverable
              style={{
                width: 240,
              }}
              cover={<div className={styles.imgHeight}><img alt="example" src={product.image}/></div>}>
              <Meta title={product.title} /><br />
              <Meta title={`Price: $ ${product.price}`} /><br/>
              <Meta  description={product.description}/><br/>
              <Button color="default" variant="solid" onClick = {() => toggleFavorites(product)}>
                  {favorites.find((fav) => fav.id === product.id) ? "Remove from fav" : "Add fav"}
              </Button><br/><br/>
              <Button color="default" variant="solid" onClick = {goBack}>
                  Back
              </Button>
            </Card>
          )
          }
      </div>
    </div>
    </>
  )
}

export default ProductDetail