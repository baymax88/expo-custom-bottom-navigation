import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Icon from '@expo/vector-icons/Ionicons'

// components
import Home from './components/Home'
import Settings from './components/Settings'
import Contact from './components/Contact'
import About from './components/About'
import Profile from './components/Profile'

// normal screens
const HomeStack = createStackNavigator()
const SettingsStack = createStackNavigator()
const ContactStack = createStackNavigator()
const AboutStack = createStackNavigator()

const HomeScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  )
}

const SettingsScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={Settings} />
    </SettingsStack.Navigator>
  )
}

const ContactScreen = () => {
  return (
    <ContactStack.Navigator>
      <ContactStack.Screen name="Contact" component={Contact} />
    </ContactStack.Navigator>
  )
}

const AboutScreen = () => {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen name="About" component={About} />
    </AboutStack.Navigator>
  )
}

// middle screen
const ProfileStack = createStackNavigator()

const ProfileScreen = ({ navigation }) => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} options={{
        gestureDirection: 'vertical',
        headerLeft: () => (
          <Icon.Button name="ios-arrow-back" size={25} color="#00438b" backgroundColor="#fff" onPress={() => navigation.navigate('Home')} />
        )
      }} />
    </ProfileStack.Navigator>
  )
}

const RealProfileScreen = ({ navigation }) => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} options={{
        gestureDirection: 'vertical',
        headerLeft: () => (
          <Icon.Button name="ios-arrow-back" size={25} color="#00438b" backgroundColor="#fff" onPress={() => navigation.navigate('Home')} />
        )
      }} />
    </ProfileStack.Navigator>
  )
}

// bottom tab navigator
const Tab = createMaterialBottomTabNavigator()

const StackTabs = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarLabel: 'Home',
        tabBarIcon: () => (
          <Icon name="ios-home" color="#fff" size={25} />
        )
      }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
        tabBarLabel: 'Settings',
        tabBarIcon: () => (
          <Icon name="ios-settings" color="#fff" size={25} />
        )
      }} />
      <Tab.Screen name="Profile" component={ProfileScreen} listeners={{
        tabPress: e => {
          navigation.push('ProfileStack')
        }
      }} options={{
        tabBarLabel: 'Profile',
        gestureDirection: 'vertical',
        tabBarIcon: () => (
          <Icon name="ios-book" color="#fff" size={25} />
        )
      }} />
      <Tab.Screen name="Contact" component={ContactScreen} options={{
        tabBarLabel: 'Contact',
        tabBarIcon: () => (
          <Icon name="ios-contacts" color="#fff" size={25} />
        )
      }} />
      <Tab.Screen name="About" component={AboutScreen} options={{
        tabBarLabel: 'About',
        tabBarIcon: () => (
          <Icon name="ios-help-circle-outline" color="#fff" size={25} />
        )
      }} />
    </Tab.Navigator>
  )
}

// main navigator
const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="StackTabs" component={StackTabs} options={{
          title: 'Home'
        }} />
        <Stack.Screen name="ProfileStack" component={ProfileScreen} options={{
          gestureDirection: 'vertical',
          ...TransitionPresets.ModalSlideFromBottomIOS,
          title: 'Profile',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App