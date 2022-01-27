import React,{useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNav from './bottomTabNav';
import Homescreen from '../screens/Homescreen';
import ProductScreen from '../screens/ProductScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Text, TextInput, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'

export type HomeStackParams = {
  Home;
  ProductDetails;
}

const Stack = createNativeStackNavigator<HomeStackParams>();

interface HeaderComponentProps{
  searchValue: string;
  setSearchValue: (searchValue: string) => void; 
}

const HeaderComponent = ({searchValue, setSearchValue}: HeaderComponentProps) =>{
  return(
    <View style={{backgroundColor: '#03fcc2'}}>  
      <View style={{backgroundColor: '#fff', margin: 10, padding: 5, flexDirection: 'row', alignItems:'center'}}>
        <Feather name="search" size={20} />
      <TextInput 
        style={{height: 40, marginLeft: 10}} 
        placeholder={'Search...'} 
        value={searchValue}
        onChangeText={setSearchValue}
      />
      </View>
    </View>
  )
}
const HomeStack = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <View style={{flex:1}}>
      <Stack.Navigator
        screenOptions={{
          header: ()=> <HeaderComponent searchValue={searchValue} setSearchValue={setSearchValue}/>
        }}
      >
        <Stack.Screen 
          name="Home"
        >
          {()=> <Homescreen searchValue={searchValue}/>}
        </Stack.Screen>
        <Stack.Screen 
          component={ProductScreen} 
          name="ProductDetails" 
        />
      </Stack.Navigator>
    </View>
  );
};

export default HomeStack;
