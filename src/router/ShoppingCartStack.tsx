import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductScreen from '../screens/ProductScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import AddressScreen from '../screens/AddressScreen';

export type ShoppingCartStackParams = {
  cart;
  address;
}

const Stack = createNativeStackNavigator<ShoppingCartStackParams>();

const ShoppingCartStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          component={ShoppingCartScreen} 
          name="cart"
          options={{ title: 'Shopping Cart' }}
        />
        <Stack.Screen 
          component={AddressScreen} 
          name="address"
          options={{ title: 'Address Section' }}
          
        />
      </Stack.Navigator>
  );
};

export default ShoppingCartStack;
