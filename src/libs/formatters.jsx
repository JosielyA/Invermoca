export const numberToKilometers = new Intl.NumberFormat("es-ES", {
  style: "unit",
  unit: "kilometer",
  maximumFractionDigits: 0,
});

export const numberToUSD = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export const numberToUSDFractions = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
