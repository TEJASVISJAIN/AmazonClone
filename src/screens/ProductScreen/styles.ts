import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root:{
    padding: 10,
    backgroundColor: '#fff'
  },
  title:{
    color: '#000',

  },
  price:{
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
    color:'#000'
  },
  oldPrice:{
    fontSize: 12,
    fontWeight: 'normal',
    color: 'grey',
    textDecorationLine: 'line-through'
  },
  description:{
    marginVertical: 10,
    color: '#000',
    lineHeight: 20
  },
  picker:{
    color: '#000'
  }
})

export default styles;