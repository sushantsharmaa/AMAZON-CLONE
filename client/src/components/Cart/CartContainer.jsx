import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import "./cartContainer.css"

const CartContainer = () => {
    const { cartItems, total, amount } = useSelector((state) => state.cartData);

    if (amount < 1) {
        return (<section className='empty-cart'>
            <h1>Your cart is currently empty</h1>
        </section>
        );
    }

    return (
        <section className='cart'>
            <div className='cart-left'>
                <h2>Shopping Cart</h2>
                <hr />
                <div>
                    {cartItems.map((item) => {
                        return <CartItem key={item.id} {...item} />
                    })}
                </div>
                <hr />
                <div className='cart-total'>
                    <h5>{`Subtotal (${amount} Item): `}<span>₹ </span>{total.toFixed(2)}</h5>
                </div>
            </div>
            <div className='cart-right'>
                <h5>{`Subtotal (${amount} Item): `}<span>₹ </span>{total.toFixed(2)}</h5>
                <button>Proceed to Buy</button>
                <div className='emi'>
                    <p>EMI Available</p>
                </div>
            </div>
        </section>
    )
}

export default CartContainer