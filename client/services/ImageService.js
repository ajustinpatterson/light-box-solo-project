const mainUrl = 'http://192.168.0.17:3000';
const apiUrl =
  'https://api.unsplash.com/photos/?client_id=rqvlp8dmdA61y6UyNy0YhAfNLMfLuKrAdBiKMcLqweI';

export default {
  getAllImages: () => {
    try {
      console.log('inside getimages');
      return fetch(apiUrl)
        .then((response) => {
          return response.json();
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log('error handler inside try', err);
    }
  },
};
