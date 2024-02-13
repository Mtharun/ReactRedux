export default function ProduvtCard( {data , handleCart}) {
  return (
      <div className="col-lg-4 mb-4" >
          <div className="card h-100"  >
            <img
              className="card-img-top"
              src={data.thumbnail}
              alt="Card image cap"
              style={{height:"200px",objectFit:"cover"}}
            />
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title text-center">{data.title}</h5>
              <p className="card-text text-muted">{data.description}</p>
              <h5 className="card-text text-center">$ {data.price}</h5>
              <button
                onClick={(event) => handleCart(event, data)}
                className="btn btn-outline-dark align-self-center"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
  );
}
