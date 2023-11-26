import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'


export default function FlatCards() {
  return (
    <View>
     <Text style={styles.heading}>Flat Cards !!</Text>
      <View style={styles.container} >
         <View  style={[styles.box,styles.firstCard,styles.boxWithShadow]}><Text style={[styles.text]}>Card</Text></View>
         <View style={[styles.box,styles.secondCard,styles.boxWithShadow]}><Text style={[styles.text]}>Card</Text></View>
         <View style={[styles.box,styles.thirdCard,styles.boxWithShadow]}><Text style={[styles.text]}>Card</Text></View>
         <View style={[styles.box,styles.fourCard,styles.boxWithShadow]}><Text style={[styles.text]}>Card</Text></View>
         <View style={[styles.box,styles.fifthCard,styles.boxWithShadow]}><Text style={[styles.text]}> Card</Text></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection:"row",
    padding: 8,
  },
  heading:{
    fontSize:24,
    color:"white",
    fontWeight:"bold",
    textAlign:"center"
  },
  text:{
    fontSize:12,
    color:"white",
    fontWeight:"bold",
    textAlign:"center"
  },
  box:{
      width:55,
      margin:10,
      textAlign:"center",
      height:80,
      borderRadius: 4,
      boxShadow:" 2.8px 5.6px 5.6px hsl(0deg 0% 0% / 0.41)",
    
  },
  boxWithShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
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