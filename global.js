function daysSince(date2, colored) {
  date1 = new Date().toLocaleDateString();
  date2 = date2.substr(0, 10);

  // The number of milliseconds in one day
  const ONE_DAY = 1000 * 60 * 60 * 24;

  // Calculate the difference in milliseconds
  const differenceMs = Math.abs(new Date(date1) - new Date(date2));

  const days = Math.round(differenceMs / ONE_DAY)

  if (colored === true) {
    if (days < 360) {
      var color = "#800000";
    }
    if (days < 270) {
      var color = "#ff4000";
    }
    if (days < 180) {
      var color = "#ff8000";
    }
    if (days < 90) {
      var color = "#ffff00";
    }
    if (days < 10) {
      var color = "#ffffff";
    }
  }

  // Convert back to days and return
  return [days, color];
}

async function MKP(parent, exclude) {
  parent = document.querySelector(parent);
  const ughdfsiygh = await fetch("https://api.github.com/users/Spelis123/repos");
  const asfas = await ughdfsiygh.json();

  let repos = [];

  asfas.forEach(element => {
    if (!exclude.includes(element.name)) {
      repos.push(element);
    }
  });

  repos.forEach(repo => {
    const project = document.createElement("div");
    project.className = "project";
    project.onclick = function () {
      window.location.href = "/project/?r=" + repo.name
    }


    const bg = document.createElement("img");
      bg.src = "/img/repo/" + repo.name + ".png";
      bg.onerror = function () {
        bg.src = "/img/repo/unknown.png"
      }


    const text = document.createElement("div");
      text.className = "text";
      const name = document.createElement("h4");
        name.textContent = repo.name;
      const desc = document.createElement("div");
        desc.textContent = '"' + repo.description + '"';
      text.appendChild(name);
      text.appendChild(desc);


    project.appendChild(bg);
    project.appendChild(text)
    parent.appendChild(project);
  });
}
