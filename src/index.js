import './style.css';

const clientId = '106558cb9bed438da1dd5a61c7cf01dd';
const clienSecret = 'b4fd420bddfd49b7898748d73902eb20';

const getToken = async () => {
  const result = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${btoa(`${clientId}:${clienSecret}`)}`,
    },
    body: 'grant_type=client_credentials',
  });

  const data = await result.json();
  return data.access_token;
};

const getShow = async (link) => {
  const token = await getToken();
  const toDisplay = !link ? 'https://api.spotify.com/v1/shows/5mriRyXhrPKOll6EKBfdJo/episodes?market=US' : link
  const result = await fetch(toDisplay, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await result.json();
  return data;
};


const callDataShow = async () => {
  const token = await getToken();
  const list = await getShow();
  const FullList =  () =>{
    console.log(list.items.next);
  }
  console.log(list);
  console.log(list.next)
  let tracks = '';

  const image = list.items[0].images[0].url;
  const { name, audio_preview_url } = list.items[0];
  const link = list.items[0].external_urls.spotify;

  const image2 = list.items[1].images[1].url;
  const  name2  = list.items[1].name;
  const prev2 = list.items[1].audio_preview_url;
  const link2 = list.items[1].external_urls.spotify;

  tracks += `<div class="track"><a href="${link}"><img class="album_image" src="${image}" alt="img_${name}"></a> <span>${name}</span> <video controls muted autoplay="disable" class="reproductor"><source src="${audio_preview_url}" type="audio/mpeg"></video></div>`;

  tracks += `<div class="track"><a href="${link2}"><img class="album_image" src="${image2}" alt="img_${name2}"></a> <span>${name2}</span> <video controls muted autoplay="disable" class="reproductor"><source src="${prev2}" type="audio/mpeg"></video></div>`;


  document.getElementById('song').innerHTML = `${tracks}`;
};

callDataShow();
