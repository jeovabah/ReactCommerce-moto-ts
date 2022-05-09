import { addDoc } from "firebase/firestore/lite";
import { ref, uploadBytes } from "firebase/storage";
import {  useState } from "react";
import {v4} from "uuid"
import styles from "./styles.module.scss"
import { initializeApp } from "firebase/app";
import { itemCollection, storage } from "../../services/firebase";
import { url } from "inspector";
import { Header } from "../Header";

export const RegisterProduct = () => {
    const [nameProduct, setNameProduct] = useState(" ")
    const [priceProduct, setPriceProduct] = useState(0.0)
    const [urlImage, setUrlImage] = useState(" ")
    

    async function createProduct() {
      const product = await addDoc(itemCollection,{
        title:nameProduct,
        price:priceProduct,
        url:urlImage
      })
      alert("Produto foi Cadastrado")
        setNameProduct("")
        setPriceProduct(0.0)
        setUrlImage("")
    }
    return (
        <>
            <Header />
        <section className={styles.container}>

            <h1> New Product</h1>
            <div >
                <div className={styles.formGroup}>
                    <label>Produto:</label>
                    <input type="text" className="form-control" id="name" placeholder="Produto" onChange={(e)=> setNameProduct(e.target.value)} />
                </div>
                <div className={styles.formGroup}>
                    <label>Preço:</label>
                    <input type="text" className="form-control" id="price" placeholder="Preço" onChange={(e)=> setPriceProduct(parseFloat(e.target.value.replace(",",".")))}  />
                </div>
                <div className={styles.formGroup}>
                    <label>Link de Imagem:</label>
                    <input type="text" className="form-control" id="image" onChange={(event)=> {
                        setUrlImage(event.target.value)
                    }}  />
                </div>
                <button onClick={createProduct}>
                    Cadastrar Produto
                </button>
            </div>
        </section>
        </>
    )
}