import React from 'react'
import { useState, useEffect } from "react";
import { getMenu } from '../asyncmock';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getMenu()
      .then(respuesta => setProductos(respuesta))
  }, [])



  return (
    <>
    <h2 style={{ color: 'darkslateblue' }}> Menú </h2>
    <ItemList productos={productos} />
    </>

  )
}

export default ItemListContainer