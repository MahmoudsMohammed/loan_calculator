// get ui elements
const loan = document.getElementById('loan'),
  interest = document.getElementById('interest'),
  year = document.getElementById('years'),
  calc = document.getElementById('calc'),
  monthly = document.getElementById('monthly'),
  t_payment = document.getElementById('t-payment'),
  t_interest = document.getElementById('t-interest'),
  result = document.querySelector('.result'),
  loader = document.getElementById('loader')

// Add event to calculate
calc.addEventListener('click', (e) => {
  result.style.display = 'none'
  loader.style.display = 'block'
  setTimeout(getresults, 2000)
})

function getresults() {
  loader.style.display = 'none';
  const amount = parseFloat(loan.value),
    inte = parseFloat(interest.value) / 100 / 12,
    y = parseFloat(year.value) * 12

  // check for inputs
  if (amount && inte && y) {
    const x = Math.pow(1 + inte, y),
      mon = (amount * x * inte) / (x - 1)

    monthly.value = mon.toFixed(2)
    t_payment.value = (mon * y).toFixed(2)
    t_interest.value = (t_payment.value - amount).toFixed(2)
    result.style.display = 'block'
  } else {
    const alert = document.getElementById('alert')
    alert.style.display = 'block'
    setTimeout(() => (alert.style.display = 'none'), 2000)
  }
}
