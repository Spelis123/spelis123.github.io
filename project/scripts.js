window.addEventListener("load", () => {
    // Generate a random number of squares
    const numSquares = Math.floor(Math.random() * 50 + 10);
  
    // Create the squares and add them to the page
    for (let i = 0; i < numSquares; i++) {
      const square = document.createElement("div");
      square.className = "square";
      document.body.appendChild(square);
  
      // Set random position, scale, rotation, and color for the square
      square.style.top = `${Math.random() * 100}%`;
      square.style.left = `${Math.random() * 100}%`;
      square.style.transform = `scale(${Math.random() * 0.5 + 0.5}) rotate(${Math.random() * 360}deg)`;
      square.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, ${Math.random() * 14 + 1}%)`;
  
      // Make the square glitch and move randomly
      setInterval(() => {
        square.style.top = `${Math.random() * 100}%`;
        square.style.left = `${Math.random() * 100}%`;
        square.style.transform = `scale(${Math.random() * 0.25 + 1}) rotate(${Math.random() * 360}deg)`;
        square.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, ${Math.random() * 63 + 1}%)`;
      }, 250);
    }
  });

function makeBoxFromURL() {

    const urlParams = new URLSearchParams(window.location.search);

    const t = urlParams.get('t');
    const d = urlParams.get('d');
    const gl = urlParams.get('gl');
    const dll = urlParams.get('dll');
  
    // create the box element
    const box = document.createElement('div');
    box.className = 'downloadbox';

    // create the title element
    const title = document.createElement('h1');
    title.textContent = t;
  
    // create the description element
    const description = document.createElement('p');
    description.textContent = d;
  
    const downloadLink = document.createElement('a');
    downloadLink.href = dll;
    downloadLink.textContent = 'Download';
    downloadLink.style.marginLeft = '122px'
    downloadLink.addEventListener('click', (event) => {
      event.preventDefault();
      window.open(dll);
    });

    // create the GitHub link element
    const githubLink = document.createElement('a');
    githubLink.href = gl;
    githubLink.textContent = 'View on GitHub';
    githubLink.style.float = 'left'
    githubLink.addEventListener('click', (event) => {
      event.preventDefault();
      window.open(gl);
    }); 
  


    const siteLink = document.createElement('a');
    siteLink.href = dll;
    siteLink.textContent = 'Back To Homepage';
    siteLink.style.float = 'right'
    siteLink.addEventListener('click', (event) => {
      event.preventDefault();
      window.open('../index.html');
    }); 
  
    // append the elements to the box
    box.appendChild(title);
    box.appendChild(description);
    box.appendChild(downloadLink);
    box.appendChild(githubLink); 
    box.appendChild(siteLink); 
  
    // return the box element
    return box;
  }

function makeDiscordEmbedThing() {

    const urlParams = new URLSearchParams(window.location.search);

    const dt = urlParams.get('dt');
    const dd = urlParams.get('dd');
    const dimg = urlParams.get('dimg');
    const sn = urlParams.get('sn');
    const dli = urlParams.get('dli')

    const ogDescription = document.createElement('meta');
    ogDescription.property = 'og:description';
    ogDescription.content = dd;

    const ogSiteName = document.createElement('meta');
    ogSiteName.property = 'og:site_name';
    ogSiteName.content = sn;

    const ogImage = document.createElement('meta');
    ogImage.property = 'og:image';
    ogImage.content = dimg;

    const ogURL = document.createElement('meta');
    ogURL.property = 'og:url';
    ogURL.content = dli;

    const ogTitle = document.createElement('meta');
    ogTitle.property = 'og:title';
    ogTitle.content = dt;
}

  document.addEventListener('DOMContentLoaded', () => {
    const box = makeBoxFromURL();
    document.body.appendChild(box);
  });
  