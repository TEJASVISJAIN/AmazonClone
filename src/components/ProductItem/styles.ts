import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  root:{
    flexDirection: 'row',
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  image:{
    width: 150,
    height:150,
    flex: 2,
    resizeMode: 'contain'
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold'
  },
  
  rightContainer:{
    padding:10,
    flex: 3
  },
  rating:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5
  },
  star:{

  },
  price:{
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center'
  },
  oldPrice:{
    fontSize: 12,
    fontWeight: 'normal',
    color: 'grey',
    textDecorationLine: 'line-through'
  }
})

export default styles;