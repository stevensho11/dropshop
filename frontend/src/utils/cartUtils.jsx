export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  // Calculate price of items
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  // Calculate shipping price (free for > $100, else 9.99)
  state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 9.99);
  // Calculate tax price (8.25% tax)
  state.taxPrice = addDecimals(Number(0.0825 * state.itemsPrice));
  // Calculate total price
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);

  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};
