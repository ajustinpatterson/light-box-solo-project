const mainUrl = 'https://localhost:3000';
export default {
  getAllImages: () => {
    console.log('inside getimages');
    fetch(`${mainUrl}/gallery`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log('error handler inside try', err));
  },
};
