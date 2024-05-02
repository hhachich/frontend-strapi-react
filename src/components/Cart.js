import React, { useState } from 'react';
import "./Cart.css"
import { FaTrashAlt, FaShoppingCart, FaRedoAlt } from "react-icons/fa";

import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, resetCart } from "../redux/cartReducer";

function Cart() {
    const [cartList, setCartList] = useState(false)
    const showCartList = () => {
        if (products.length > 0)
            setCartList(!cartList)
    }
    const products = useSelector(state => state.cart.products)
    console.log(products)
    const dispatch = useDispatch()
    return (
        <div className='cart'>

            <div className='cart-icon' onClick={showCartList}> <FaShoppingCart /> </div>
            <div className='cart-badge'>{products.length}</div>

            {cartList ? (
                <ul className='cart-list'>
                    {products.map(product => (
                        <li className='cart-item'>
                            <span className='cart-item-quantity'>{product.quantity}</span>
                            <img className='cart-item-image' alt={product.image.data.attributes.title} src={process.env.REACT_APP_APP_URL + product.image.data.attributes.url}></img>
                            <span className='cart-item-title'>{product.title}</span>
                            <span className='cart-item-price'>{product.price}</span>
                            <span className='cart-item-remove' onClick={() => dispatch(removeFromCart({
                                id: product.id
                            }))}><FaTrashAlt /></span>
                        </li>
                    ))}
                    <span className='cart-reset' onClick={() => dispatch(resetCart())}><FaRedoAlt /></span>
                </ul>
            ) : ("")
            }
        </div>
    );
}

export default Cart;