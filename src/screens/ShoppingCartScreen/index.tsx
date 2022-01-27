import React,{useState} from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import CartProductItem from '../../components/CartProductItem';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';

import products from '../../data/cart';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ShoppingCartStackParams } from '../../router/ShoppingCartStack';

const ShoppingCartScreen = () => {

  const navigation = useNavigation<NativeStackNavigationProp<ShoppingCartStackParams>>();
  
  const totalPrice = products.reduce((summedPrice,product)=>(
      summedPrice + product.item.price*product.quantity
  ),0);

  const onCheckout = ()=>{
    navigation.navigate('address')
  } 

  return (
    <View style={styles.page}>
      
      <FlatList
        data={products}
        renderItem={({item})=>( <CartProductItem CartItem={item} /> )}
        keyExtractor={(item)=>item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={()=>(
          <View>
            <Text style={{fontSize: 18}}>
              Subtotal ({products.length} items): {' '}
              <Text style={{color: '#e47911', fontWeight: 'bold'}}>
                ${totalPrice.toFixed(2)}
              </Text>
            </Text>
            <Button 
              text={'Proceed to checkout'} 
              onPress={onCheckout} 
              containerStyles={{backgroundColor: '#f7e300', borderColor: '#c7b702'}}
            />
         </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page:{
    padding: 10
  },
});



export default ShoppingCartScreen;
