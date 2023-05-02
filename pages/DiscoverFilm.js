import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React,{ useEffect, useState } from 'react'
import { DatabaseConnection } from '../Database/SQLDatabase'
import Database from '../Database/Database';
import FlipCard from '../Components/TVCard';

const db = DatabaseConnection.getConnection();

const DiscoverFilm = ({navigation}) => {

  const [itemData, setItemData] = useState([]);

  useEffect(()=>{
    db.transaction(function(tx){
      tx.executeSql(
        'SELECT * FROM table_items WHERE type = ?',
        ['Movie'],
        (tx, results) => {
            let tempArrayFilm = []
            for (let i=0; i < results.rows.length; i++){
                tempArrayFilm.push(results.rows.item(i))
            }
            setItemData(tempArrayFilm)
        },
        (tx, error) => {
          console.log('Error: ', error);
        }
      )
    })
  }, [])

  const openItemPage = (item) => {
    navigation.navigate('IndexItem', { screen: 'Info', params: {item: item}});
  }

  const flatlistGridFilm = ({item}) => {
    return(
        <View style={{flex:1, padding:20, alignItems:'center'}}>
          <TouchableOpacity onPress={()=>openItemPage(item)}>
            <FlipCard name={item.name} cover_image={item.rating} />
          </TouchableOpacity> 
        </View>
    )
  }

  return (
    <View>
      <FlatList 
        data={itemData}
        renderItem={flatlistGridFilm}
        numColumns={2}
      />
      <Database />
    </View>
  )
}

export default DiscoverFilm

const styles = StyleSheet.create({})