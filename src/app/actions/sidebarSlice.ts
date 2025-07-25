import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// Define a type for the slice state
interface sidebarState {
    resizeSidebar: boolean
}

// Ambil dari localStorage (sekali, saat slice dibuat)
const storedSidebar = localStorage.getItem("resizeSidebar");

// Define the initial state using that type
const initialState: sidebarState = {
    resizeSidebar: storedSidebar === "true",
}

export const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        // You Create fuction is here
        handleResizeSidebar: (state) => {
            localStorage.setItem("resizeSidebar", String(!state.resizeSidebar));
            state.resizeSidebar = !state.resizeSidebar;
        }
    },
})

export const { handleResizeSidebar } = sidebarSlice.actions // call fuction reducers is here
export const selectCount = (state: RootState) => state.counter.value
export default sidebarSlice.reducer