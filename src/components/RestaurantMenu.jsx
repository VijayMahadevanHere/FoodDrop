import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurent from "../utils/useRestaurant";
import { useSelector, useDispatch } from "react-redux";
import { addItems } from "../sclice/cartSclice";
import Swal from "sweetalert2";
const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurent, restaurantMenu] = useRestaurent(id);
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleAddProduct = (item) => {
    dispatch(addItems(item));
    Swal.fire({
      icon: 'success',
      title: 'Item Added!',
      text: `${item.title} has been added to your cart.`,
      showConfirmButton: false,
      timer: 1500 // Close alert after 1.5 seconds
    });
  };

  return !restaurent ? (
    <Shimmer />
  ) : (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">{restaurent?.name}</h1>
      <div className="flex items-start">
        <img
          className="w-72 h-80 mr-6 rounded-lg shadow-md"
          src={IMG_CDN_URL + restaurent?.cloudinaryImageId}
          alt=""
        />
        <div className="flex flex-col">
          {restaurantMenu
            ?.slice(2)
            .filter((item) => item.card.card.title)
            .map((menu, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white rounded-lg shadow-md p-2 mb-2"
              >
                <div>
                  <h2 className="text-xl font-semibold mb-2">
                    {menu.card.card.title}
                  </h2>
                  <p className="text-gray-600">{menu.card.card.description}</p>
                </div>
                <button
                  onClick={() => handleAddProduct(menu.card.card)}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg"
                >
                  Add Item
                </button>
                
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
