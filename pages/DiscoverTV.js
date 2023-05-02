import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { DatabaseConnection } from '../Database/SQLDatabase'
import Database from '../Database/Database';
import FlipCard from '../Components/TVCard';

const db = DatabaseConnection.getConnection();

const DiscoverTV = ({navigation}) => {

  const [itemData, setItemData] = useState([]);

  useEffect(()=>{
    db.transaction(function(tx){
      tx.executeSql(
        'SELECT * FROM table_items WHERE type = ?',
        ['TV Series'],
        (tx, results) => {
            let tempArrayTV = []
            for (let i=0; i < results.rows.length; i++){
                tempArrayTV.push(results.rows.item(i))
            }
            setItemData(tempArrayTV)
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

  const flatlistGridTV = ({item}) => {
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
        renderItem={flatlistGridTV}
        numColumns={2}
      />
      <Database />
    </View>
  )
}

export default DiscoverTV

const styles = StyleSheet.create({})