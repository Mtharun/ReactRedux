import CartCard from '../components/cartCard';
import { useDispatch, useSelector } from "react-redux";
import { saveCartProducts } from "../Redux/Reducers/ProductsSlice";

export default function Cart() {

    const dispatch = useDispatch();
    const { productsData = {} } = useSelector((state) => state);
    const { cartProducts=[] } = productsData;

    const handleQuantity = (e,data) => {
        let quantity = e.target.value;
        let price = data.price;
            dispatch(saveCartProducts(cartProducts.map(item => {
                if(item.id === data.id){
                    return {...item,addPrice:(quantity*price)}
                }
                return {...item}
            })))
    }

    return (
        <div>
            <div className='container'>
                {
                    cartProducts.length > 0 ? cartProducts.map((item,i) => <CartCard key={i} data={item} handleQuantity={handleQuantity}/>) : <div className='container'><h1 className='text-center m-5'>CART IS EMPTY</h1></div>
                }
            </div>
        </div>
    )
} 