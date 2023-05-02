import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Picker } from '@react-native-picker/picker';
import { DatabaseConnection } from '../Database/SQLDatabase';

const db = DatabaseConnection.getConnection();

db.exec(
  [{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], 
  false, 
  () =>   console.log('Foreign keys turned on') 
);

const Item = ({ route }) => {
  const { item } = route.params;

  const [selectedList, setSelectedList] = useState('');
  const [allLists, setAllLists] = useState([]);

  useEffect(()=>{
    db.transaction(function(tx){
      tx.executeSql(
        `SELECT listName FROM lists_table`,
        [],
        (tx, results) => {
          console.log(results.rows)
          const allLists = []
          for (let i=0; i < (results.rows ? results.rows.length : 0); i++){
            allLists.push(results.rows.item(i).listName);
          }
          setAllLists(allLists)
        }
      ),
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS itemToList_table (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          list_id INTEGER,
          item_id INTEGER,
          item_name TEXT,
          list_name TEXT,
          FOREIGN KEY(list_id) REFERENCES lists_table(list_id),
          FOREIGN KEY(item_id) REFERENCES table_items(id)
          )`,
        [],
        (tx, results) => {
          console.log('Relational table created.')
        },
        (error) => {
          console.log(error)
        }
      )
      tx.executeSql(
        `ALTER TABLE itemToList_table ADD COLUMN summary TEXT`,
        [],
        (tx, results) => {
          console.log('summary column added to table.')
        },
        (error) => {
          console.log(error)
        }
      )
    })
  }, [])

  const addToList = () => {
    console.log('Function addToList accessed.')
    db.transaction(function(tx){
      tx.executeSql(
        `SELECT list_id, listName FROM lists_table WHERE listName = ?`,
        [selectedList],
        (tx, results) => {
          console.log('List Ids Selected.')
          const listId = results.rows.item(0).list_id
          const listName = results.rows.item(0).listName
          tx.executeSql(
            `INSERT INTO itemToList_table (list_id, item_id, item_name, list_name, summary) VALUES (?, ?, ?, ?, ?)`,
            [listId, item.id, item.name, listName, item.summary],
            (tx, results) => {
              console.log('Relation between list and item created.')
              alert(`${item.name} has been added to ${listName}`)
            },
            (error) => {
              console.log(error)
            }
          )
        },
        (error) => {
          console.log(error)
        }
      ),
      tx.executeSql(
        `SELECT * FROM itemToList_table`,
        [],
        (_, { rows: { _array } }) => {
          console.log(_array);
        }
      );
    })
  }

  return (
    <ScrollView>
      <View style={{width:'100%', height:200, backgroundColor:'#FFAEAE'}}></View>
      <View style={styles.headers}>
        <Text style={styles.headersText}>{item.name}</Text>
        <Text style={styles.headersText}>{item.rating}</Text>
      </View>
      <View style={{marginLeft:20}}>
        <Text style={styles.category}>Type: </Text><Text>{item.type}</Text><Text style={styles.category}>Genres: </Text><Text>{item.genres}</Text><Text style={styles.category}>Release Year: </Text><Text>{item.year}</Text><Text style={styles.category}>Produced By: </Text><Text>{item.production}</Text><Text style={styles.category}>Creators: </Text><Text>{item.creators}</Text>
      </View>
      <View style={{borderBottomColor:'#E3E5E6', flexDirection:'row', justifyContent:'space-around', borderBottomWidth:2}}>
        <View style={styles.picker}>
          <Picker mode="dropdown" selectedValue={selectedList} onValueChange={(selectedList) => setSelectedList(selectedList)}>
            <Picker.Item label="Select List" value="default" />
            {allLists.map((userList)=>(
              <Picker.Item label={userList} value={userList} key={userList} style={{color:'black'}} />
            ))}
          </Picker>
        </View>
        <TouchableOpacity onPress={addToList} style={styles.buttons} disabled={!selectedList} >
          <Text style={{fontSize:16, color:'white', fontWeight:'bold'}}>Add To List</Text>
        </TouchableOpacity>
      </View>
      <View style={{borderBottomColor:'#E3E5E6', flexDirection:'column', borderBottomWidth:2}}>
        <View style={styles.headers}>
          <Text style={styles.headersText}>Summary</Text>
        </View>
        <View style={{alignSelf:'center', width:'90%'}}>
          <Text style={{letterSpacing:2, marginBottom:20}}>{item.summary}</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default Item

const styles = StyleSheet.create({
  headers: {
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    padding:10
  },
  buttons: {
    backgroundColor:'#D16A6A',
    width:'100%',
    width:'40%', 
    height:40,
    marginTop:20,
    marginBottom:20,
    alignItems:'center',
    justifyContent:'center',
  },
  picker: {
    backgroundColor:'#E4E5E7',
    width:'40%', 
    height:40,
    marginTop:20,
    marginBottom:20,
  },
  headersText: {
    fontWeight:'bold',
    fontSize:23
  },
  category: {
    fontWeight:'bold',
    letterSpacing:2
  }
})