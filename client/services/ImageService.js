const mainUrl = 'https://localhost:3000';
export default {
  getAllImages: async () => {
    try {
      console.log('inside getimages');
      const images = await fetch(`${mainUrl}/gallery`);
      response.json(images);
      console.log(images);
    } catch (err) {
      console.log('error handler inside try', err);
    }
  },
};
