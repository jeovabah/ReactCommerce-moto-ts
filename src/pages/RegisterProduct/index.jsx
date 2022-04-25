import { addDoc } from "firebase/firestore/lite";
import { ref, uploadBytes } from "firebase/storage";
import {  useState } from "react";
import {v4} from "uuid"
import styles from "./styles.module.scss"
import { initializeApp } from "firebase/app";
import { itemCollection, storage } from "../../services/firebase";

export const RegisterProduct = () => {
    const [nameProduct, setNameProduct] = useState(" ")
    const [priceProduct, setPriceProduct] = useState(0.0)
    const [imageUrl, setImageUrl] = useState(null)   

    function uploadImage () {
        if( imageUrl == null) return;
        const imageRef =  ref(storage, `images/${imageUrl.name + v4()}`);
        uploadBytes(imageRef, imageUrl).then(()=> {
            alert("Imagem enviada com sucesso")
        })
        console.log(imageUrl)
    }

    async function createProduct() {
      const product = await addDoc(itemCollection,{
        title:nameProduct,
        price:priceProduct
      })
    }
    return (
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
                    <label>Escolha a Imagem:</label>
                    <input type="file" className="form-control" id="image" onChange={(event)=> {
                        setImageUrl(event.target.files[0])
                    }}  />
                </div>
                <button onClick={uploadImage}>
                    Cadastrar Produto
                </button>
            </div>
        </section>
    )
}