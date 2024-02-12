import React from 'react'

export default function Cart() {

    const CartCloser=()=>{document.getElementById('Cart').style.display = 'none';}

  return (
    <div id='Cart'>
        <div id="Cart_box">
            <div id="Cart_nav">
                <button onClick={CartCloser} id='Cart_nav_closer' className="fa-solid fa-angle-left"></button>
                <h6>Cart</h6>
            </div>

            <div id="CartOrderBtn">
                <button>Order now</button>
            </div>
        </div>
    </div>
  )
}
