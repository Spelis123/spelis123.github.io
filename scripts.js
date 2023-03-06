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








function makeBoxDiv(title, link, img, apiLink = '', dlLink = '') {
  const boxDiv = document.createElement('div');
  boxDiv.className = 'box';

  const textDiv = document.createElement('div');
  textDiv.className = 'text';

  const titleHeading = document.createElement('h1');
  titleHeading.textContent = title;

  link = 'https://github.com/Spelis123/' + link

  const ImageBox = document.createElement('div');
  ImageBox.className = 'imagebox'
  ImageBox.style.backgroundImage = "url('" + img + "')"
  boxDiv.appendChild(ImageBox)

  textDiv.appendChild(titleHeading);
  
    boxDiv.appendChild(textDiv);
    const infoDiv = document.createElement('div')
    infoDiv.className = 'infoDiv'
    infoDiv.style.backgroundColor = '#202020'
    infoDiv.style.boxShadow = "inset 0 0 50px #000000"
    boxDiv.appendChild(infoDiv)

    const gitInfoDiv = document.createElement('div');
    gitInfoDiv.style.height = "66%";
    gitInfoDiv.style.width = "100%"
    gitInfoDiv.style.display = "block";
    gitInfoDiv.style.padding = '5px';
    gitInfoDiv.className = 'gitInfoDiv'
    infoDiv.appendChild(gitInfoDiv)

    if (apiLink.length > 0) {
      fetch('https://api.github.com/repos/Spelis123/' + apiLink)
      .then(response => response.json())
      .then(data => {
        const gitLang = document.createElement('p');gitLang.style.width = "fit-content";
        const gitCreate = document.createElement('p');
        const gitUpdate = document.createElement('p');
        const gitWatchers = document.createElement('p');
        const gitDesc = document.createElement('p');
        const gitFork = document.createElement('p');
        const gitLicense = document.createElement('p');
        const gitTopics = document.createElement('p');

        gitLang.innerHTML = '<i class="fa-duotone fa-language" title="Language"></i> ' + data.language
        gitWatchers.innerHTML = '<i class="fa-duotone fa-eye" title="Number Of Watchers | Repository Publicity"></i> ' + data.watchers_count + ' : ' + data.visibility
        gitCreate.innerHTML = '<i class="fa-duotone fa-calendar-circle-plus" title="Date Created"></i> ' + data.created_at.substring(0,10)
        gitUpdate.innerHTML = '<i class="fa-duotone fa-calendar-circle-exclamation" title="Date Last Updated"></i> ' + data.updated_at.substring(0,10)
        gitDesc.innerHTML = '<i class="fa-duotone fa-message-smile" title="Description"></i> "' + data.description + '"'
        gitFork.innerHTML = '<i class="fa-duotone fa-fork" title="Number Of Forks | Forkable"></i> ' + data.forks_count + ' : ' + data.allow_forking
        gitLicense.innerHTML = '<i class="fa-duotone fa-id-card" title="License"></i> ' + data.license
        if (data.topics != '') {gitTopics.innerHTML = '<i class="fa-duotone fa-tag" title="Tags"></i> <a class="tag">' + data.topics.slice(0,4).join('</a><a class="tag">')}
        else {gitTopics.innerHTML = '<i class="fa-duotone fa-tag" title="Tags"></i> No Tags' }

        gitInfoDiv.appendChild(gitLang)
        gitInfoDiv.appendChild(gitWatchers)
        gitInfoDiv.appendChild(gitCreate)
        gitInfoDiv.appendChild(gitUpdate)
        gitInfoDiv.appendChild(gitDesc)
        gitInfoDiv.appendChild(gitFork)
        gitInfoDiv.appendChild(gitLicense)
        gitInfoDiv.appendChild(gitTopics)

        if (gitTopics.querySelectorAll('a.tag')[0]) {
        gitTopics.querySelectorAll('a.tag')[0].href = 'https://github.com/topics/' + gitTopics.querySelectorAll('a.tag')[0].textContent
        }
        if (gitTopics.querySelectorAll('a.tag')[1]) {
          gitTopics.querySelectorAll('a.tag')[1].href = 'https://github.com/topics/' + gitTopics.querySelectorAll('a.tag')[1].textContent
          }
        if (gitTopics.querySelectorAll('a.tag')[2]) {
          gitTopics.querySelectorAll('a.tag')[2].href = 'https://github.com/topics/' + gitTopics.querySelectorAll('a.tag')[2].textContent
        }
        if (gitTopics.querySelectorAll('a.tag')[3]) {
          gitTopics.querySelectorAll('a.tag')[3].href = 'https://github.com/topics/' + gitTopics.querySelectorAll('a.tag')[3].textContent
        }
        if (gitTopics.querySelectorAll('a.tag')[4]) {
          gitTopics.querySelectorAll('a.tag')[4].href = 'https://github.com/topics/' + gitTopics.querySelectorAll('a.tag')[4].textContent
        }
      })
      .catch(error => console.error('error occured on' + title + error))
      
    }
    else {
        const gitLang = document.createElement('p');
        const gitCreate = document.createElement('p');
        const gitUpdate = document.createElement('p');
        const gitWatchers = document.createElement('p');
        const gitDesc = document.createElement('p');
        const gitFork = document.createElement('p');
        const gitLicense = document.createElement('p');
        const gitTopics = document.createElement('p');

        gitLang.innerHTML = '<i class="fa-duotone fa-language" title="Language"></i> NA'
        gitWatchers.innerHTML = '<i class="fa-duotone fa-eye" title="Number Of Watchers | Repository Publicity"></i> NA : NA'
        gitCreate.innerHTML = '<i class="fa-duotone fa-calendar-circle-plus" title="Date Created"></i> NANA-NA-NA'
        gitUpdate.innerHTML = '<i class="fa-duotone fa-calendar-circle-exclamation" title="Date Last Updated"></i> NANA-NA-NA'
        gitDesc.innerHTML = '<i class="fa-duotone fa-message-smile" title="Description"></i> NA'
        gitFork.innerHTML = '<i class="fa-duotone fa-fork" title="Number Of Forks | Forkable"></i> NA : NA'
        gitLicense.innerHTML = '<i class="fa-duotone fa-id-card" title="License"></i> NA'
        gitTopics.innerHTML = '<i class="fa-duotone fa-tag" title="Tags"></i> NA'

        gitInfoDiv.appendChild(gitLang)
        gitInfoDiv.appendChild(gitWatchers)
        gitInfoDiv.appendChild(gitCreate)
        gitInfoDiv.appendChild(gitUpdate)
        gitInfoDiv.appendChild(gitDesc)
        gitInfoDiv.appendChild(gitFork)
        gitInfoDiv.appendChild(gitLicense)
        gitInfoDiv.appendChild(gitTopics)
    }

    const actionDiv = document.createElement('div')
    actionDiv.style.height = "31%"
    actionDiv.style.width = "100%"
    actionDiv.className = 'actionDiv'
    infoDiv.appendChild(actionDiv)

    const copyLink = document.createElement('a')
    const downloadLink = document.createElement('a')
    const sourceLink = document.createElement('a')

    copyLink.addEventListener('click', function() {
      copyTextToClipboard(link);
    })
    copyLink.href = ""
    copyLink.innerHTML = '<i class="fa-duotone fa-circle-c"></i>'
    copyLink.title = "Copy Link"
    copyLink.className = 'actionButton'

    if (dlLink.substring(0,8) == 'https://') {downloadLink.href = dlLink;downloadLink.title = "Redirect To External Download Page";downloadLink.innerHTML = '<i class="fa-duotone fa-circle-plus"></i>'}
    else {downloadLink.href = link + '/' + dlLink;downloadLink.title = "Download";downloadLink.innerHTML = '<i class="fa-duotone fa-circle-down"></i>'}
    downloadLink.className = 'actionButton'

    sourceLink.href = link
    sourceLink.innerHTML = '<i class="fa-duotone fa-circle-up-right"></i>'
    copyLink.title = "Source Code"
    sourceLink.className = 'actionButton'

    actionDiv.appendChild(copyLink)
    actionDiv.appendChild(downloadLink)
    actionDiv.appendChild(sourceLink)

    //* copy     <i class="fa-solid fa-circle-c"></i>
    //* download <i class="fa-solid fa-circle-down"></i>
    //* source   <i class="fa-solid fa-circle-up-right"></i>

    return boxDiv;
  }