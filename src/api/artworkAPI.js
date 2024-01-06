// https://api.artic.edu/api/v1/artworks
// https://api.artic.edu/api/v1/artworks?page=10321
// https://api.artic.edu/api/v1/artworks/11294
const BASE_URL = 'https://api.artic.edu/api/v1/artworks';
export const fetchArtworks = async (page) => {
    const response = await fetch(`${BASE_URL}/?page=${page}`);
    return response;
}

export const fetchArtworkDetail = async (id) => {
    return await fetch(`${BASE_URL}/${id}`);
}

