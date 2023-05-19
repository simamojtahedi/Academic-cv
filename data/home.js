$(document).ready(function () {
  let lang = localStorage.getItem("lang");

  const home_data = {
    image: globalData.image,
    links: [
      {
        name: `mailto:${globalData.email}`,
        active: globalData.email ? true : false,
        img: "../assets/images/mail.png",
      },
      {
        name: globalData.whatsapp,
        active: globalData.whatsapp ? true : false,
        img: "../assets/images/whatsapp.png",
      },
      {
        name: globalData.twitter,
        active: globalData.twitter ? true : false,
        img: "../assets/images/twitter.png",
      },
      {
        name: globalData.googleScholar,
        active: globalData.googleScholar ? true : false,
        img: "../assets/images/google-scholar.png",
      },
      {
        name: globalData.linkedin,
        active: globalData.linkedin ? true : false,
        img: "../assets/images/linkedin.png",
      },
      {
        name: globalData.github,
        active: globalData.github ? true : false,
        url: "/",
        img: "../assets/images/github.png",
      },
      {
        name: globalData.resume,
        active: globalData.resume ? true : false,
        url: "/",
        img: "../assets/images/resume.png",
      },
    ],
  };

  function homeData() {
    document.getElementById("page_title").innerText =
      lang === "en" ? enHomePageData.name : faHomePageData.name;

    document.getElementById("home_image").src = home_data.image
      ? home_data.image
      : "";
    document.getElementById("home_name").innerText =
      lang === "en" ? enHomePageData.name : faHomePageData.name;
    document.getElementById("home_job_title").innerText =
      lang === "en" ? enHomePageData.jobTitle : faHomePageData.jobTitle;
    document.getElementById("home_links").innerHTML = home_data.links
      .filter((item) => item.active)
      .map(
        (link) =>
          `<li>
              <a href=${link.name} target='_blank'><img src=${link.img} alt=${link.name} /> </a>
            </li>`
      )
      .join("");

    document.getElementById("home_title").innerText =
      lang === "en" ? enHomePageData.home_title : faHomePageData.home_title;
    document.getElementById("home_content").innerHTML =
      lang === "en" ? enHomePageData.home_content : faHomePageData.home_content;
  }

  homeData();
});
