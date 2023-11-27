import { Image, ScrollView, StyleSheet, Text, View,useColorScheme , TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import sevenWD from "../public/sevenWondersData.json"
import customCSS from "./CSS Files/ImageCadCSS.json"



const ImageCards = () => {
  const isDarkMode = useColorScheme() === "dark"
  const wondersOfWorld = sevenWD
  console.log(isDarkMode);
  return (
    // Image Cards Holder
    <View >
      <Text style={isDarkMode ? styles.headingDarkMode : styles.headingWhiteMode}>7 Wonders Of World :</Text>
     <View style={[styles.cardsContainer]}>
   
   {
    wondersOfWorld.map( ({id,title,location,image,details},index) => {
      return(
        <View key={id} style={[styles.card,styles.boxWithShadow]}>
     
      {/* Image Container */}
      <View style={styles.cardImageContainer}>
        
      <Image
        style={styles.cardImage}
        source={{
          uri: `${image}`,
        }}
      />
      </View>
      {/* Info Container */}
      <View>
      <Text style={[styles.cardTitle]}>{title}</Text>
      <Text style={[styles.cardInfo]}>{location}</Text>
      </View>
      {/* Buttons Container */}
      <View>
        <TouchableOpacity
        onPress={() => Alert.alert(`${details}`)}
         style={[styles.touchStyleCSS,styles.boxWithShadow2]}>
          <Text style={styles.buttonText}>Read More</Text>
          </TouchableOpacity>
      </View>
      </View>
      )
    } )
   }
     </View>
    </View>
  )
}

export default ImageCards

const styles = StyleSheet.create({
  cardsContainer:{
     display: 'flex',
     justifyContent:"center",
     alignItems:"center",
     gap:40,
     padding: 20,
   },
   headingWhiteMode:{
    fontSize:18,
    color:"black",
    paddingStart:20,
    fontWeight:"bold",
    
  },
  headingDarkMode:{
    fontSize:18,
    color:"pink",
    paddingStart:20,
    fontWeight:"bold",
  },
    cardImageContainer:{
      
    },
    cardImage: {
      height:200,
  },
    cardTitle:{
      paddingTop:10,
      marginHorizontal:10,
      fontSize:18,
      color:"white",
      textAlign:"center",
      fontWeight:"500",
    },
    cardInfo:{
      paddingTop:10,
       marginHorizontal:10,
      fontSize:16,
      color:"white",
      fontWeight:"300",
    },
    card:{
      width:300,
      backgroundColor:"#222f3e",
   
      paddingVertical:14,
       margin:10,
       borderRadius: 4,
       boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    //   boxShadow:" 2.8px 5.6px 5.6px hsl(0deg 0% 0% / 0.41)",
     
   },
   boxWithShadow: {
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
	   height: 3,
      },
     shadowOpacity: 0.29,
     shadowRadius: 4.65,

     elevation: 7,
 },
 

 // BUTTON 

 touchStyleCSS:{
  
  color:"white",
  padding:8,
  marginVertical:10,
  marginHorizontal:10,
  borderRadius:8,
  backgroundColor:"#54a0ff"
  
 },
 buttonText:{
  fontSize:18,
  color:"black",
  fontWeight:"500",
  textAlign:"center"
 },
 boxWithShadow2: {
  shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.22,
shadowRadius: 2.22,

elevation: 3,
},
 
   
 })