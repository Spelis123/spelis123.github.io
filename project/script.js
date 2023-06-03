document.addEventListener("DOMContentLoaded", function () {
  repo = new URLSearchParams(document.location.search).get("r")
  fetchProject(repo)
    .then(data => {
      console.log(data);
      document.title = repo + " - Spelis's Projects";
      document.body.style.display = "inline-block";
      var archived = (data.archived === true) ? '<i class="fa-xs fa-solid fa-lock" title="Archived" style="color:orange"></i>' : '<i class="fa-xs fa-solid fa-lock-open" title="Not archived"></i>';
      document.body.innerHTML = `<div class="fs cntr"><div>
      <a class="PROJECTbackButton" href="../#projects" style="width:fit-content; margin-right: 10px;">[<]</a></div><hr class="v" id="backbtn"><div class="PROJECT">
      <h1 class="PROJECTtitle" style="text-align:center;"><a href="${data.html_url}">${data.name} ${archived}</a></h1>
      <p class="PROJECTinfo"><span style="text-align:center;">${data.full_name}</span><br>Written in ${data.language}<br><br>
      Updated <span style="color: ${daysSince(data.updated_at, true)[1]} !important;">${daysSince(data.updated_at)[0]}</span> days ago at <span style="color: ${daysSince(data.updated_at, true)[1]} !important;">${data.updated_at.substr(5, 5).replace("-", "/")}</span><br>
      Last pushed <span style="color: ${daysSince(data.pushed_at, true)[1]} !important;">${daysSince(data.pushed_at)[0]}</span> days ago at <span style="color: ${daysSince(data.pushed_at, true)[1]} !important;">${data.pushed_at.substr(5, 5).replace("-", "/")}</span><br><br>
      What Is It? "<span style="font-style:italic;">${data.description}</span>"</p><br>
      <div class="PROJECTcontrols">
      <a href="${data.html_url}">[View Repo]</a><a href="${data.html_url + '/archive/refs/heads/' + data.default_branch + '.zip'}">[Download]</a><a href="javascript:clipboard('${window.location.href}')">[Share/Copy Link]</a>
      </div></div></div>`;
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
})

function fetchProject(r) {
  return fetch('https://api.github.com/repos/Spelis123/' + r)
    .then(response => response.json())
    .then(data => {
      return data;
    });
}