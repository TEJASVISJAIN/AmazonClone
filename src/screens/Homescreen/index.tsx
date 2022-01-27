import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ProductItem from '../../components/ProductItem';
import products from '../../data/products';

const Homescreen = ({searchValue}: {searchValue: string}) => {
  console.log("searchvalue", searchValue);
  return (
    <View style={styles.page}>
      <FlatList
        data={products}
        renderItem={({item})=>( <ProductItem item={item} />)}
        keyExtractor={(item)=>item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page:{
    padding: 10
  },
});



export default Homescreen;
