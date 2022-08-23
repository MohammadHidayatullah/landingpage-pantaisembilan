// function menu toggle
// inisialisasi toggle menu
let menuToggle = document.getElementById("menu");
let toggle = document.getElementById("toggle");
let closeToggle = document.getElementById("close-toggle");

// untuk menampilkan menu
function showToggle() {
  menuToggle.style.right = "0";
  toggle.style.display = "none";
  closeToggle.style.display = "flex";
}

// untuk menyembunyikan menu
function closetoggle() {
  menuToggle.style.right = "-40vw";
  closeToggle.style.display = "none";
  toggle.style.display = "flex";
}
// endfunction menu toggle

// funntion button to top
// inisialisasi button to top
let button = document.getElementById("btn-to-top");

// untuk menyembunyikan dan menampilkan button to top
window.onscroll = function () {
  btnHidden();
};

function btnHidden() {
  if (document.documentElement.scrollTop > 10) {
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
