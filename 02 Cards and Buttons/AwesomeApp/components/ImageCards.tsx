import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ImageCards = () => {
  return (
    <View>
      <Text style={styles.heading}>7 Wonders Of World :</Text>
     <View style={[styles.container]}>

     <View  style={[styles.card,styles.firstCard,styles.boxWithShadow]}>
      <View style={styles.cardImageContainer}>
      <Image
        style={styles.cardImage}
        source={{
          uri: 'https://images.pexels.com/photos/14966070/pexels-photo-14966070/free-photo-of-in-front-of-iconic-taj-mahal.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        }}
      />
      </View>
      <Text style={[styles.cardTitle]}>Taj Mahal</Text>
      <Text style={[styles.cardInfo]}>Pink City,Jaipur</Text>
      
      </View>


      
     </View>
    </View>
  )
}

export default ImageCards

const styles = StyleSheet.create({
   container:{
     display: 'flex',
   //  backgroundColor:"pink",
     justifyContent:"center",
     alignItems:"center",
     padding: 20,
   },
   heading:{
      fontSize:24,
      padding: 20,
      color:"white",
      fontWeight:"bold",
    },
    cardImageContainer:{
      borderWidth:2,
    },
    cardImage: {
      height:200,
  },
    cardTitle:{
      paddingTop:10,
      fontSize:18,
      color:"white",
      fontWeight:"500",
    },
    cardInfo:{
      paddingTop:10,
      fontSize:16,
      color:"white",
      fontWeight:"300",
    },
    card:{
      width:300,
   
      padding:10,
       margin:10,
       borderRadius: 4,
       boxShadow:" 2.8px 5.6px 5.6px hsl(0deg 0% 0% / 0.41)",
     
   },
   boxWithShadow: {
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 1 },
     shadowOpacity: 0.8,
     shadowRadius: 2,  
   
 },
 
   firstCard:{
     backgroundColor:"#f368e0"
   },
   secondCard:{
     backgroundColor:"#00d2d3"
   },
   fourCard:{
     backgroundColor:"#00d2d3"
   },
   thirdCard:{
     backgroundColor:"#1dd1a1"
   },
   fifthCard:{
     backgroundColor:"#2e86de"
   }
 })