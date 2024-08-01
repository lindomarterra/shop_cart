const formatCurrency = (price, currency) => {
  return price.toLocaleString('pt-br', { style:'currency', currency } )
}
export default formatCurrency
