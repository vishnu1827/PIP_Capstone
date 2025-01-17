import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ColorProperties } from 'react-native-reanimated/lib/typescript/Colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function TablayouAt() {
  return (
        <Tabs screenOptions={{
          headerShown:false,
          tabBarActiveTintColor:Colors.PRIMARY
        }}>
          <Tabs.Screen name='home'
            options={{
              tabBarLabel:'Home',
              tabBarIcon:({color})=><Ionicons name="home" size={24} color="black" />
             }}
             />
              
          <Tabs.Screen name='explore'
           options={{
            tabBarLabel:'explore',
            tabBarIcon:({color})=><MaterialIcons name="explore" size={24} color="black" />
           }}
          />
           <Tabs.Screen name='tutorials'
            options={{
              tabBarLabel:'tutorials',
              tabBarIcon:({color})=><MaterialIcons name="ondemand-video" size={24} color="black" />
             }}
            />
          <Tabs.Screen name='profile'
            options={{
              tabBarLabel:'profile',
              tabBarIcon:({color})=><Ionicons name="person-circle" size={24} color="black" />
             }}
            />
         

        </Tabs>
    
  )
      }