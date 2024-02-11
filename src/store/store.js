

import {configureStore } from "@reduxjs/toolkit";

import cartSclice from "../sclice/cartSclice";

const store=configureStore({
    reducer:{
        cart:cartSclice
    }
})


export default store