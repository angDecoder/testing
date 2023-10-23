import './CartItem';

import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/slices/cartSlice';


const CartItem = ({id,img,name,price,quantity}) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeFromCart(id));
    }


    return (
        <div className={"cart_item"}>
            <button className={"remove"} onClick={handleRemove}>
                X
            </button>
            <div className={"image"}>
                <img src={img} alt={name} />
            </div>
            
            <div className={"product_name"}>
                {name}
            </div>
            <div className={"product_price"}>
                Rs. {price}/-
            </div>
            <div className={"product_quantity"}>
                Quantity: {quantity}
            </div>
        </div>
    )
}


export default CartItem;