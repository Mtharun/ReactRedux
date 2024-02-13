import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { saveCartProducts } from "../Redux/Reducers/ProductsSlice";

export default function CartCard({data}){
   
   const dispatch = useDispatch();
   const { productsData = []} = useSelector((state)=>state);
   const { cartProducts = []} = productsData;
   
   const handleQuantityChange = (quantity) => {
    const updatedProducts = cartProducts.map(item =>
      item.id === data.id ? { ...item, quantity } : item
    );
    dispatch(saveCartProducts(updatedProducts));
  };
   
   const handleRemove = (data) => {
    dispatch(saveCartProducts(cartProducts.filter(item => item.id !== data.id)));
   }
   
    return(
      <div className="container bg-light mb-5 py-3">
  <div className="card mb-3">
    <div className="row g-1">
      <div className="col-md-3">
        <img
          src={data.thumbnail}
          className="img-fluid rounded-start"
          alt="Books"
        />
      </div>
      <div className="col-md-9">
        <div className="card-body">
          <div className="card-head d-flex justify-content-between">
            <h1 className="card-title">{data.title}</h1>
            <div className="dropdown">
              <button
                className="dropdown-toggle"
                href="#"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="badge badge-pill text-danger bg-white">
                  {data.quantity || 1}
                </span>
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuLink"
              >
                {[1, 2, 3].map((quantity) => (
                  <Dropdown.Item
                    key={quantity}
                    onClick={() => handleQuantityChange(quantity)}
                  >
                    {quantity}
                  </Dropdown.Item>
                ))}
              </div>
            </div>
            <h4>${data.price}</h4>
          </div>
          <h6>{data.brand}</h6>
          <p className="card-text">{data.description}</p>
          <div className="d-flex flex-column align-items-end">
            <button
              className="remove btn text-danger"
              onClick={() => handleRemove(data)}
            >
              REMOVE
            </button>
          </div>
          <p className="card-text">
            <small className="text-body-secondary">{data.category}</small>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="row justify-content-between m-2">
      <p className="text-secondary">SUBTOTAL :</p>
      <p className="text-right">{data.quantity * data.price}</p>
  </div>
  <div className="row justify-content-between m-2">
      <p className="text-secondary">SHIPPING :</p>
      <p className="text-right"> FREE</p>
  </div>
  <hr />
  <div className="row justify-content-between m-2">
      <h6>TOTAL :</h6>
      <h6>{data.quantity * data.price}</h6>
  </div>
  <div className="d-flex justify-content-end mt-3">
    <a href="#" className="text-danger text-decoration-none">
      Get Daily Cash With Nespola Card
    </a>
  </div>
</div>


    )
}

