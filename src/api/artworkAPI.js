// https://api.artic.edu/api/v1/artworks
// https://api.artic.edu/api/v1/artworks?page=10321
// https://api.artic.edu/api/v1/artworks/11294
const BASE_URL = 'https://corsproxy.io/?' + encodeURIComponent('https://api.artic.edu/api/v1/artworks/');

export const fetchArtworks = async (page) => {
    const response = await fetch(`${BASE_URL}${encodeURIComponent(`?page=${page}`)}`);
    return await response.json();
}

export const fetchArtworkDetail = async (id) => {
    const response = await fetch(`${BASE_URL}${encodeURIComponent(id)}`);
    return await response.json();
}

