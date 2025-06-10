document.addEventListener('DOMContentLoaded', () => {
  const btnNextPage3 = document.getElementById('btnNextPage3');
  const btnPrevPage3 = document.getElementById('btnPrevPage3');
  const page1 = document.querySelector('.page-1');
  const page2 = document.querySelector('.page-2');
  const page3 = document.querySelector('.page-3');
  const page4 = document.querySelector('.page-4');

  btnNextPage3.disabled = true;


  function checkPaymentMethod() {
    const radioButtons = document.querySelectorAll('input[name="metode_pembayaran"]');

    let isSelected = false;
    radioButtons.forEach(radio => {
      if (radio.checked) {
        isSelected = true;
      }
    });

    btnNextPage3.disabled = !isSelected;
  }

  const radioButtons = document.querySelectorAll('input[name="metode_pembayaran"]');
  radioButtons.forEach(radio => {
    radio.addEventListener('change', checkPaymentMethod);
  });
  checkPaymentMethod();


  btnNextPage3.addEventListener('click', () => {
    page1.style.display = 'none';
    page2.style.display = 'none';
    page3.style.display = 'none';
    page4.style.display = 'flex';
  })
  btnPrevPage3.addEventListener('click', () => {
    page1.style.display = 'none';
    page2.style.display = 'flex';
    page3.style.display = 'none';
    page4.style.display = 'none';
  })
})
