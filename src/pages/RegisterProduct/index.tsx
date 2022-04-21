import styles from "./styles.module.scss"
export const RegisterProduct = () => {
    return (
        <section className={styles.container}>
            <h1> New Product</h1>
            <form>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Produto:</label>
                    <input type="text" className="form-control" id="name" placeholder="Produto" onChange={(e)=> e.target.value} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="price">Preço:</label>
                    <input type="text" className="form-control" id="price" placeholder="Preço" />
                </div>
                <button>
                    Cadastrar Produto
                </button>
            </form>
        </section>
    )
}