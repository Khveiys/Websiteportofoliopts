// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    // Toggle nav list and burger class
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

// Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const text = "Veasna"; // Ganti teks sesuai keinginan
  let index = 0;
  let isDeleting = false;

  function typeText() {
    let typedElement = document.getElementById("typed");

    if (!isDeleting && index < text.length) {
      // Mengetik satu per satu
      typedElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeText, 200);
    } else if (isDeleting && index > 0) {
      // Menghapus satu per satu
      typedElement.innerHTML = text.substring(0, index - 1);
      index--;
      setTimeout(typeText, 100);
    } else {
      // Jika selesai mengetik, tunggu sebentar lalu mulai hapus
      isDeleting = !isDeleting;
      setTimeout(typeText, 2000);
    }
  }

  setTimeout(typeText, 1500);
});