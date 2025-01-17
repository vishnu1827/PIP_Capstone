import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';

const ProfileScreen = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode
  const [profileData, setProfileData] = useState({
    name: 'Vignesh V',
    email: 'whereisshe.com',
    avatar: require('../../assets/images/profile.jpg'), // Assuming you have an avatar image in assets
  });
  const [editableData, setEditableData] = useState(profileData); // Editable copy of profile data

  useEffect(() => {
    // Fetch or update profile data if necessary
  }, []);

  const handleSaveProfile = () => {
    setProfileData(editableData); // Save the edited data
    setIsEditing(false); // Exit edit mode
    Alert.alert("Profile Updated", "Your profile has been updated successfully.");
  };

  const handleLogout = () => {
    setIsLoggedOut(true); // Update state to indicate user is logged out
    Alert.alert("Logged Out", "You have successfully logged out.", [
      {
        text: "OK",
        onPress: () => console.log('User logged out'), // Replace with your desired logout logic
      },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={profileData.avatar} style={styles.avatar} />
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={editableData.name}
            onChangeText={(text) => setEditableData({ ...editableData, name: text })}
          />
        ) : (
          <Text style={styles.name}>{profileData.name}</Text>
        )}
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={editableData.email}
            onChangeText={(text) => setEditableData({ ...editableData, email: text })}
            keyboardType="email-address"
          />
        ) : (
          <Text style={styles.email}>{profileData.email}</Text>
        )}
      </View>

      <View style={styles.buttonsContainer}>
        {isEditing ? (
          <>
            <TouchableOpacity style={styles.saveButton} onPress={handleSaveProfile}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => {
                setEditableData(profileData); // Revert changes
                setIsEditing(false);
              }}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity style={styles.editButton} onPress={() => setIsEditing(true)}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.additionalInfo}>
        <Text style={styles.infoText}>
          {isLoggedOut ? "You have logged out." : "Additional information or settings can go here."}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  input: {
    fontSize: 16,
    color: '#333',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 16,
    width: '80%',
    textAlign: 'center',
  },
  buttonsContainer: {
    marginVertical: 20,
  },
  editButton: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  editButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  cancelButton: {
    backgroundColor: '#f44336',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  logoutButton: {
    backgroundColor: '#f44336',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  additionalInfo: {
    paddingTop: 16,
    paddingBottom: 40,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    marginTop: 24,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default ProfileScreen;
