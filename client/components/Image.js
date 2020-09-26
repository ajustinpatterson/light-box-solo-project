import { React } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';

const Image = () => {
  useEffect(() => {
    ImageService.getAllImages()
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
      });
  }, []);
  return (
    <SafeAreaView>
      <View className="el-title">{image.title}</View>
      <View className="el-date">{post.published_at}</View>
      <View className="el-votes">{post.score}</View>
      <View>
        <button>Vote Up</button>
        <button>Vote Down</button>
        <button onClick={deletePost(post._id)}>Delete</button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Image;
