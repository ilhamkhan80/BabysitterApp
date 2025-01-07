import { StyleSheet } from 'react-native'
import theme from '../../utils/Constants'
import Colors from '../../themes/Colors'


const Styles = StyleSheet.create({
    iconStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    },
    BookNow: {
        fontSize: 22,
        color: Colors.purple,
        fontFamily: theme.BOLD,
        marginLeft: 15,
        marginTop: 10,
    },
    TextStyle: {
        fontSize: 14,
        marginLeft: 15,
    },
    Image: {
        width: 90,
        height: 90,
        borderRadius: 60,
        alignSelf: 'flex-end',
        borderWidth: 2,
        borderColor: Colors.purple,
    },
    SelectedDate: {
        fontSize: 20,
        fontFamily: theme.MEDIUM,
        color: Colors.purple,
        marginLeft: 15,
    },
    OneTime: {
        fontSize: 12,
        color: Colors.White,
        textAlign: 'center',
        fontWeight: theme.MEDIUM,
        alignSelf:'center'
    },
    OneTimeStyle: {
        justifyContent: 'center',
        backgroundColor: Colors.purple,
        borderColor: Colors.purple,
        borderWidth: 1,
        width: 80,
        borderRadius: 80,
        height: 41,
    },
    View: {
        width: 166,
        borderRadius: 80,
        flexDirection: 'row',
        backgroundColor: Colors.Atfernoon,
        marginLeft: 15,
        marginBottom: 15
    },
    FullTime: {
        color: Colors.purple,
        justifyContent: 'center',
        fontFamily: theme.MEDIUM,
        fontSize: 12,
        marginLeft: 6,
        alignContent:'center',
        top:10,
        alignSelf:'center'
    },
    FullTimeStyle: {
        fontSize: 12,
        color: Colors.purple,
        textAlign: 'center',
        marginLeft: 5,
    },
 
    Morning: {
        fontSize: 12,
        justifyContent: 'center',
        textAlign: 'center',
    },
    MorningStyle: {
        borderRadius: 80,
        width: 86,
        height: 41,
        backgroundColor: Colors.purple,
    },
    Flex: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: 10,
        marginRight: 10,
        gap: 5
    },
    OneTime1: {
        fontSize: 12,
        color: Colors.Black,
        textAlign: 'center',
    },
    OneTimeStyle1: {
        justifyContent: 'center',
        backgroundColor: Colors.Atfernoon,
        borderColor: Colors.Atfernoon,
        borderWidth: 1,
        width: 83,
        borderRadius: 80,
        height: 41,
    },
    SelectedDate1: {
        fontSize: 20,
        fontFamily: theme.MEDIUM,
        color: Colors.purple,
        marginLeft: 20,
        marginTop: 10,
    },
    FlexStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.White,
        borderRadius: 10,
        marginTop: 10,
        height: 52,
        width: '90%',
        alignSelf: 'center',
        borderWidth:1,
        borderColor:Colors.bordercolor
    },
    FromText: {
        marginTop: 15,
        color: Colors.purple,
        marginLeft: 20,
    },
    Marginleft: {
        marginLeft: 20,
    },
    Marginleft: {
        marginLeft: 10
    },
    MarginRight: {
        marginTop: 15,
        marginRight: 10

    },
    ImageStyle: {
        width: 14,
        height: 14,
    },
    FlexDirection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 20
    },
    AddChild: {
        fontSize: 12,
        color: Colors.purple,
        fontFamily: theme.MEDIUM,
        marginLeft: 10,
    },
    ExperienceTxt: {
        color: Colors.Blue,
        fontSize: 18,
        marginLeft: 10,
        marginTop: 10
    },
    AddressStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        backgroundColor: Colors.White,
        borderRadius: 10,
        height: 121,
        width: '95%',
        alignSelf: 'center',
        borderWidth:1,
        borderColor:Colors.bordercolor,
        marginRight:10
    },
    AddresStyle: {
        marginTop: 20,
        marginLeft: 10,

    },
    Margin: {
        marginTop: 10,
        marginLeft: 15
    },
    Notes: {
        backgroundColor: 'white',
        width: '90%',
        height: 121,
        borderRadius: 10,
        textAlignVertical: 'top',
        alignSelf:'center',
        borderWidth:1,
        borderColor:Colors.bordercolor
    },
    IconStyle: {
        backgroundColor: 'white',
        width: 41,
        height: 41,
        justifyContent: 'center',
        marginTop: 10,
        alignSelf: 'center',
    },
    ViewIcon: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
        gap: 10,
        borderRadius:4

    },
    CrossIcon:{
        height:16,
        width:16,
        left:12

    },
    Button: {
        width: 300,
        height: 44,
        backgroundColor: Colors.purple,
    },
    IconContainer: {
        height: 41,
        width: 41,
        backgroundColor: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop:5,
        marginLeft:5,
        borderRadius:4
    },
    ClockStyle: {
        width: 16,
        height: 18,
        marginRight: 20,
    },
    MainView: {
        marginTop: 20
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      selectedStyle: {
        justifyContent: 'center',
        backgroundColor: Colors.purple,
        borderColor: 'purple',
        width: 83,
        borderRadius: 80,
        height: 41,
        
      },
      unselectedStyle: {
        justifyContent: 'center',
        backgroundColor: Colors.Atfernoon, 
        width: 86,
        borderRadius: 80,
        height: 41,
      },
      selectedText: {
        fontSize: 12,
        color: 'white', 
        textAlign: 'center',
      },
      unselectedText: {
        fontSize: 12,
        color: Colors.purple, 
        textAlign: 'center',
        fontWeight:theme.MEDIUM

      },
      Defaultstyle:{
        fontSize:20,
        backgroundColor:Colors.purple,
        width:'60%',
        height:41,
        borderRadius:80,
        justifyContent:'center'
        
        
      }






})
export default Styles