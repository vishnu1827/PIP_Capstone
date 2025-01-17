import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

const MarketplaceScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Sample data for all categories
  const marketplaceData = {
    Produce: [
      { id: 1, name: 'Wheat', image: require('../../assets/images/wheat.jpg') },
      { id: 2, name: 'Rice', image: require('../../assets/images/rice.jpg') },
      { id: 1, name: 'Ragi', image: require('../../assets/images/ragi.jpg') },
      { id: 1, name: 'cotton', image: require('../../assets/images/cotton.jpg') },

    ],
    'Fruits/ Vegetables': [
      { id: 1, name: 'Apple', image: require('../../assets/images/apple.jpg') },
      { id: 1, name: 'Bannana', image: require('../../assets/images/bannana.jpg') },
      { id: 2, name: 'Carrot', image: require('../../assets/images/carrot.jpg') },
      { id: 1, name: 'tomato', image: require('../../assets/images/tomato.jpg') },
    ],
    Equipments: [
      { id: 1, name: 'tractor', image: require('../../assets/images/tractor.jpg') },
      { id: 2, name: 'Plough', image: require('../../assets/images/plough.jpg') },
      { id: 1, name: 'harverster', image: require('../../assets/images/harverster.jpg') },
      { id: 1, name: 'seeddriller', image: require('../../assets/images/seeddriller.jpg') },
    ],
    'Seeds/Saplings': [
      { id: 1, name: 'Mango Sapling', image: require('../../assets/images/mango-sapling.jpg') },
      { id: 2, name: 'Tomato Seeds', image: require('../../assets/images/tomato-seeds.jpg') },
    ],
    'Dairy Products': [
      { id: 1, name: 'Milk', image: require('../../assets/images/milk.jpg') },
      { id: 2, name: 'Cheese', image: require('../../assets/images/cheese.jpg') },
    ],
    'Fertilizers/Pesticides': [
      { id: 1, name: 'Organic Fertilizer', image: require('../../assets/images/organic-fertilizer.jpg') },
      { id: 2, name: 'Pesticide Spray', image: require('../../assets/images/pesticide.jpg') },
    ],
    'Compost/Soil Enhancers': [
      { id: 1, name: 'Compost', image: require('../../assets/images/compost.jpg') },
      { id: 2, name: 'Soil Enhancer', image: require('../../assets/images/soil-enhancer.jpg') },
    ],
  };

  const renderCategory = () => {
    if (!selectedCategory) return null;

    const categoryItems = marketplaceData[selectedCategory];
    if (!categoryItems) return <Text>No items available for this category.</Text>;

    return (
      <View style={styles.gallery}>
        <Text style={styles.sectionHeader}>{selectedCategory}</Text>
        <View style={styles.imageRow}>
          {categoryItems.map((item) => (
            <View key={item.id} style={styles.imageContainer}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.imageLabel}>{item.name}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>KRUSHIBANDHU</Text>
      <Text style={styles.subheader}>Marketplace</Text>
      <View style={styles.buttonContainer}>
        {Object.keys(marketplaceData).map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.marketButton}
            onPress={() => setSelectedCategory(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {renderCategory()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 16 },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 8 },
  subheader: { fontSize: 18, marginVertical: 16, textAlign: 'center' },
  buttonContainer: { gap: 8 },
  marketButton: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 8,
  },
  buttonText: { fontSize: 16, fontWeight: 'bold', color: 'green' },
  gallery: { marginTop: 16 },
  sectionHeader: { fontSize: 20, fontWeight: 'bold', color: 'green', marginVertical: 8 },
  imageRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  imageContainer: { width: '48%', alignItems: 'center', marginBottom: 16 },
  image: { width: '100%', height: 100, borderRadius: 8 },
  imageLabel: { marginTop: 8, fontSize: 14, fontWeight: 'bold', textAlign: 'center' },
});

export default MarketplaceScreen;
