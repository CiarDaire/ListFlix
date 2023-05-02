import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import {DatabaseConnection} from '../Database/SQLDatabase'
import Database from '../Database/Database';
import FlipCard from '../Components/TVCard';
import { EvilIcons } from '@expo/vector-icons';
 
const db = DatabaseConnection.getConnection();

const Home = ({navigation}) => {

  const [itemTVData, setItemTVData] = useState([]);
  const [itemFilmData, setItemFilmData] = useState([]);

  useEffect(()=>{
    db.transaction(function(tx){
      tx.executeSql(
          'SELECT * FROM table_items WHERE type = ? LIMIT 0, 5',
          ['TV Series'],
          (tx, results) => {
              let tempArrayTV = []
              for (let i=0; i < results.rows.length; i++){
                  tempArrayTV.push(results.rows.item(i))
              }
              console.log(tempArrayTV);
              setItemTVData(tempArrayTV) 
          },
          (tx, error) => {
            console.log('Error: ', error);
          }
      );
      tx.executeSql(
        'SELECT * FROM table_items WHERE type = ? LIMIT 0, 5',
        ['Movie'],
        (tx, results) => {
            let tempArrayFilms = []
            for (let i=0; i < results.rows.length; i++){
                tempArrayFilms.push(results.rows.item(i))
            }
            console.log(tempArrayFilms);
            setItemFilmData(tempArrayFilms)
        },
        (tx, error) => {
          console.log('Error: ', error);
        }
      );
    })
  }, [])

  const openItemPage = (item) => {
    navigation.navigate('IndexItem', { screen: 'Info', params: {item: item}});
  }

  const discoverTVPage = () => {
    navigation.navigate('DiscoverTV');
  }

  const discoverFilmPage = () => {
    navigation.navigate('DiscoverFilm');
  }

  const flatlistItemsTV = ({item}) => {
    return(
        <View style={{flex:1, padding:10}}>
          <TouchableOpacity onPress={()=>openItemPage(item)}>
            <FlipCard name={item.name} />
          </TouchableOpacity> 
        </View>
    )
  }

  const flatlistItemsFilms = ({item}) => {
    return(
      <View style={{flex:1, padding:10}}>
        <TouchableOpacity onPress={()=>openItemPage(item)}>
          <FlipCard name={item.name} />
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View>
      <View style={styles.headers}>
        <Text style={{fontWeight:'bold', fontSize:23}}>TV Shows</Text>
        <EvilIcons name="arrow-right" size={33} color="black" onPress={discoverTVPage} />
      </View>
      <FlatList 
        data={itemTVData}
        renderItem={flatlistItemsTV}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Database />

      <View style={styles.headers}>
        <Text style={{fontWeight:'bold', fontSize:23}}>Movies</Text>
        <EvilIcons name="arrow-right" size={33} color="black" onPress={discoverFilmPage} />
      </View>
      <FlatList 
        data={itemFilmData}
        renderItem={flatlistItemsFilms}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Database />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor:'grey',
    width:150,
    height:200,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headers: {
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    padding:10
  }
})