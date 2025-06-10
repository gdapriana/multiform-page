document.addEventListener('DOMContentLoaded', () => {
  const hasilProgram = document.querySelectorAll('input[name="program"]');
  const hasilMetodePembayaran = document.querySelectorAll('input[name="metode_pembayaran"]');

  hasilProgram.forEach((radio) => {
    radio.addEventListener('change', () => {
      const selected = document.querySelector('input[name="program"]:checked');
      if (selected) {
        document.querySelector('#hasil-program').innerText = selected.value;
      }
    });
  });

  hasilMetodePembayaran.forEach((radio) => {
    radio.addEventListener('change', () => {
      const selected = document.querySelector('input[name="metode_pembayaran"]:checked');
      if (selected) {
        document.querySelector('#hasil-metode-pembayaran').innerText = selected.value;
      }
    });
  });

  document.querySelector('#nama_lengkap').addEventListener('input', (evt) => {
    document.querySelector('#hasil-nama-lengkap').innerText = document.querySelector('#nama_lengkap').value;
  })

  document.querySelector('#jumlah-donasi').addEventListener('input', (evt) => {
    document.querySelector('#hasil-jumlah-donasi').innerText = document.querySelector('#jumlah-donasi').value;
  })

  document.querySelector('#email').addEventListener('input', (evt) => {
    document.querySelector('#hasil-email').innerText = document.querySelector('#email').value;
  })

  document.querySelector('#no_telepon').addEventListener('input', (evt) => {
    document.querySelector('#hasil-no-telepon').innerText = document.querySelector('#no_telepon').value;
  })

  document.querySelector('#pesan').addEventListener('input', (evt) => {
    document.querySelector('#hasil-pesan').innerText = document.querySelector('#pesan').value;
  })
})
