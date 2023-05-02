import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import {DatabaseConnection} from '../Database/SQLDatabase'
import FlipCard from '../Components/TVCard';
import { AntDesign } from '@expo/vector-icons'

const db = DatabaseConnection.getConnection();

const MyListOne = ({ route, navigation }) => {

  const { item } = route.params;

  const [listData, setListData] = useState([]);
  const [sum, setSum] = useState(0);

  const showList = () => {
    db.transaction(function(tx){
      tx.executeSql(
        `SELECT item_name, summary FROM itemToList_table WHERE list_id=${item.id}`,
        [],
        (tx, results) => {
          console.log('Relational table selected.')
          let listData = []
          for (let i=0; i < (results.rows ? results.rows.length: 0); i++){
            listData.push({
              itemName: results.rows.item(i).item_name,
              itemSummary: results.rows.item(i).summary
            })
          }
          setListData(listData)
        },
        (error) => {
          console.log(error)
        }
      )
      tx.executeSql(
        `SELECT COUNT(*) as count FROM itemToList_table WHERE list_id=${item.id}`,
        [],
        (tx, results) => {
          const sum = results.rows.item(0).count;
          setSum(sum)
        },
        (error) => {
          console.log(error)
        }
      )
    })
  }

  useEffect(()=>{
    showList()
  }, [])

  const deleteItem = (itemName) => {
    db.transaction(function(tx){
      tx.executeSql(
        `DELETE FROM itemToList_table WHERE item_name=?`,
        [itemName],
        (tx, results) => {
          console.log('Item deleted from list.')
          alert(`${itemName} has been removed from the list.`)
          showList()
        },
        (error) => {
          console.log(error)
        }
      )
    })
  }

  const flatlistLists = ({item}) => {
    return (
      <View style={{width:'50%'}}>
        <View style={{flex:1, padding:10}}>
          <FlipCard 
            name={item.itemName}
            desc={item.itemSummary} 
          />
          <View style={{justifyContent:'space-between', flexDirection:'row', padding:10}}>
            <Text style={{fontWeight:'bold', fontSize:14, width:'85%'}}>{item.itemName}</Text>
            <View style={styles.button}>
              <AntDesign name="minuscircle" size={20} color="#D16A6A" onPress={() => deleteItem(item.itemName)} />
            </View>
          </View>
        </View>
      </View>
    )
  }

  return (
    <ScrollView>
      <View style={{borderBottomColor:'#E5E6E8', borderBottomWidth:2, flexDirection:'column', minHeight:100, justifyContent:'space-evenly', padding:15}}>
        <Text style={styles.textA}>There are {sum} items in this list.</Text>
        <Text style={styles.textB}>{item.description}</Text>
      </View>
      <View style={{backgroundColor:'#FFAEAE', width:'85%', height:100, borderRadius:25, flexDirection:'row', alignItems:'center', alignSelf:'center', marginTop:10}}>
        <View style={{width:'50%', alignItems:'center'}}>
          <Image source={require('../assets/images/swipe.png')} style={{width:70, height:70, resizeMode:'contain'}} />
        </View>
        <View style={{width:'40%', alignItems:'center'}}>
          <Text style={{width:'90%', fontWeight:'bold', textAlign:'center', letterSpacing:3,}}>Flip the cards to read what the show is about!</Text>
        </View>
      </View>
        <FlatList
          data={listData}
          renderItem={flatlistLists}
          numColumns={2}
          style={{alignSelf:'center', width:'90%'}}
        />
    </ScrollView>
  )
}

export default MyListOne

const styles = StyleSheet.create({
  textA: {
    fontSize:16,
    fontWeight:'bold',
    color:'#D16A6A',
    paddingBottom:10
  },
  textB: {
    fontSize:16
  }
})