import { StyleSheet, Text, View, Modal, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DatabaseConnection } from '../Database/SQLDatabase'

const db = DatabaseConnection.getConnection();

const CreateList = ({navigation}) => {

  const [listTitle, setListTitle] = useState('');
  const [listDesc, setListDesc] = useState('');

  useEffect(()=>{
    db.transaction(function (tx) {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS lists_table (list_id INTEGER PRIMARY KEY AUTOINCREMENT, listName TEXT, listDescription TEXT)`,
        [],
        (tx, results) => {
          console.log('Table of Lists Created.')
        },
        (error) => {
          console.log(error)
        }
      )
    })
  }, [])

  const handleCreateList = () => {
    if (listTitle.length === 0) {
      alert('Title cannot be empty.');
      return;
    }
    db.transaction(function (tx) {
      tx.executeSql(
        `SELECT listName from lists_table WHERE listName='${listTitle}'`,
        [],
        (tx, results) => {
          if (results.rows.length === 0) {
            setListTitle(listTitle)
            tx.executeSql(
              'INSERT INTO lists_table (listName, listDescription) VALUES (?, ?)',
              [listTitle, listDesc],
              (tx, results) => {
                console.log('Name and Description of List added to Table of Lists.'),
                alert(`${listTitle} has been created!`)
                setListTitle('')
                setListDesc('')
                navigation.navigate('Index', { screen: 'My Lists' })
              },
              (error) => {
                console.log(error)
              }
            )
          }else{
            alert('That list already exists. Please make a list with a new name.')
          }
        }
      ),
      db.transaction(function (tx) {
        tx.executeSql(
          `SELECT COUNT(*) as count FROM lists_table`,
          [],
          (tx, results) => {
            const count = results.rows.item(0).count;
            if (count === 0) {
              console.log('Table is empty.');
            } else {
              console.log(`Table has ${count} rows.`);
            }
          },
          (error) => {
            console.log(error)
          }
        )
      })
    })
  }

  return (
    <View style={{padding:10}}>
      <View>
        <Text style={{fontWeight:'bold', fontSize:23, paddingLeft:5}}>List Name</Text>
        <Text style={{paddingLeft:5}}>What will you call the list? *</Text>
        <TextInput
          label='List Name'
          value={listTitle} 
          onChangeText={listTitle => setListTitle(listTitle)} 
          style={styles.inputBox}
        />
      </View>
      <View style={{marginTop:20}}>
        <Text style={{fontWeight:'bold', fontSize:23, paddingLeft:5}}>List Description</Text>
        <View style={{flexDirection:'row'}}>
          <Text style={{paddingLeft:5}}>Tell people what your list is about! </Text>
          <Text style={{fontStyle:'italic'}}>Optional.</Text>
        </View>
        <TextInput
          label='List Description'
          value={listDesc}
          onChangeText={listDesc => setListDesc(listDesc)}
          style={styles.inputBoxDesc}
          multiline={true}
        />
      </View>
      <TouchableOpacity onPress={handleCreateList} style={{alignSelf:'center', marginTop:50}}>
        <View style={styles.button}>
          <Text style={{color:'white', fontStyle:'bold', fontSize:16}}>Create List</Text>
        </View>
      </TouchableOpacity>
    </View>
    )
  }

export default CreateList

const styles = StyleSheet.create({
  inputBox: {
    width:350,
    borderColor:'grey',
    borderWidth:1,
    alignSelf:'center',
    marginTop:30,
    height:50,
    fontSize:24,
    paddingLeft:5,
    backgroundColor:'#D9D9D9',
    borderWidth:0
  },
  inputBoxDesc: {
    width:350,
    borderColor:'grey',
    borderWidth:1,
    height:150,
    marginTop:30,
    paddingLeft:5,
    padding:5,
    fontSize:20,
    alignSelf:'center',
    backgroundColor:'#D9D9D9',
    textAlignVertical:'top',
    lineHeight:30,
    borderWidth:0
  },
  button: {
    width:200,
    height:40,
    backgroundColor:'#D16A6A',
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  }
})  