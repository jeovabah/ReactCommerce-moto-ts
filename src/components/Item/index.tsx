interface ItemProps {
  title: string,
  price: number,
  id?: string,
  inCart?:number,
  idN?: number,
  url?: string,
  marca?: string,
  cc?: number
}

export function Item (props: ItemProps) {
    return (
        <div 
        style={{ padding: '1rem'}}
        className="col-11 col-md-6 col-lg-4 mx-0 mb-5  ">
        <div
          className="card p-0 overflow-hidden h-100 shadow item"
          style={{ alignItems: "center" }}
        >
          <img
            className="card-img-top img-fluid img-cont"
            style={{ height: "250px" }}
            src={props.url}
            alt="CardImage"
          />
  
          <div className="card-body">
            <h5 className="text-center card-title fw-bold text-secondary">
              {props.title} 
            </h5>
            <p>
             <strong>Marca</strong> : {props.marca}
              <br />
              <strong>Cilindrada</strong> : {props.cc} cc
            </p>
            <p className="card-title fw-bold mb-md-4 mt-md-3 text-success">
              {new Intl.NumberFormat('pt-BR', {style: "currency", currency: "BRL"}).format(props.price)}
            </p>
  
            <button
              className="btn btn-success text-center "
            //   onClick={() => addItem(props.item)}
            >
              Comprar
            </button>
            
          </div>
        </div>
      </div>
    );
}