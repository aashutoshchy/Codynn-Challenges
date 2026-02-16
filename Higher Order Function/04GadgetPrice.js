function adjustGadgetPrices(gadgets) {
  const updatedGadgets = gadgets.map((gad) => {
    if (gad.rating > 4) {
      return {
        ...gad,
        price: gad.price + 0.1 * gad.price,
      };
    } else {
      return gad;
    }
  });

  console.log(updatedGadgets);
  return updatedGadgets;
}
