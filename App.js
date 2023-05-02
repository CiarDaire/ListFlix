import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import Login from './pages/Login';
import Home from './pages/Home';
import MyLists from './pages/MyLists';
import DiscoverTV from './pages/DiscoverTV';
import DiscoverFilm from './pages/DiscoverFilm';
import CreateList from './pages/CreateList';
import Item from './pages/Item';
import Reviews from './pages/Reviews';
import MyListOne from './pages/MyListOne';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Top = createMaterialTopTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Login" component={Login} options={{headerBackVisible: false, headerShown: false}} />
        <Stack.Screen name="Index" component={BottomBar} options={{headerBackVisible: false, headerShown: false}} />
        <Stack.Screen name='DiscoverTV' component={DiscoverTV} />
        <Stack.Screen name='DiscoverFilm' component={DiscoverFilm} />
        <Stack.Screen name='CreateList' component={CreateList} />
        <Stack.Screen name='IndexItem' component={TopBar} options={{title: ''}} />
        <Stack.Screen name='MyListOne' component={MyListOne} />
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

function TopBar() {
  return (
    <Top.Navigator initialRouteName='Item'>
      <Top.Screen name='Info' component={Item} />
      <Top.Screen name='Reviews' component={Reviews} />
    </Top.Navigator>
  )
}

function BottomBar() {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, size, color }) => {
        let iconName;
        if (route.name === 'Create List') {
          iconName = focused ? 'pluscircle' : 'pluscircleo';
          size = 26;
          color = '#D16A6A';
          return <AntDesign name={iconName} size={size} color={color} />
        } if (route.name === 'Home') {
          iconName = focused ? 'home-sharp' : 'home-outline';
          size = 27;
          color = '#D16A6A';
          return <Ionicons name={iconName} size={size} color={color} />
        } else if (route.name === 'My Lists') {
          iconName = focused ? 'list-circle-sharp' : 'list-circle-outline';
          size = 30;
          color = '#D16A6A';
          return <Ionicons name={iconName} size={size} color={color} />
        }
        return null;
        },
        tabBarActiveTintColor: '#D16A6A',
        tabBarInactiveTintColor: 'black',
        tabBarLabel: () => null,
        })}>
      <Tab.Screen name="My Lists" component={MyLists} />
      <Tab.Screen name="Home" component={Home} options={{headerBackVisible: false}} />
      <Tab.Screen name="Create List" component={CreateList} />
    </Tab.Navigator>
  )
}
