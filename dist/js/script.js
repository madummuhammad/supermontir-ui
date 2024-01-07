const toggleButton = document.getElementById("toggleButton");
const navbar = document.getElementById("navbar-default");

document.addEventListener("DOMContentLoaded", function () {
  loadPage("garasi");
});

document.addEventListener("DOMContentLoaded", function () {
  // Default: Tampilkan konten tab pertama
  showContent("baru", document.querySelector(".tab-link"));
});

toggleButton.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
});

// dropdown sidebar
// document.addEventListener("DOMContentLoaded", function () {
//   const button = document.getElementById("dropdownDividerButton");
//   const dropdown = document.getElementById("dropdownDivider");

//   button.addEventListener("click", function () {
//     dropdown.classList.toggle("hidden");
//   });

//   document.addEventListener("click", function (event) {
//     const isClickInside =
//       button.contains(event.target) || dropdown.contains(event.target);
//     if (!isClickInside) {
//       dropdown.classList.add("hidden");
//     }
//   });
// });

// load page dashboard
function loadPage(page) {
  fetch(page + ".html")
    .then((response) => response.text())
    .then((data) => {
      // Memperbarui konten halaman tanpa me-reload
      document.getElementById("content").innerHTML = data;
    })
    .catch((error) => console.error("Error:", error));
}

function showContent(tab, tabLink) {
  // Sembunyikan semua elemen konten
  let allContentElements = document.querySelectorAll('[id^="tab-content-"]');
  allContentElements.forEach(function (element) {
    element.style.display = "none";
  });

  // Tampilkan elemen konten yang sesuai dengan tab yang diklik
  let contentElement = document.getElementById("tab-content-" + tab);
  if (contentElement) {
    contentElement.style.display = "block";
  }

  // Hilangkan kelas 'active' dari semua tab-link
  let allTabLinks = document.querySelectorAll(".tab-link");
  allTabLinks.forEach(function (link) {
    link.classList.remove("active-tab");
  });

  // Tambahkan kelas 'active' pada tab-link yang sedang aktif
  tabLink.classList.add("active-tab");
}

// modal
let popup = document.getElementById("popup-modal");

const showModal = (flag) => {
  popup.classList.toggle("hidden");
};
