/** @format */

// funntion button to top
// inisialisasi button to top
let button = document.getElementById("btn-to-top");

// untuk menyembunyikan dan menampilkan button to top
window.onscroll = function () {
  btnHidden();
};

function btnHidden() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

// untuk mengakses button to top dan otomatis meng-scroll ke atas
function goToTop() {
  document.documentElement.scrollTop = 0;
}
// end funntion button to top
