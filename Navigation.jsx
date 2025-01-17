import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { onAuthStateChanged } from 'firebase/auth';

import LoginScreen from './LoginScreen';
import RegisterScreen from './Register';
import HomeScreen from './(tabs)/home';
import { auth } from './firebaseConfig';

const Stack = createStackNavigator();

export default function Navigation() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setLoading(false); // Stop loading once the auth state is determined
    });

    return unsubscribe; // Clean up listener on unmount
  }, []);

  if (loading) {
    return null; // Render nothing or a loading spinner while checking auth state
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          // If authenticated, show HomeScreen
          <Stack.Screen name="home" component={HomeScreen} />
        ) : (
          // If not authenticated, show Login and Register screens
          <>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
