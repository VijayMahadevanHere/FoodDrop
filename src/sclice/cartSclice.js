import { createSlice } from "@reduxjs/toolkit"

const cartSclice=createSlice({
    name: 'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItems:(state,action)=>{
            state.items.push(action.payload)
        },
        clearCart:(state)=>{
            state.items=[]
        }, 
        deleteItem:(state,action)=>{
            console.log(action.payload,'action.payload');
           state.items= state.items.filter(item=>item.title!== action.payload)
        }
    }

})


export const{addItems,clearCart,deleteItem}=cartSclice.actions
export default cartSclice.reducer