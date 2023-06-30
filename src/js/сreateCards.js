export function createCard({
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  }) {
    const card = document.createElement('div');
    card.classList.add('photo-card');
  
    const imageElement = document.createElement('a');
    imageElement.href = largeImageURL;
    imageElement.setAttribute('data-lightbox', 'gallery');
    card.appendChild(imageElement);
  
    const imageContent = document.createElement('img');
    imageContent.src = webformatURL;
    imageContent.alt = tags;
    imageContent.loading = 'lazy';
    imageElement.appendChild(imageContent);

  const infoList = document.createElement('div')
  infoList.classList.add('info')


  const likesEl = createInfoItem('Likes:', likes);
  infoList.appendChild(likesEl);

  const viewsEl = createInfoItem('Views:', views);
  infoList.appendChild(viewsEl);

  const commentsEl = createInfoItem('Comments:', comments);
  infoList.appendChild(commentsEl);

  const downloadsEl = createInfoItem('Downloads:', downloads);
  infoList.appendChild(downloadsEl);
  
  card.appendChild(infoList);
  return card;
  }

  export function createInfoItem(label, value){

    const infoEl = document.createElement('p');
    infoEl.classList.add('info-el');

    const labelEl = document.createElement('b');

    labelEl.textContent = label;
    infoEl.appendChild(labelEl);
  
    const valueEl = document.createTextNode(`${value}`);
    infoEl.appendChild(valueEl);
  
    return infoEl;
  }