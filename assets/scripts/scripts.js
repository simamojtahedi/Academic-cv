$(document).ready(function () {
  const lang = localStorage.getItem("lang");

  // ---------- Language Handler
  if (!lang) {
    localStorage.setItem("lang", "en");
  }

  if (lang === "fa") {
    document.getElementById("content_wrapper").classList.add("rtl_wrapper");
    document.getElementById("languageIcon").src = "../assets/images/en.png";
    document.getElementById("languageText").innerText = "English";
  } else {
    document.getElementById("content_wrapper").classList.add("ltr_wrapper");
    document.getElementById("languageIcon").src = "../assets/images/ir.png";
    document.getElementById("languageText").innerText = "فارسی";
  }
});
