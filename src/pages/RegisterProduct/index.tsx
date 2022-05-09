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
    const [marcaProduct, setMarcaProduct] = useState(" ")
    const [ccProduct, setCcProduct] = useState(" ")
    

    async function createProduct() {
      const product = await addDoc(itemCollection,{
        title:nameProduct,
        price:priceProduct,
        url:urlImage,
        marca: marcaProduct,
        cc: ccProduct
      })
      alert("Produto foi Cadastrado")
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
                    <input type="text" className="form-control" placeholder="Link" id="image" onChange={(event)=> {
                        setUrlImage(event.target.value)
                    }}  />
                </div>
                <div className={styles.formGroup}>
                    <label>Marca da Moto: </label>
                    <input type="text" className="form-control" placeholder="Marca" id="image" onChange={(event)=> {
                        setMarcaProduct(event.target.value)
                    }}  />
                </div>
                <div className={styles.formGroup}>
                    <label>Cilindradas da Moto</label>
                    <input type="text" className="form-control" placeholder="Cilindradas" id="image" onChange={(event)=> {
                        setCcProduct(event.target.value)
                    }}  />
                </div>
                <button onClick={()=>{createProduct()}}>
                    Cadastrar Produto
                </button>
            </div>
        </section>
        </>
    )
}