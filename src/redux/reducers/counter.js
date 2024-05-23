const initialState = {
    products: [],
  };
const ADD_TO_CART = "ADD_TO_CART";


const ShoppingReducer = (state = initialState, payload) => {
  switch (payload.type) {
    case ADD_TO_CART:
      return {
        ...state,
        products: [...state.products, payload.product],
      };
    default:
      return state;
  }
};
  export {ShoppingReducer};