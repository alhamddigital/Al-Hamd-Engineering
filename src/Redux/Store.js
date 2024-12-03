import { configureStore } from "@reduxjs/toolkit"
import engineeringSlice from "./Slice"

const Store=configureStore({
    reducer:{
        construction:engineeringSlice
    }
})

export default Store