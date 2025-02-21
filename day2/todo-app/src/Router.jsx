import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNav from './components/StackNav';
import { styles } from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:"#fff",
        tabBarActiveBackgroundColor:"#000",
        ...styles.navigatorScreenoptions
      }}>
        <Tab.Screen name="Home" 
            component={StackNav}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" size={size} color={color} />
              ),
              tabBarLabel: 'Home'
            }}
        />
        <Tab.Screen name="Done" component={StackNav} 
         options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="check-circle" size={size} color={color} />
          ),
          tabBarLabel: 'Completed'
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Router