import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import { Auth } from 'aws-amplify';
const MenuScreen = () => {

  const onLogout = ()=>{
      Auth.signOut();
  }
  return (
    <SafeAreaView>
      <Button text='Sign out' onPress={onLogout} />
    </SafeAreaView>
  );
};

export default MenuScreen;
