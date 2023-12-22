
import { createSlice } from "@reduxjs/toolkit";
import ProductData from "../ProductData";
import ProductData2 from "../ProductData2";
import ProductData3 from "../ProductData3";
import ProductData4 from "../ProductData4";

const initialState = {
    cart: [],
    items: ProductData,
    item2: ProductData2,
    item3: ProductData3,
    item4: ProductData4,
    totalquantity: 0,
    totalprice: 0,
};

export const Productslice = createSlice({
    name: "cart",
    initialState,
    reducers:{

    }
})
export default Productslice.reducer