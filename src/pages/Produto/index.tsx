import React, { useEffect, useState } from 'react'
import { Helper } from '../../components/Helper'
import data from '../../data/data'
import styles from "./styles.module.scss"
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, DocumentData, addDoc } from 'firebase/firestore/lite';
import { Item } from '../../components/Item';
import { itemCollection } from '../../services/firebase';
import { Header } from '../Header';


export const Produto = () => {
  const [items, setItems] = useState<DocumentData[]>([]);
  
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
      <Header />

        <Helper />
      </div>
      <div className={styles.container}>
        {items.map((item,index) => {
          return(
            <Item key={index} title={item.title} price={item.price} id={item.id} url={item.url}   />
          )
        })}
      </div>
      
    </section>
  )
}
