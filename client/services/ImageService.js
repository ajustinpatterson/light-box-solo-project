const mainUrl = '192.168.0.17:3000';
export default {
  getAllImages: () => {
    try {
      console.log('inside getimages');
      return fetch(`${mainUrl}/gallery`).then((response) => {
        response.json();
      });
    } catch (err) {
      console.log('error handler inside try', err);
    }
  },
};
