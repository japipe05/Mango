const orderButton = document.querySelector('#orderButton');
const message = document.querySelector('#message');

orderButton.addEventListener('click', () => {
  message.textContent = '¡Excelente elección! Mango con crema de 267 ml por $12.000 COP.';
  orderButton.textContent = '¡Elegido!';
  orderButton.setAttribute('aria-pressed', 'true');
});
