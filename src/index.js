import './style.css';

const clientId = '106558cb9bed438da1dd5a61c7cf01dd';
const clienSecret = 'b4fd420bddfd49b7898748d73902eb20';

const getToken = async () => {
  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(clientId + ":" + clienSecret),
    },
    body: "grant_type=client_credentials",
  });

  const data = await result.json();
  return data.access_token;
}

const getData = async (token) => {
  const result = await fetch('https://api.spotify.com/v1/playlists/2bEVbGRbmxC7pwenhutQJu/tracks', {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + token }
  });
  const data = await result.json();
  // console.log(data);
  return data;
}

const getList = async (token) => {
  const result = await fetch('https://api.spotify.com/v1/playlists/27Ry92QJXlch6Vsn6UxsVL/tracks', {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + token }
  });
  const data = await result.json();
  // console.log(data);
  return data;
}

const callData = async () => {
  const token = await getToken();
  getData(token)
  const list = await getList(token)
let tracks =''
  for (let index = 0; index < 100; index++) {
    if(list.items[index].track.preview_url){
        const image = list.items[index].track.album.images[0].url
        const name = list.items[index].track.name
        const prev = list.items[index].track.preview_url
    
        tracks += `<div class="track"><img class="album_image" src="${image}" alt="img_${name}"> <span>${name}</span> <video controls muted autoplay="disable" name="track ${index}" class="reproductor"><source src="${prev}" type="audio/mpeg"></video></div>`
    }
  }

  //console.log(list.items)
  console.log(list.items)

  document.getElementById('song').innerHTML = `${tracks}`
}

callData();
