import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { DatabaseConnection } from '../Database/SQLDatabase';

const db = DatabaseConnection.getConnection();

// Still requires bug fixes

const Reviews = () => {

  const [comment, setComment] = useState('');
  const [allComments, setAllComments] = useState([]);

  useEffect(()=>{
  db.transaction(function(tx){
    // tx.executeSql(
    //   `DROP TABLE IF EXISTS reviews`,
    //   [],
    //   (tx, results)=>{
    //     console.log('Reviews Table Deleted.')
    //   }
    // )
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS reviews (id INTEGER PRIMARY KEY AUTOINCREMENT, item_id INTEGER, item_name TEXT, comment_review TEXT)`,
      [],
      (tx, results) => {
        console.log('Reviews Table Created.')
        showComments()
      },
      (error)=>{
        console.log(error)
      }
    )
  })
}, [])

const submitComment = () => {
  db.transaction(function(tx){
    // tx.executeSql(
    //   `INSERT INTO reviews (item_name, comment_review) VALUES (?, ?)`,
    //   [item.name, comment],
    //   (tx, results) => {
    //     console.log('Comment Added.')
    //     const allReviews = []
    //     for (let i=0; i < (results.rows ? results.rows.length: 0); i++){
    //       allReviews.push(results.rows.item(i).comment_review)
    //     }
    //     setAllComments(allReviews)
    //   },
    //   (error)=>{
    //     console.log(error)
    //   }
    // )
    tx.executeSql(
      `INSERT INTO reviews (comment_review) VALUES (?)`,
      [comment],
      (tx, results) => {
        console.log('Comment Added.')
        const allReviews = []
        for (let i=0; i < (results.rows ? results.rows.length: 0); i++){
          allReviews.push(results.rows.item(i).comment_review)
        }
        setAllComments(allReviews)
      },
      (error)=>{
        console.log(error)
      }
    )
  })
}

const showComments = () => {
  db.transaction(function(tx){
    // tx.executeSql(
    //   `SELECT comment_review FROM reviews WHERE item_name=?`,
    //   [item.name],
    //   (tx, results) => {
    //     console.log('Showing Comments.')
    //   },
    //   (error)=>{
    //     console.log(error)
    //   }
    // )
    tx.executeSql(
      `SELECT comment_review FROM reviews`,
      [],
      (tx, results) => {
        console.log('Showing Comments.')
      },
      (error)=>{
        console.log(error)
      }
    )
  })
}

const renderReviews = () => {
  return (
    <View>
      <Text>{item.comment_review}</Text>
    </View>
  )
}

return (
  <ScrollView>
    <TextInput
      label='Comment'
      value={comment}
      onChangeText={comment => setComment(comment)}
      style={styles.commentBox}
      multiline={true}
      placeholder='Write a comment...'
    />
    <TouchableOpacity onPress={() => submitComment(item.name)} style={styles.button} >
      <Text style={{fontSize:16, color:'white', fontWeight:'bold'}}>Submit</Text>
    </TouchableOpacity>
    <FlatList
      data={allComments}
      renderItem={renderReviews}
      style={styles.listBlock}
    />
  </ScrollView>
)


  // const [comment, setComment] = useState('');
  // const [allComments, setAllComments] = useState([]);

  // useEffect(()=>{
  //   db.transaction(function(tx){
  //     // tx.executeSql(
  //     //   `DROP TABLE IF EXISTS reviews`,
  //     //   [],
  //     //   (tx, results)=>{
  //     //     console.log('Reviews Table Deleted.')
  //     //   }
  //     // )
  //     tx.executeSql(
  //       `CREATE TABLE IF NOT EXISTS reviews (id INTEGER PRIMARY KEY AUTOINCREMENT, item_id INTEGER, item_name TEXT, comment_review TEXT)`,
  //       [],
  //       (tx, results) => {
  //         console.log('Reviews Table Created.')
  //         showComments()
  //       },
  //       (error)=>{
  //         console.log(error)
  //       }
  //     )
  //   })
  // }, [])

  // const submitComment = ({item}) => {
  //   db.transaction(function(tx){
  //     tx.executeSql(
  //       `INSERT INTO reviews (item_name, comment_review) VALUES (?, ?)`,
  //       [item.name, comment],
  //       (tx, results) => {
  //         console.log('Comment Added.')
  //         const allReviews = []
  //         for (let i=0; i < (results.rows ? results.rows.length: 0); i++){
  //           allReviews.push(results.rows.item(i).comment)
  //         }
  //         setAllComments(allComments)
  //       },
  //       (error)=>{
  //         console.log(error)
  //       }
  //     )
  //   })
  // }

  // const showComments = (item) => {
  //   db.transaction(function(tx){
  //     tx.executeSql(
  //       `SELECT comment_review FROM reviews WHERE item_name=?`,
  //       [item.name],
  //       (tx, results) => {
  //         console.log('Showing Comments.')
  //       },
  //       (error)=>{
  //         console.log(error)
  //       }
  //     )
  //   })
  // }

  // const renderReviews = () => {
  //   return (
  //     <View>
  //       <Text>{comment}</Text>
  //     </View>
  //   )
  // }

  // return (
  //   <ScrollView>
  //     <TextInput
  //       label='Comment'
  //       value={comment}
  //       onChangeText={comment => setComment(comment)}
  //       style={styles.commentBox}
  //       multiline={true}
  //       placeholder='Write a comment...'
  //     />
  //     <TouchableOpacity onPress={submitComment({item})} style={styles.button} >
  //       <Text style={{fontSize:16, color:'white', fontWeight:'bold'}}>Submit</Text>
  //     </TouchableOpacity>
  //     <FlatList
  //       data={allComments}
  //       renderItem={renderReviews}
  //       style={styles.listBlock}
  //     />
  //   </ScrollView>
  // )
}

export default Reviews

const styles = StyleSheet.create({
  commentBox: {
    width:'100%',
    borderColor:'grey',
    borderWidth:1,
    height:150,
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
    backgroundColor:'#D16A6A',
    width:'40%', 
    height:40,
    marginTop:20,
    marginBottom:20,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'flex-end',
    marginRight:20,
    borderRadius:30
  },
  listBlock: {
    backgroundColor:'#D9D9D9',
    padding:5,
    width:'80%',
    marginBottom: 10,
  },
})