import React,{useState} from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import product from '../../data/product';
import {Picker} from '@react-native-picker/picker'
import QuantitySelector from '../../components/QuantitySelector';
import { useRoute } from '@react-navigation/native';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState(product.options? product.options[0] : null)
  const [quantity, setQuantity] = useState(1);

  const route = useRoute();
  

  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>

      <ImageCarousel images={product.images} />


      <Picker
        style={styles.picker}
        selectedValue={selectedOption}
        onValueChange={(itemValue)=>{
          setSelectedOption(itemValue)
        }}
      >
        {product.options.map((option)=>(<Picker.Item label={option} value={option} />))}
      </Picker>


      <Text style={styles.price}>
        from ${product.price}
        {product.oldPrice && <Text style={styles.oldPrice}>
          $1{product.oldPrice}
        </Text>}
      </Text>

      <Text style={styles.description}>
        {product.description}
      </Text>

      <View>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      </View>

      
      <Button 
        text={'Add to Cart'} 
        onPress={()=>{console.warn('Add to Cart')}} 
        containerStyles={{
          backgroundColor: '#e3c905'
        }}
      />

      <Button text={'Buy Now'} onPress={()=>{console.warn('Buy Now')}} />

    </ScrollView>
  );
};



export default ProductScreen;
