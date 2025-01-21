import { StyleSheet } from 'react-native'
import theme from '../../utils/Constants'
import Colors from '../../themes/Colors'


const Styles = StyleSheet.create({
  View: {
    alignSelf: 'center',
    marginTop: 20,

  },
  Text: {
    color: Colors.Black,
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 500
  },
  TextStyle: {

    alignSelf: 'center',
    fontWeight: 400,
    fontSize: 16,
    color:'#021619'


  },
  ImageStyle: {
    resizeMode: 'stretch',
    height: 450,
    alignSelf: 'center',
    left: -3,
    width: '105%',

  },

  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',


  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  skipButton: {
    top: -20,



  },
  skipText: {
    fontSize: 16,
    color: '#999999',
    textAlign: 'right',
    marginRight: 20
  },

})
export default Styles