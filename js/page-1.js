document.addEventListener('DOMContentLoaded', () => {
  // Ambil elemen input dan tombol
  const jumlahDonasiInput = document.getElementById('jumlah-donasi');
  const jumlahDonasiLabel = document.querySelector('label[for="jumlah-donasi"]');
  const btnNextPage1 = document.getElementById('btnNextPage1');
  const programRadios = document.querySelectorAll('input[name="program"]');
  const allProgramCards = document.querySelectorAll('.page-1 .program');

  const page1 = document.querySelector('.page-1');
  const page2 = document.querySelector('.page-2');
  const page3 = document.querySelector('.page-3');
  const page4 = document.querySelector('.page-4');

  allProgramCards.forEach(card => {
    card.addEventListener('click', () => {
      allProgramCards.forEach(card => {
        card.classList.remove('selected');
      })
      card.classList.add('selected');
    })
  })

  // Fungsi untuk mengecek apakah program sudah dipilih
  function checkProgramSelection() {
    const selectedProgram = document.querySelector('input[name="program"]:checked');

    if (selectedProgram) {
      // Jika program dipilih, tampilkan input donasi
      jumlahDonasiLabel.classList.add('show');
    } else {
      // Jika program belum dipilih, sembunyikan input donasi dan reset nilainya
      jumlahDonasiLabel.classList.remove('show');
      jumlahDonasiInput.value = '';
    }

    // Panggil fungsi validasi input setelah mengecek program
    checkInputValidity();
  }

  // Fungsi untuk mengecek validitas input
  function checkInputValidity() {
    const selectedProgram = document.querySelector('input[name="program"]:checked');
    const inputValue = jumlahDonasiInput.value.trim();

    // Ekstrak angka dari input (hilangkan Rp. dan pemisah)
    const numericValue = inputValue.replace(/[^0-9]/g, '');

    // Disable tombol jika program belum dipilih atau input kosong
    if (!selectedProgram || numericValue === '') {
      btnNextPage1.disabled = true;
    } else {
      btnNextPage1.disabled = false;
    }
  }

  // Event listener untuk radio button program
  programRadios.forEach(radio => {
    radio.addEventListener('change', checkProgramSelection);
  });
  jumlahDonasiInput.addEventListener('input', checkInputValidity);
  jumlahDonasiInput.addEventListener('keyup', checkInputValidity);
  jumlahDonasiInput.addEventListener('paste', function() {
    setTimeout(checkInputValidity, 10);
  });
  checkProgramSelection();
  jumlahDonasiInput.addEventListener('input', function(e) {
    let value = e.target.value;
    value = value.replace(/[^0-9]/g, '');
    if (value) {
      const formattedValue = parseInt(value).toLocaleString('id-ID');
      e.target.value = 'Rp. ' + formattedValue;
    } else {
      e.target.value = '';
    }
    checkInputValidity();
  });
  jumlahDonasiInput.addEventListener('paste', function(e) {
    setTimeout(() => {
      let value = e.target.value;
      value = value.replace(/[^0-9]/g, '');
      if (value) {
        const formattedValue = parseInt(value).toLocaleString('id-ID');
        e.target.value = 'Rp. ' + formattedValue;
      } else {
        e.target.value = '';
      }
      checkInputValidity();
    }, 10);
  });
  btnNextPage1.addEventListener('click', () => {
    page1.style.display = 'none';
    page2.style.display = 'flex';
    page3.style.display = 'none';
    page4.style.display = 'none';
  });

  document.querySelector('#jumlah-50').addEventListener('click', () => {
    document.querySelector('#jumlah-donasi').value = 'Rp. 50.000';
    document.querySelector('#hasil-jumlah-donasi').innerText = 'Rp. 50.000';
    checkInputValidity()
  })
  document.querySelector('#jumlah-100').addEventListener('click', () => {
    document.querySelector('#jumlah-donasi').value = 'Rp. 100.000';
    document.querySelector('#hasil-jumlah-donasi').innerText = 'Rp. 100.000';
    checkInputValidity()
  })
  document.querySelector('#jumlah-250').addEventListener('click', () => {
    document.querySelector('#jumlah-donasi').value = 'Rp. 250.000';
    document.querySelector('#hasil-jumlah-donasi').innerText = 'Rp. 250.000';
    checkInputValidity()
  })
  document.querySelector('#jumlah-500').addEventListener('click', () => {
    document.querySelector('#jumlah-donasi').value = 'Rp. 500.000';
    document.querySelector('#hasil-jumlah-donasi').innerText = 'Rp. 500.000';
    checkInputValidity()
  })

})