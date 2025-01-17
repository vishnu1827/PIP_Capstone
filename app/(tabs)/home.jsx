import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Alert, Button } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const CombinedScreen = ({ navigation }) => {
  const [appointments, setAppointments] = useState([]);

  const farmers = [
    { id: '1', name: 'Rakesh Pai', role: 'Agrologist', location: 'Bangalore', rating: '4.8 ★', timing: '10:30am - 5:30pm' },
    { id: '2', name: 'Srinivasa Murthy', role: 'Agriculturalist', location: 'Devanahalli', rating: '4.8 ★', timing: '10:30am - 5:30pm' },
    { id: '3', name: 'Anitha Shetty', role: 'Soil Expert', location: 'Mysore', rating: '4.7 ★', timing: '11:00am - 6:00pm' },
    { id: '4', name: 'Ravi Kumar', role: 'Horticulturist', location: 'Chikmagalur', rating: '4.9 ★', timing: '9:00am - 4:00pm' },
    { id: '5', name: 'Geetha Reddy', role: 'Agrologist', location: 'Hubli', rating: '4.6 ★', timing: '10:00am - 5:00pm' },
  ];

  const handleBookAppointment = (name, role) => {
    const alreadyBooked = appointments.some((appointment) => appointment.name === name);

    if (alreadyBooked) {
      Alert.alert('Already Booked', `${name} (${role}) appointment is already booked.`);
    } else {
      setAppointments([...appointments, { name, role }]);
      Alert.alert('Appointment Booked', `Appointment with ${name} (${role}) has been booked successfully.`);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.replace('Login');
    } catch (err) {
      console.error(err);
    }
  };

  const renderHeader = () => (
    <View>
      <Text style={styles.header}>KRUSHIBANDHU</Text>
      <View style={styles.homeSection}>
        <Text style={styles.homeTitle}>Welcome to Krushibandhu</Text>
      </View>
      <Text style={styles.greeting}>Hello Farmer</Text>
      <View style={styles.banner}>
        <Image
          source={require('../../assets/images/farmer-banner.png')} // Replace with your image path
          style={styles.bannerImage}
        />
        <Text style={styles.bannerText}>Are you a Farmer?{'\n'}Sell your Products here</Text>
      </View>
      <Text style={styles.subheader}>Connect with Nearby Farmers</Text>
    </View>
  );

  const renderFarmerCard = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardSubtitle}>{item.role} | {item.location}</Text>
      <Text style={styles.cardRating}>{item.rating}</Text>
      <Text style={styles.cardTiming}>{item.timing}</Text>
      <TouchableOpacity
        style={styles.appointmentButton}
        onPress={() => handleBookAppointment(item.name, item.role)}
      >
        <Text style={styles.buttonText}>Book Appointment</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={farmers}
      keyExtractor={(item) => item.id}
      renderItem={renderFarmerCard}
      ListHeaderComponent={() => (
        <>
          {renderHeader()}
          <View style={styles.logoutButtonContainer}>
            <Button title="Logout" onPress={handleLogout} color="#d9534f" />
          </View>
        </>
      )}
      contentContainerStyle={styles.cardContainer}
    />
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 16 },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 8 },
  homeSection: { alignItems: 'center', marginBottom: 20 },
  homeTitle: { fontSize: 18, fontWeight: 'bold', color: '#3c4a3e', textAlign: 'center' },
  greeting: { fontSize: 18, marginTop: 16 },
  banner: { backgroundColor: '#fff', padding: 16, borderRadius: 8, marginVertical: 16 },
  bannerImage: { height: 120, resizeMode: 'contain', alignSelf: 'center' },
  bannerText: { textAlign: 'center', marginTop: 8, fontSize: 16, fontWeight: 'bold' },
  subheader: { fontSize: 18, marginTop: 16 },
  cardContainer: { paddingBottom: 16 },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 16,
  },
  cardTitle: { fontSize: 16, fontWeight: 'bold' },
  cardSubtitle: { fontSize: 14, color: 'gray' },
  cardRating: { fontSize: 14, marginTop: 8 },
  cardTiming: { fontSize: 14, marginVertical: 8 },
  appointmentButton: {
    backgroundColor: '#1e90ff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
  logoutButtonContainer: {
    marginVertical: 10,
    paddingHorizontal: 16,
  },
});

export default CombinedScreen;
