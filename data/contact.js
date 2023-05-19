$(document).ready(function () {
  let lang = localStorage.getItem("lang");

  const contact_data = {
    contact_title: lang === "en" ? "Contact" : "ارتباط با من",
    contact_items: [
      {
        img: "../assets/images/location.png",
        title: lang === "en" ? globalData.enAddress : globalData.faAddress,
        active: globalData.enAddress || globalData.faAddress ? true : false,
      },
      {
        img: "../assets/images/phone.png",
        title: globalData.phone,
        active: globalData.phone ? true : false,
      },
      {
        img: "../assets/images/mail.png",
        title: globalData.email,
        active: globalData.email ? true : false,
      },
      {
        img: "../assets/images/twitter.png",
        url: globalData.twitter,
        name: globalData.twitterTitle,
        active: globalData.twitter ? true : false,
      },
      {
        img: "../assets/images/whatsapp.png",
        url: globalData.whatsapp,
        name: globalData.whatsappTitle,
        active: globalData.whatsapp ? true : false,
      },
      {
        img: "../assets/images/google-scholar.png",
        url: globalData.googleScholar,
        name: globalData.googleScholarTitle,
        active: globalData.googleScholar ? true : false,
      },
      {
        img: "../assets/images/github.png",
        url: globalData.github,
        name: globalData.githubTitle,
        active: globalData.github ? true : false,
      },
      {
        img: "../assets/images/linkedin.png",
        url: globalData.linkedin,
        name: globalData.linkedinTitle,
        active: globalData.linkedin ? true : false,
      },
    ],
  };

  function homeData() {
    document.getElementById("page_title").innerHTML =
      contact_data.contact_title;
    document.getElementById("contact_title").innerHTML =
      contact_data.contact_title;
    document.getElementById("contact_data").innerHTML =
      contact_data.contact_items
        .filter((item) => item.active)
        .map(
          (link) =>
            `<li>
              <img src=${link.img} alt=${link.title} /> 
              ${
                link.url
                  ? `<a href=${link.url} target='_blank'>
                      ${link.name ? link.name : link.url} 
                    </a>`
                  : `<p>${link.title}</p>`
              }
            </li>`
        )
        .join("");
  }

  homeData();
});
