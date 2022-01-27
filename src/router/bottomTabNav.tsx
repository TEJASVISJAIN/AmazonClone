import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../screens/Homescreen';
import Entypo from 'react-native-vector-icons/Entypo'
import HomeStack from './HomeStack';
import ShoppingCartStack from './ShoppingCartStack';
import MenuScreen from '../screens/MenuScreens';


export type BottomTabParams = {
  home;
  profile;
  shoppingCart;
  more;
}
const Tab = createBottomTabNavigator<BottomTabParams>();

const BottomTabNav = () => {
  return (
      <Tab.Navigator 
        screenOptions={{  
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#e47911',
          tabBarInactiveTintColor: '#ffbd7d',
          tabBarActiveBackgroundColor: '#fff',
          tabBarStyle:{
            backgroundColor: '#fff'
          }
        }}>
        <Tab.Screen 
          component={HomeStack} 
          name="home"
          options={{
            tabBarIcon:({color})=>(
              <Entypo name="home" color={color} size={25} />
            ),
            headerShown: false
          }}
        />
        <Tab.Screen 
          component={Homescreen} 
          name="profile"
          options={{
            tabBarIcon:({color})=>(
              <Entypo name="user" color={color} size={25} />
            )
          }}
        />
        <Tab.Screen
           component={ShoppingCartStack} 
           name="shoppingCart"
           options={{
            tabBarIcon:({color})=>(
              <Entypo name="shopping-cart" color={color} size={25} />
            )
            
           }}
        />
        <Tab.Screen 
          component={MenuScreen} 
          name="more"
          options={{
            tabBarIcon:({color})=>(
              <Entypo name="menu" color={color} size={25} />
            )
          }}
        />
      </Tab.Navigator>
  );
};

export default BottomTabNav;
