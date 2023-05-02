import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DatabaseConnection } from '../Database/SQLDatabase'
import { List } from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons'
import { useIsFocused } from '@react-navigation/native';

const db = DatabaseConnection.getConnection();

const MyLists = ({navigation}) => {

  const [userLists, setUserLists] = useState([]);
  const isFocused = useIsFocused();
  const [list, setList] = useState([]);

  const showAllLists = () => {
    db.transaction(function (tx) {
      tx.executeSql(
        `SELECT * FROM lists_table`,
        [],
        (tx, results) => {
          const userLists = [];
          for (let i = 0; i < (results.rows ? results.rows.length : 0); i++){
            userLists.push({
              name: results.rows.item(i).listName,
              description: results.rows.item(i).listDescription,
              id: results.rows.item(i).list_id
            })
          }
          setUserLists(userLists);
        }
      )
    })
  }

  useEffect(()=>{
    showAllLists()
  }, [isFocused])

  const deleteList = (listName) => {
    db.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM itemToList_table WHERE list_name = ?`,
        [listName],
        (tx, results) => {
          console.log('Related rows in itemToList_table have been deleted.');
          tx.executeSql(
            `DELETE FROM lists_table WHERE listName = ?`,
            [listName],
            (tx, results) => {
              console.log('Row has been deleted.');
              alert(`List has been deleted.`);
              showAllLists();
            },
            (error) => {
              console.log(error);
            }
          )
        },
        (error) => {
          console.log(error);
        }
      )
    })
  }

  const renderLists = ({item}) => {
    return (
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <List.Item 
          title={item.name}
          description={item.description}
          style={styles.listBlock}
          onPress={()=>navigation.navigate('MyListOne', {item, listName: item.name})}
        />
        <View style={styles.button}>
          <AntDesign name="minuscircle" size={40} color="#D16A6A" onPress={() => deleteList(item.name)} />
        </View>
      </View>
    )
  }

  return (
    <ScrollView>
      <View style={{backgroundColor:'#FFAEAE', width:'95%', height:150, borderRadius:25, flexDirection:'row', alignItems:'center', alignSelf:'center', marginTop:10}}>
        <View style={{width:'50%', alignItems:'center'}}>
          <Image source={require('../assets/images/booklet.png')} style={{width:200, height:200, resizeMode:'contain'}} />
        </View>
        <View style={{width:'50%', alignItems:'center'}}>
          <Text style={{width:'90%', fontWeight:'bold', textAlign:'center', letterSpacing:3,}}>These are lists that you have created. Touch one to view, and delete items on the list.</Text>
        </View>
      </View>
      <View>
        <FlatList 
          data={userLists}
          renderItem={renderLists}
          style={styles.lists}
        />
      </View>
    </ScrollView>
  )
}

export default MyLists

const styles = StyleSheet.create({
  listBlock: {
    backgroundColor:'#D9D9D9',
    padding:5,
    width:'80%',
    marginBottom: 10,
  },
  lists: {
    padding: 15,
  },
  button: {
    alignSelf:'center',
  }
})