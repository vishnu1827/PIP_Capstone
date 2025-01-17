import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';

const App = () => {
  const tutorials = [
    {
      id: '1',
      title: 'Why Hydroponic farming is failing in India?',
      views: '5.5M views',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '2',
      title: 'Mushroom Cultivation Training | Cordyceps Mushroom cultivation.',
      views: '5.5M views',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '3',
      title: 'Organic Farming Techniques for Beginners',
      views: '3.2M views',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '4',
      title: 'Aquaponics: The Future of Sustainable Agriculture',
      views: '2.8M views',
      image: 'https://via.placeholder.com/150',
    },
  ];

  const courses = [
    {
      id: '1',
      title: 'Course 1',
      price: '₹799',
      originalPrice: '₹3000',
      learners: '40 farmers',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '2',
      title: 'Course 2',
      price: '₹999',
      originalPrice: '₹3000',
      learners: '11 farmers',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '3',
      title: 'Course 3',
      price: '₹599',
      originalPrice: '₹2500',
      learners: '25 farmers',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '4',
      title: 'Course 4',
      price: '₹1299',
      originalPrice: '₹4000',
      learners: '15 farmers',
      image: 'https://via.placeholder.com/150',
    },
  ];

  const news = [
    {
      id: '1',
      title: 'Indian farmers get just one-third of the price we pay for fruits and vegetables',
      date: '07 Oct, 2024, 02:11 PM IST',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '2',
      title: 'PM Modi to release next installment under PM-Kisan scheme',
      date: '04 Oct, 2024',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '3',
      title: 'New initiatives to boost rural agriculture announced',
      date: '01 Oct, 2024',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '4',
      title: 'Farmers protest against low MSP rates in several states',
      date: '29 Sep, 2024',
      image: 'https://via.placeholder.com/150',
    },
  ];

  const renderTutorial = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardSubtitle}>{item.views}</Text>
    </View>
  );

  const renderCourse = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardSubtitle}>{item.price} <Text style={styles.originalPrice}>{item.originalPrice}</Text></Text>
      <Text style={styles.cardSubtitle}>{item.learners}</Text>
    </View>
  );

  const renderNews = ({ item }) => (
    <View style={styles.newsCard}>
      <Image source={{ uri: item.image }} style={styles.newsImage} />
      <View style={styles.newsContent}>
        <Text style={styles.newsTitle}>{item.title}</Text>
        <Text style={styles.newsDate}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Tutorials</Text>
      <FlatList
        horizontal
        data={tutorials}
        renderItem={renderTutorial}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.heading}>Popular Courses</Text>
      <FlatList
        horizontal
        data={courses}
        renderItem={renderCourse}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.heading}>Latest News</Text>
      {news.map((item) => (
        <View key={item.id}>{renderNews({ item })}</View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  card: {
    marginRight: 16,
    width: 200,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 100,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 8,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#555',
    marginHorizontal: 8,
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  newsCard: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    overflow: 'hidden',
  },
  newsImage: {
    width: 100,
    height: 100,
  },
  newsContent: {
    flex: 1,
    padding: 8,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  newsDate: {
    fontSize: 12,
    color: '#555',
    marginTop: 4,
  },
});

export default App;
