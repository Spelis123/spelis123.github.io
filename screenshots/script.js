async function fetchSCRN(r) {
  const scrn = await fetch("https://api.github.com/repos/Spelis123/Spelis123/contents/repos/" + r.name + "/1.png?ref=main");
  let repos = [];

  scrn.json().forEach(element => {
    if (!exclude.includes(element.name)) {
      repos.push(element);
    }
  });
  return repos;
}

async function MKC(parent, exclude) {
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
    const scrn = fetchSCRN(repo)
    console.log(scrn);

    const coll = document.createElement("div");
    coll.className = "coll"


    const collcon = document.createElement("div");
    collcon.className = "collcon"
    collcon.style.display = "none";


    const text = document.createElement("div");
    text.className = "text";

    const collbtn = document.createElement("div");
    collbtn.className = "collbtn";
    collbtn.onclick = function () {
      text.classList.toggle("minus")
      if (collcon.style.display == "block") {
        collcon.style.display = "none";
      } else {
        collcon.style.display = "block";
      }
    }



    const bg = document.createElement("img");
    bg.src = "/img/repo/" + repo.name + ".png";
    bg.onerror = function () {
      bg.src = "/img/repo/unknown.png"
    }



    const name = document.createElement("h4");
    name.textContent = repo.name;
    text.appendChild(name);


    collbtn.appendChild(bg);
    collbtn.appendChild(text)
    parent.appendChild(coll);
    coll.appendChild(collbtn)
    coll.appendChild(collcon)
  });
}
