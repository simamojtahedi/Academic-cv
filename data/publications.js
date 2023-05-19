$(document).ready(function () {
  let lang = localStorage.getItem("lang");

  const setPublicationData = (id, data) => {
    document.getElementById(id).innerHTML = data
      .map(
        (publication) =>
          `
        <div class='publications_item'>
        <div class='publications_header'>
          ${
            publication.writers.length > 0
              ? publication.writers
                  .map((writer) => `<span>${writer}</span>`)
                  .join(", ")
              : ""
          }
          ${publication.date ? `<span>(${publication.date}).</span>` : ""}
          <h2>${publication.title}</h2>
        </div>
        <p>${publication.abstract}</p>
        <ul class='publications_footer'>
          ${
            publication.link &&
            `<li>
                <a href=${publication.link} target="_blank"> ${
              lang === "en" ? "View" : " مشاهده"
            } </a>
              </li>`
          }
            ${
              publication.github &&
              `<li>
                  <a href=${publication.github} target="_blank">  ${
                lang === "en" ? "Github" : "گیت‌هاب"
              }</a>
                </li>`
            }
          
        </ul>
      </div>
     `
      )
      .join("");
  };

  function publicationsData() {
    document.getElementById("page_title").innerText =
      lang === "en" ? "Publications" : "مقالات";

    document.getElementById("publications_type_one_title").innerHTML =
      lang === "en"
        ? enPublicationsPageData.type_one_title
        : faPublicationsPageData.type_one_title;

    setPublicationData(
      "publications_type_one_data",
      lang === "en"
        ? enPublicationsPageData.type_one_items
        : faPublicationsPageData.type_one_items
    );

    document.getElementById("publications_type_two_title").innerHTML =
      lang === "en"
        ? enPublicationsPageData.type_two_title
        : faPublicationsPageData.type_two_title;

    setPublicationData(
      "publications_type_two_data",
      lang === "en"
        ? enPublicationsPageData.type_two_items
        : faPublicationsPageData.type_two_items
    );

    document.getElementById("publications_type_three_title").innerHTML =
      lang === "en"
        ? enPublicationsPageData.type_three_title
        : faPublicationsPageData.type_three_title;

    setPublicationData(
      "publications_type_three_data",
      lang === "en"
        ? enPublicationsPageData.type_three_items
        : faPublicationsPageData.type_three_items
    );

    document.getElementById("publications_type_four_title").innerHTML =
      lang === "en"
        ? enPublicationsPageData.type_four_title
        : faPublicationsPageData.type_four_title;

    setPublicationData(
      "publications_type_four_data",
      lang === "en"
        ? enPublicationsPageData.type_four_items
        : faPublicationsPageData.type_four_items
    );
  }

  publicationsData();
});
