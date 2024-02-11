import { useSelector, useDispatch } from "react-redux";
import { clearCart, deleteItem } from "../sclice/cartSclice";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
const UserCart = () => {
  const items = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()
const handleCheckOut=()=>{
    dispatch(clearCart())
    Swal.fire({
        icon: 'success',
        title: 'Order Placed Succesfully',
        text: `Thank you for shopping`,
        showConfirmButton: false,
        timer: 1500 // Close alert after 1.5 seconds
      });
    
}
  const handleClearCart = () => {
    dispatch(clearCart())
  };

  const handleDeleteItem = (id) => {
    dispatch(deleteItem(id))
  }

  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    let totalPrice = 0;
    items.forEach((item) => {
      const price = parseInt(item?.itemCards[0]?.card?.info?.price);
      if (!isNaN(price)) {
        totalPrice += price;
      }
    });
    setTotalAmount(totalPrice);
  }, [items]);

  return (
    <div className="relative h-screen flex flex-col justify-between" data-testid="cartList">
      <div>
        <h1 className="font-bold text-3xl mb-4">Cart Items</h1>
        {items.length <= 0 ? (
          <h1>Cart is Empty!!</h1>
        ) : (
          items.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-between mb-2"
              >
                <div>
                  <span>{item.title}</span>
                  <span className="ml-2">
                    Rs: {item?.itemCards[0]?.card?.info?.price/100}
                  </span>
                </div>
                <button
                  onClick={() => handleDeleteItem(item.title)}
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg ml-2"
                >
                  Delete Item
                </button>
              </div>
            );
          })
        )}
        {items.length > 0 && (
          <button
            className="bg-orange-200 px-4 py-2 rounded-lg mt-4"
            data-testid="clear-btn"
            onClick={() => handleClearCart()}
          >
            Clear my Cart
          </button>
        )}
      </div>
      {totalAmount > 0 && (
        <div className="bg-gray-100 text-gray-900 px-2 py-2 rounded-lg border border-gray-500 w-96">
          <div>
            Total Amount: Rs {totalAmount/100}
          </div>
          <div className="mt-2">
            <button onClick={()=>handleCheckOut()} className="bg-green-500 text-white px-2 py-2 rounded-lg border border-gray-500 mr-4">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCart;
