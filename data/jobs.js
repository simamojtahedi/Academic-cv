$(document).ready(function () {
  let lang = localStorage.getItem("lang");

  function jobsData() {
    document.getElementById("page_title").innerText =
      lang === "en" ? "Jobs" : " سوابق شغلی ";

    document.getElementById("jobs_title").innerHTML =
      lang === "en" ? enJobsPageData.title : faJobsPageData.title;

    document.getElementById("jobs_data").innerHTML = (
      lang === "en" ? enJobsPageData.items : faJobsPageData.items
    )
      .map(
        (job) =>
          `<div class='job_item'>
            <div class='job_header'>
              <div>
                <h1>${job.title}${lang === "en" ? "," : "،"}</h1>
                <h2> ${job.company}</h2>
              </div>
              <div>
                <span>${job.startData} - ${
            job.endDate ? job.endDate : lang === "en" ? "Now" : " تاکنون "
          }</span>
                <span class='job_location'>${job.location}</span>
              </div>
            </div>
            <p>${job.abstract}</p>
            ${
              job.achievements.length > 0
                ? `<div class="job_achievements">
                  <ul>
                    ${job.achievements
                      .map((achievement) => `<li>${achievement}</li>`)
                      .join("")}
                  </ul>
                </div>`
                : ""
            }
        </div>`
      )
      .join("");
  }

  jobsData();
});
