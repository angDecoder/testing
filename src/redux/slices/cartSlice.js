import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: JSON.parse(localStorage.getItem("cartItems")) || [],
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const item = state.items.find(item => item.id === action.payload.id)
            if (!item) {
                state.items.push({ ...action.payload, quantity: 1 })
            } else {
                item.quantity++
            }
            localStorage.setItem("cartItems", JSON.stringify(state.items))
        },
        removeFromCart(state, action) {
            // id is passed in as an action payload
            state.items = state.items.filter(item => item.id !== action.payload)
            localStorage.setItem("cartItems", JSON.stringify(state.items))
        },
        clearCart(state, action) {
            state.items = []
            localStorage.setItem("cartItems", JSON.stringify(state.items))
        }
    }
})


export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer