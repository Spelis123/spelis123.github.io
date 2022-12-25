function copyTextToClipboard(text) {
    // create a temporary textarea element
    const textarea = document.createElement('textarea');
  
    // set the text of the textarea to the text to copy
    textarea.value = text;
  
    // add the textarea to the HTML body
    document.body.appendChild(textarea);
  
    // select the text in the textarea
    textarea.select();
  
    // copy the selected text to the clipboard
    document.execCommand('copy');
  
    // remove the textarea from the HTML body
    document.body.removeChild(textarea);
}
function makeBoxDiv(id, title, link, img, icon, redirectText = "Open Github Page", imgid = "") {
    // create a div element for the "box"
    const boxDiv = document.createElement('div');
    boxDiv.className = 'box';
    boxDiv.id = id;
  
    // create a link element for the redirect link
    const redirectLink = document.createElement('a');
    redirectLink.href = link;
  
    // create a div element for the "text"
    const textDiv = document.createElement('div');
    textDiv.className = 'text';
  
    // create a heading element for the title
    const titleHeading = document.createElement('h1');
    titleHeading.textContent = title;
  
    // create an anchor element for the redirect link
    const redirectAnchor = document.createElement('a1');
  
    // create a text element for the redirect link
    const redirectTextElement = document.createElement('p1');
    redirectTextElement.innerHTML = `<i class="fa-solid fa-arrow-up-right-from-square"></i> ${redirectText}`;
    redirectAnchor.appendChild(redirectTextElement);
  
    // create a div element for the "copylink"
    const copyLinkDiv = document.createElement('div');
    copyLinkDiv.className = 'copylink';
  
    // create an anchor element for the copy link
    const copyLinkAnchor = document.createElement('a1');
copyLinkAnchor.innerHTML = '<i class="fa-solid fa-copy" title="Copy Link"></i>';
copyLinkAnchor.addEventListener('click', (event) => {
  event.preventDefault();
  navigator.clipboard.writeText(link);
});
copyLinkDiv.appendChild(copyLinkAnchor);
  
    // append the title heading and redirect anchor to the "text" div
    textDiv.appendChild(titleHeading);
    textDiv.appendChild(redirectAnchor);
    textDiv.appendChild(copyLinkDiv);
  
    // create a heading element for the icon
    const iconHeading = document.createElement('h1');
    iconHeading.className = 'thing';
    iconHeading.id = 'gold';
    iconHeading.innerHTML = `<i class="fa-brands fa-${icon}"></i>`;
  
    // create a div element for the "imagebox"
    const imageBoxDiv = document.createElement('div');
    imageBoxDiv.className = 'imagebox';
  
    // create an image element for the project image
    const image = document.createElement('img');
    image.src = img;
    image.id = imgid;
    imageBoxDiv.appendChild(image);
  
    // append the "text", "thing", and "imagebox" divs to the "box" div
    redirectLink.appendChild(textDiv);
    redirectLink.appendChild(iconHeading);
    redirectLink.appendChild(imageBoxDiv);
    boxDiv.appendChild(redirectLink);
  
    // return the "box" div
    return boxDiv;
  }
function makeBoxDivGitHub(repo) {
    // fetch the repository information from the GitHub API
    const response = fetch(`https://api.github.com/repos/${repo}`);
    const { id, name, html_url, owner: { avatar_url: img }, description } = response.json();
  
    // create a div element for the "box"
    const boxDiv = document.createElement('div');
    boxDiv.className = 'box';
    boxDiv.id = id;
  
    // create a link element for the redirect link
    const redirectLink = document.createElement('a');
    redirectLink.href = html_url;
  
    // create a div element for the "text"
    const textDiv = document.createElement('div');
    textDiv.className = 'text';
  
    // create a heading element for the title
    const titleHeading = document.createElement('h1');
    titleHeading.textContent = name;
  
    // create a paragraph element for the description
    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.textContent = description;
  
    // create a div element for the "copylink"
    const copyLinkDiv = document.createElement('div');
    copyLinkDiv.className = 'copylink';
  
    // create an anchor element for the copy link
    const copyLinkAnchor = document.createElement('a1');
    copyLinkAnchor.innerHTML = '<i class="fa-solid fa-copy" title="Copy Link"></i>';
    copyLinkAnchor.addEventListener('click', (event) => {
      event.preventDefault();
      navigator.clipboard.writeText(html_url);
    });
    copyLinkDiv.appendChild(copyLinkAnchor);
  
    // append the title heading and description paragraph to the "text" div
    textDiv.appendChild(titleHeading);
    textDiv.appendChild(descriptionParagraph);
    textDiv.appendChild(copyLinkDiv);
  
    // create a div element for the "imagebox"
    const imageBoxDiv = document.createElement('div');
    imageBoxDiv.className = 'imagebox';
  
    // create an image element for the repository owner's avatar
    const image = document.createElement('img');
    image.src = img;
    imageBoxDiv.appendChild(image);
  
    // append the "text" and "imagebox" divs to the redirect link
    redirectLink.appendChild(textDiv);
    redirectLink.appendChild(imageBoxDiv);
  
    // append the redirect link to the "box" div
    boxDiv.appendChild(redirectLink);
  
    // return the "box" div
    return boxDiv;
  }
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
