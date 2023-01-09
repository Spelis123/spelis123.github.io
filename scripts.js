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













function makeBoxDiv(bg, title, link, img, icon, apiLink = '', dlLink = '') {
  // create a div element for the "box"
  const boxDiv = document.createElement('div');
  boxDiv.className = 'box';
  boxDiv.style.setProperty('--boxbg', boxDiv.getAttribute.backgroundColor);
  boxDiv.style.backgroundColor = bg;

  // create a div element for the "text"
  const textDiv = document.createElement('div');
  textDiv.className = 'text';

  // create a heading element for the title
  const titleHeading = document.createElement('h1');
  titleHeading.textContent = title;

  // create an anchor element for the redirect link
  const redirectAnchor = document.createElement('a1');

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
  const cltt = document.createElement('p');
  cltt.className = 'tpt';
  cltt.textContent = 'Copy Link';
  copyLinkAnchor.appendChild(cltt);
  copyLinkDiv.appendChild(copyLinkAnchor);

  if (dlLink.length > 0) {
    const downloadLink = document.createElement('a1');
    downloadLink.innerHTML = '<i class="fa-solid fa-download" title="Download"></i>';
    downloadLink.addEventListener('click', (event) => {
      event.preventDefault();
      location.href = dlLink;
    });
    copyLinkDiv.appendChild(downloadLink);
    const downloadtt = document.createElement('p');
    downloadtt.className = 'tpt';
    downloadtt.textContent = 'Download';
    downloadLink.appendChild(downloadtt);
  }
  else {
    copyLinkDiv.style.width = '8%'
  }
  const parts = link.split('/');
  const theLink = parts[0] + '/' + parts[1] + '/' + parts[2] + '/';
  const codeLink = document.createElement('a1');
  if (theLink.includes("github")) {
    codeLink.innerHTML = '<i class="fa-solid fa-arrow-up-right-from-square" title="Source Code"></i>';
    codeLink.addEventListener('click', (event) => {
      event.preventDefault();
      window.open(link, "Source Code", "height=700,width=1000");
    });
  }
  else {
    codeLink.innerHTML = '<i class="fa-solid fa-arrow-up-right-from-square" title="Open"></i>';
    codeLink.addEventListener('click', (event) => {
      event.preventDefault();
      window.open(link);
    });
  }
    copyLinkDiv.appendChild(codeLink);
    const codett = document.createElement('p');
    codett.className = 'tpt';
    codett.textContent = 'Redirect To ' + theLink;
    codeLink.appendChild(codett);

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
    imageBoxDiv.appendChild(image);
  
    // append the "text", "thing", and "imagebox" divs to the "box" div
    boxDiv.appendChild(textDiv);
    boxDiv.appendChild(iconHeading);
    boxDiv.appendChild(imageBoxDiv);
    if (apiLink.length > 0) {
      fetch(apiLink)
      .then(response => response.json())
      .then(data => {
        const gitLang = document.createElement('a1');
        const gitCreate = document.createElement('a1');
        const gitUpdate = document.createElement('a1');
        const gitWatchers = document.createElement('a1');
        const gitDesc = document.createElement('a1');
        const redirectTextElement = document.createElement('div');

        if (data.language == "Python") {
          gitLang.innerHTML = '<i class="fa-brands fa-python" id="gitInfo" title="Most Used Language: ' + data.language + '"></i>';
        }
        if (data.language == "JavaScript") {
          gitLang.innerHTML = '<i class="fa-brands fa-square-js" id="gitInfo" title="Most Used Language: ' + data.language + '"></i>';
        }
        redirectTextElement.appendChild(gitLang);
        gitLang.style.fontSize = "20px"

        gitCreate.innerHTML = ' <i class="fa-solid fa-file-circle-plus" id="gitInfo" title="Created At: ' + data.created_at.substring(0,10) + '"></i>'
        redirectTextElement.appendChild(gitCreate);
        gitCreate.style.fontSize = "18px"

        gitUpdate.innerHTML = ' <i class="fa-solid fa-code-commit" id="gitInfo" title="Last Updated: ' + data.updated_at.substring(0,10) + '"></i>'
        redirectTextElement.appendChild(gitUpdate);
        gitUpdate.style.fontSize = "20px"

        gitWatchers.innerHTML = ' <i class="fa-solid fa-eye" id="gitInfo" title="Watchers: ' + data.watchers_count + '"></i>'
        redirectTextElement.appendChild(gitWatchers);
        gitWatchers.style.fontSize = "20px"

        gitDesc.innerHTML = ' <i class="fa-solid fa-d" id="gitInfo" title="Description:\n' + data.description + '"></i>'
        redirectTextElement.appendChild(gitDesc);
        gitDesc.style.fontSize = "20px"

        redirectAnchor.appendChild(redirectTextElement);
      })
    }
    else {
      const redirectTextElement = document.createElement('p1');
      redirectTextElement.textContent = 'project aint on github so nothing here';
      redirectAnchor.appendChild(redirectTextElement);
    }
    // return the "box" div
    return boxDiv;
  }











