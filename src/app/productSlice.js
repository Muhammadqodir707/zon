
import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Perforator Bosch GBH 2-26",
      image: "https://karvon.uz/storage/products/September2023/3G0uzZe9VucA2WILpGcx.png",
      likeToggle: false,
      shopping: false,
      price: "1,200,000 UZS",
      discount: "20%",
    },
    {
      id: 2,
      title: "Bolg'a (500g)",
      image: "https://media-amazon.com/images/I/51b5DSyCWL.jpg",
      likeToggle: false,
      shopping: false,
      price: "80,000 UZS",
      discount: "10%",
    },
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {
  },
});

export default productSlice.reducer;