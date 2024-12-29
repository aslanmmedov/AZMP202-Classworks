import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { endpoints } from '../../../services/constants';
import controller from '../../../services/functions';
import { Button, Card } from 'antd';
const { Meta } = Card;
import { useNavigate } from "react-router";
import styles from './index.module.css'
import { FavoriteContext } from '../../../context/addfavscontext';
import { Helmet } from 'react-helmet-async';

const ClientProducts = () => {
 const [products,setProducts] = useState([]);
 const [inpValue,setInpValue] = useState("");
 const navigate = useNavigate(null)
 const getData = async () => {
  const data = await controller.getAllData(endpoints.products)
  setProducts(data)
  // console.log(data)
 }
 const getDetail = (id) => {
  navigate(`/products/${id}`)
 }

 const {favorites,toggleFavorites} = useContext(FavoriteContext);


 useEffect(() => {
   getData();
 }, [])
//  console.log(products)
// console.log(inpValue)

 const filteredProducts = products.filter((product) => {
  // console.log(product)
    return product.title.toLowerCase().includes(inpValue.toLowerCase());
 })

 console.log(filteredProducts)
 const handleChange = (e) => {
  setInpValue(e.target.value.trim())
 }


  return (
    <>
     <Helmet>
        <title>Products Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
    <div className={styles.container}>
    <input type="text" onChange={handleChange} className = {styles.inpValue} placeholder = {"search by name"}/>
    <div className={styles.cardHolder}>
          {filteredProducts && filteredProducts.map((product) => (
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

export default ClientProducts