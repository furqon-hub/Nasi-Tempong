// Validasi Form Kontak 
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formKontak");
  if (!form) return;
  const nama = document.getElementById("nama");
  const email = document.getElementById("email");
  const pesan = document.getElementById("pesan");
  let errorMsg = document.getElementById("errorMsg");
  if (!errorMsg) {
    errorMsg = document.createElement("div");
    errorMsg.id = "errorMsg";
    errorMsg.style.color = "#a00000";
    errorMsg.style.margin = "10px 0";
    form.insertBefore(errorMsg, form.querySelector("button[type='submit']"));
  }
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (nama.value === "" || email.value === "" || pesan.value === "") {
      errorMsg.textContent = "Semua field harus diisi.";
    } else {
      errorMsg.textContent = "";
      alert("Pesan berhasil dikirim!");
      form.reset();
    }
  });
});
