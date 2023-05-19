$(document).ready(function () {
  let lang = localStorage.getItem("lang");

  function homeData() {
    document.getElementById("page_title").innerText =
      lang === "en" ? "Research" : "تحقیقات";

    document.getElementById("research_title").innerHTML =
      lang === "en" ? enResearchPageData.title : faResearchPageData.title;
    document.getElementById("research_data").innerHTML =
      lang === "en" ? enResearchPageData.content : faResearchPageData.content;
  }

  homeData();
});
