import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import FontAwesone from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from '../QuantitySelector';
import styles from './styles';

interface CartProductItemProps{
  CartItem: {
    id: string;
    quantity:number;
    option?:string;
    item: {
      id: string;
      title: string;
      image: string;
      avgRating: number;
      ratings: number;
      price: number;
      oldPrice?: number;
  };}
}

const CartProductItem = ({ CartItem }: CartProductItemProps) => {
  const {quantity: quantityProp, item} = CartItem;
  const [quantity, setQuantity] = useState(quantityProp); 

  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Image style={styles.image} source={{uri: item.image}}/>
        <View style={styles.rightContainer}>
          <Text numberOfLines={3} style={styles.title}>
          {item.title}
          </Text>
          <View style={styles.rating}>
           
            {[1,2,3,4,5].map((el,i)=> (
               <FontAwesone 
                style={styles.star} 
                name={i< Math.floor(item.avgRating)? 'star' : 'star-o'} size={18} 
                color={"#e47911"} />
               ))}
            
            <Text>
              {item.ratings}
            </Text>
          </View>

          <Text style={styles.price}>
            from ${item.price}
            {item.oldPrice && <Text style={styles.oldPrice}>
              $1{item.oldPrice}
            </Text>}
          </Text>

        </View>
      </View>
      <View style={styles.quantityContainer}>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      </View>

    </View>
    
  );
};

export default CartProductItem;
