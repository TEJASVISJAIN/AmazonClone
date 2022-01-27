import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import FontAwesone from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabParams } from '../../router/bottomTabNav';
import { HomeStackParams } from '../../router/homeStack';

interface ProductItemProps{
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;
  };
}

const ProductItem = ({ item }: ProductItemProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  const onPress = ()=>{
    navigation.navigate('ProductDetails', {id: item.id})
  }
  return (
    <Pressable style={styles.root} onPress={onPress}>
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
      </Pressable>
  );
};

export default ProductItem;
