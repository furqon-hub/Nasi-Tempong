// Menampilkan notifikasi saat menu ditambahkan ke wishlist

document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("produkInput");
  const tambahBtn = document.getElementById("tambahBtn");
  const daftarProduk = document.getElementById("daftarProduk");

  tambahBtn.addEventListener("click", function () {
    const namaMenu = input.value.trim();
    if (namaMenu === "") return;
    // Tambah ke daftar
    const li = document.createElement("li");
    li.textContent = namaMenu;
    daftarProduk.appendChild(li);
    // Notifikasi alert sederhana
    alert(`Menu "${namaMenu}" ditambahkan ke wishlist!`);
    input.value = "";
    input.focus();
  });
});
