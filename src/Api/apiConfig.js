const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '6aa5d47739634219f9c4b18ba1383585',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;