import { useEffect } from "react";
import ProductCard from "../components/productsCard";
import { useDispatch, useSelector } from "react-redux";
import {
  saveProducts,
  saveCartProducts,
} from "../Redux/Reducers/ProductsSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { productsData = {} } = useSelector((state) => state);
  const { products = [], cartProducts = [] } = productsData;
  console.log("CARTPRODUCT", cartProducts);

  useEffect(() => {
    fetch("./mocks/products.json")
      .then((response) => response.json())
      .then((result) => {
        if (result.products) {
          dispatch(saveProducts(result.products));
        }
      })
      .catch((err) => console.log("error ::", err));
  }, [dispatch]);

  const handleCart = (event, data) => {

    dispatch((dispatch, getState) => {
        const state = getState();
        const { cartProducts } = state.productsData;

    if (cartProducts.length === 0) {
      let cartCopy = [...cartProducts];
      cartCopy.push({ ...data, quantity: 1 });
      dispatch(saveCartProducts(cartCopy));
    } else if (cartProducts.length > 0) {
      let matchedData = cartProducts.find((item) => item.id === data.id);
      if (matchedData) {
        alert("This Product Already Added");
      } else {
        let cartCopy = [...cartProducts];
        cartCopy.push({ ...data, quantity: 1 });
        dispatch(saveCartProducts(cartCopy));
      }
    }
})
  };

  return (
    <div>
    <div className="container">
        <div className="row">
      
      {products.map((item) => (
        <ProductCard key={item.id} data={item} handleCart={handleCart} />
      ))}
    
  </div>
    </div>
    
    </div>
      );
}
