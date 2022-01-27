import React, {useState} from 'react';
import { View , Text, TextInput, Alert, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import countryList from 'country-list';
import styles from './styles';
import Button from '../../components/Button';

const countries = countryList.getData();

const AddressScreen = () => {
  const [country, setCountry] = useState("IN");
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [addressError, setAdressError] = useState('');
  const [city, setCity] = useState('');


  console.log(fullName);

  const onCheckout = ()=>{
    if(!fullName){
      Alert.alert('Please fill in the fullname field');
    }
    if(!phoneNumber){
      Alert.alert('Please fill in the phone number');
    }

    console.warn('Success. Checkout!')
  }

  const validateAddress=()=>{
    if(address.length <3 ){
      setAdressError('Address is too short')
    }
  }

  return (
    <ScrollView style={styles.root}>
      <View style={styles.row}>
        <Picker 
          selectedValue={country}
          onValueChange={(countryChange)=>{
            setCountry(countryChange)
        }}>
          {/* {countries.map(country => (
            <Picker.Item value={country.code} label={country} />
          ))} */}
          <Picker.Item value='IN' label="India" />
          <Picker.Item value='ESP' label="Spain" />
        </Picker>
      </View>
      {/* Full name */}
      <View>
        <Text style={styles.label}>
          Full name (First and Last name)
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullName}
          onChangeText={(name)=>{
            setFullName(name)
          }}
        />
        
      </View>
          {/* Phone number */}
      <View>
        <Text style={styles.label}>
          Phone Number
        </Text>
        <TextInput
          keyboardType='numeric'
          style={styles.input}
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChangeText={(number)=>{
            setPhoneNumber(number);
          }}
        />
        
      </View>

      {/* Address */}
      <View>
        <Text style={styles.label}>
          Address
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Street Adress or P.O. Box"
          value={address}
          onEndEditing={validateAddress}
          onChangeText={(add)=>{
            setAddress(add);
            setAdressError('');
          }}
        />
        {!!addressError && <Text style={styles.errorLabel}>{addressError}</Text>}
      </View>


      {/* City */}
      <View>
        <Text style={styles.label}>
          City
        </Text>
        <TextInput
          style={styles.input}
          value={city}
          onChangeText={(cit)=>{
            setCity(cit)
          }}
        />
        
      </View>

      {/* Checkout button */}

      <Button text={'Checkout'} onPress={onCheckout} />
    </ScrollView>
  );
};

export default AddressScreen;
