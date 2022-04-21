import React, { useEffect, useState } from 'react'
import { Helper } from '../../components/Helper'
import data from '../../data/data'
import styles from "./styles.module.scss"
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, DocumentData, addDoc } from 'firebase/firestore/lite';
import { Item } from '../../components/Item';


export const Produto = () => {
  const [items, setItems] = useState<DocumentData[]>([]);
  const [nameProduct, setNameProduct] = useState("")
  const [priceProduct, setPriceProduct] = useState(0)
  // const dataConteudo = data.productData // DADOS DE TESTE LOCAL
  const firebaseConfig = initializeApp({
    apiKey: "AIzaSyCv1BiXY2FLa_jq3ksq8PhxnZvxLvXZYsE",
    authDomain: "crudreactcommerce.firebaseapp.com",
    projectId: "crudreactcommerce"
  });
  
  const db = getFirestore(firebaseConfig)
  const itemCollection =  collection(db, 'itens')

  async function createProduct() {
    const product = await addDoc(itemCollection,{
      name: nameProduct,
      price: priceProduct
    })
  }

  useEffect(()=> {
    async function getItem() {
      const data = await getDocs(itemCollection)
      setItems(data.docs.map(doc => doc.data()))
    }
    getItem();
  },[]);
  
  return (
    <section>
      <div className="ajuda">
        <Helper />
      </div>
      <div className={styles.container}>
        {items.map((item,index) => {
          return(
            <Item key={index} title={item.title} price={item.price} id={item.id}   />
          )
        })}
      </div>
      
    </section>
  )
}
