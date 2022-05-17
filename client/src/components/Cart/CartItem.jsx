import { increase, decrease } from '../../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import "./cartItem.css"
import axios from 'axios';

const CartItem = ({ id, url, title, price, amount }) => {
    const dispatch = useDispatch();

    const handleClick = async () => {
        const res = await axios.delete(`https://amazon-clone-fake-api.herokuapp.com/cart/${id}`);
        window.location.reload(false);
        return res;
    }

    return (
        <article className='cart-item'>
            <div className='cart-item-left'>
                <img src={url} alt={title} />
            </div>
            <div className='cart-item-right'>
                <h4>{title}</h4>
                <h5 className='item-price'>Price: <span>₹ </span>{price}</h5>
                <div className='right-btn'>
                    <button className='amount-btn' onClick={() => {
                        dispatch(increase({ id }));
                    }}>+
                    </button>
                    <button className='amount-btn' onClick={() => {
                        if (amount === 1) {
                            handleClick(id);
                            return;
                        }
                        dispatch(decrease({ id }));
                    }}>-
                    </button>
                    <button className='remove-btn' onClick={handleClick}>DELETE</button>
                </div>
            </div>
        </article>
    )
}

export default CartItem