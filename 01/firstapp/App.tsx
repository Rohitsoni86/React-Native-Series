import React from "react";

import { SafeAreaView,View,ScrollView,Text,StyleSheet,useColorScheme,Dimensions  } from "react-native";

let deviceWidth = Dimensions.get('window').width  // get device width
let deviceHeight = Dimensions.get('window').height  // get device height


const App = () => {

  const isDarkMode = useColorScheme() == "dark"  // get darkmode 

  return (
    <SafeAreaView>
      <View style={style.container}>
        <Text style={isDarkMode ? style.whiteText : style.greenText}>Rohit Soni !</Text>
        <Text>First React Native App </Text>
        <Text>Well Done</Text>
        <Text>dynamicsoni.rohit@gmail.com</Text>
      </View>
    </SafeAreaView>
  )
}


const style = StyleSheet.create( {
  // div
   container:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height:deviceHeight,
    backgroundColor: '#F5FCFF',
   },
   whiteText:{
    color:"black",
    fontWeight: 'bold',
    fontSize: 30
   },
   greenText:{
    color:"green",
    fontWeight: 'bold',
    fontSize: 30
   }
} )

export default App