document.addEventListener('DOMContentLoaded', () => {
  const btnNextPage2 = document.getElementById('btnNextPage2');
  const btnPrevPage2 = document.getElementById('btnPrevPage2');
  const page1 = document.querySelector('.page-1');
  const page2 = document.querySelector('.page-2');
  const page3 = document.querySelector('.page-3');
  const page4 = document.querySelector('.page-4');

  const namaLengkap = document.getElementById('nama_lengkap');
  const email = document.getElementById('email');
  const noTelepon = document.getElementById('no_telepon');

  // Fungsi untuk memvalidasi form
  function validateFormPage2() {
    const isNamaValid = namaLengkap.value.trim() !== '';
    const isEmailValid = email.value.trim() !== '' && email.checkValidity();
    const isTeleponValid = noTelepon.value.trim() !== '';

    // Enable/disable button berdasarkan validasi
    btnNextPage2.disabled = !(isNamaValid && isEmailValid && isTeleponValid);
  }

  // Fungsi untuk validasi individual field
  function validateFieldPage2(field, errorElement, isEmpty, customMessage = '') {
    if (isEmpty) {
      field.style.borderColor = '#dc3545';
      errorElement.style.display = 'block';
      if (customMessage) {
        errorElement.textContent = customMessage;
      }
    } else {
      field.style.borderColor = '#28a745';
      errorElement.style.display = 'none';
    }
  }

  // Event listeners untuk setiap input
  namaLengkap.addEventListener('input', function() {
    const isEmpty = this.value.trim() === '';
    validateFieldPage2(this, document.getElementById('nama_error'), isEmpty);
    validateFormPage2();
  });

  email.addEventListener('input', function() {
    const isEmpty = this.value.trim() === '';
    const isInvalid = !this.checkValidity() && this.value.trim() !== '';

    if (isEmpty) {
      validateFieldPage2(this, document.getElementById('email_error'), true, 'Email wajib diisi');
    } else if (isInvalid) {
      validateFieldPage2(this, document.getElementById('email_error'), true, 'Format email tidak valid');
    } else {
      validateFieldPage2(this, document.getElementById('email_error'), false);
    }
    validateFormPage2();
  });

  noTelepon.addEventListener('input', function() {
    const isEmpty = this.value.trim() === '';
    validateFieldPage2(this, document.getElementById('telepon_error'), isEmpty);
    validateFormPage2();
  });


  validateFormPage2();

  btnNextPage2.addEventListener('click', () => {
    page1.style.display = 'none';
    page2.style.display = 'none';
    page3.style.display = 'flex';
    page4.style.display = 'none';
  })
  btnPrevPage2.addEventListener('click', () => {
    page1.style.display = 'flex';
    page2.style.display = 'none';
    page3.style.display = 'none';
    page4.style.display = 'none';
  })
})