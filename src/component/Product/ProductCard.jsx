import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';
import './ProductCard.css';


const ProductCard = ({id,title,description,price,image}) => {
    const dispatch = useDispatch();

    const products = useSelector(state => state.products.products);
    const product = products.find(product => product.id === parseInt(id));

    const handleAddToCart = () => {
        const image = product.images[0];
        const product_details = {
            id: product.id,
            name: product.name,
            image: image,
            price: product.price,
        }
        dispatch(addToCart(product_details));
    }

    return (
        <div className="product-card">
            <img
                className="product-image"
                src={image}
                alt="Product"
            />
            <h2>{title}</h2>
            <h4>{description}</h4>
            <p className="product-price">${price}</p>
            <button className="buy-now-button" onClick={handleAddToCart}>Add to Cart</button>
        </div>
    )
}


export default ProductCard;