import serviceConfig from './serviceConfig';

const mainUrl = serviceConfig.mainUrl;
const apiUrl = serviceConfig.unsplash;

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
