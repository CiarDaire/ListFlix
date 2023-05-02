import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import GestureFlipView from 'react-native-gesture-flip-card'

const FlipCard = ({desc, name}) => {

  const cardFront = () => {
    return(
      <View style={{backgroundColor:'#D16A6A', width:150, height:200, borderRadius:10, justifyContent:'center', borderWidth:2, borderColor:'#FFAEAE', padding:2}}>
          <Text style={{color:'white', textAlign:'center', fontWeight:'bold'}}>{name}</Text>
      </View>
    )
  }

  const cardBack = () => { 
      return(
        <View style={{ width:150, height:200, backgroundColor:'#FFAEAE', borderRadius:10, padding:5, justifyContent:'center'}}>
        {/* <Image source={{ uri:cover_image }} style={{width:'100%', height:'100%'}}/> */}
          <Text style={{ textAlign:'center'}}>{desc}</Text>
        </View>
      )
  }

  return (
    <GestureFlipView width={150} height={200}>
      {cardFront()}
      {cardBack()}
    </GestureFlipView>  
  )
}

export default FlipCard

const styles = StyleSheet.create({})