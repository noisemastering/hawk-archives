import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import { Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen'
import SalesScreen from './screens/SalesScreen'
import CostsScreen from './screens/CostsScreen'
import InventoryScreen from './screens/InventoryScreen'
import SettingsScreen from './screens/SettingsScreen'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Resumen" 
          component={HomeScreen} 
          options={{
            tabBarLabel: "Inicio",
            tabBarIcon: () => <Entypo name="home" size={24} color="black"/>
          }}
        />
        <Tab.Screen 
          name="SalesStack" 
          component={SalesScreen} 
          options={{
            headerShown: false,
            tabBarLabel: "Ventas",
            tabBarIcon: () => <MaterialIcons name="point-of-sale" size={24} color="black" />
          }}
        />
        <Tab.Screen 
          name="CostsStack" 
          component={CostsScreen} 
          options={{
            headerShown: false,
            tabBarLabel: "Costos",
            tabBarIcon: () => <MaterialIcons name="attach-money" size={24} color="black" />
          }}
        />
        <Tab.Screen 
          name="InventoryStack" 
          component={InventoryScreen} 
          options={{
            headerShown: false,
            tabBarLabel: "Inventario",
            tabBarIcon: () => <MaterialIcons name="inventory" size={24} color="black" />
          }}
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{
            headerShown: false,
            tabBarLabel: "Ajustes",
            tabBarIcon: () => <FontAwesome name="cog" size={24} color="black"/>
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
