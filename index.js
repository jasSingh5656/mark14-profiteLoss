const initialPrice = document.getElementsByClassName("initialPrice")[0]
const stockNumber = document.getElementsByClassName("stockNumber")[0];
const currentPrice = document.getElementsByClassName("currentPrice")[0];
const result = document.getElementsByClassName("result")[0];
const button = document.getElementsByClassName("button")[0];

function percentage(partialValue, totalValue) {
  return (100 * partialValue) / totalValue;
} 

button.addEventListener('click', function(){
    const total = (Number(initialPrice.value)) * (Number(stockNumber.value))
    const profitOrLoss = ((Number(currentPrice.value)) * (Number(stockNumber.value))) - total
    let percent = `${percentage(profitOrLoss, total)}%`
    result.innerHTML = `You got a ${profitOrLoss > 0 ? 'profit' : 'loss'} of ${profitOrLoss} that is ${percent}`
    
})
