import React from "react"
import { SafeAreaView,View,Text,ScrollView, } from "react-native"
import { styled } from 'nativewind'
import FlatCards from "./components/FlatCards"
import ElevatedCards from "./components/ElevatedCards"
import ImageCards from "./components/ImageCards"



//const StyledSafe = styled(SafeAreaView)
//const StyledText = styled(Text)

const App = () => {
  return(
    <SafeAreaView className=" mt-5">
      <ScrollView>
      <FlatCards/>
      <ElevatedCards/>
      <ImageCards/>
      </ScrollView>
        
    </SafeAreaView>
  )
}


export default App