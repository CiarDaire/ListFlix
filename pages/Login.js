import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { TextInput, Button } from 'react-native-paper';
import { auth } from '../Firebase';
import { DatabaseConnection } from '../Database/SQLDatabase';

const db = DatabaseConnection.getConnection();

const Login = ({navigation}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userID, setUserID] = useState(null);

  useEffect(()=>{
    db.transaction(function (tx) {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS user_accounts (user_id INTEGER PRIMARY KEY AUTOINCREMENT, ${email} VARCHAR(50))`,
        [],
        (tx, results) => {
          console.log('Table for users created.')
        }
      )
    })
  }, [])

  const addUser = () => {
    db.transaction(function (tx) {
      tx.executeSql(
        `INSERT INTO user_accounts (user_id, emailAddress) VALUES (?, ?)`,
        [userID, email],
        (tx, results) => {
          console.log('User has been created! Under id number', userID, 'and email', email)
        }
      )
    })
  }  
  
  const handleSignup = () => {
      auth
      .createUserWithEmailAndPassword(email, password)
      .then(
          userCredentials =>{
              const user = userCredentials.user
              console.log('User registered with:', user.email)
              alert('You have registered! Welcome to ListPit')
              setUserID(user.uid);
              addUser()
          }
      )
      .catch(error =>alert(error.message))
  }

  const handleLogin = () =>{
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials =>{
        const user = userCredentials.user
        console.log('User logged in with:', user.email)
        navigation.navigate('Index', { screen : 'Home' })
      })
      .catch(error =>{
        console.log('Error logging in:', error)
        alert(error.message)
      })
  }

  return (
    <View style={{backgroundColor:'#FFAEAE', flexDirection:'column', height:'100%'}}>
      <View style={{marginTop:100}}>
        <View style={styles.logo}>
          <Text style={styles.list}>LIST</Text>
          <Text style={styles.pit}>FLIX</Text>
        </View>
        <Text style={styles.slogan}>Build and share your own catalogs</Text>
      </View>
      <View style={{alignSelf:'center', marginTop:40, height:150, justifyContent:'space-evenly'}}>
        <TextInput
          style={styles.textinput}
          label="Email"
          value={email}
          onChangeText={email => setEmail(email)}
          mode="outlined"
          outlineColor='white'
          activeOutlineColor='white'
          textColor='white'
          outlineStyle={{borderRadius:15}}
          theme={{colors:{onSurfaceVariant:'white'}}}
        />
        <TextInput
          style={styles.textinput}
          label="Password"
          secureTextEntry
          value={password}
          onChangeText={password => setPassword(password)}
          mode="outlined"
          outlineColor='white'
          activeOutlineColor='white'
          textColor='white'
          outlineStyle={{borderRadius:15}}
          theme={{colors:{onSurfaceVariant:'white'}}}
        />
      </View>
      <View style={{alignSelf:'center', height:150, justifyContent:'space-evenly', marginTop:15}}>
        <Button mode="elevated" style={styles.button} textColor='#D16A6A' onPress={handleLogin}>
          <Text style={{fontSize:18, fontWeight:'bold'}}>Log In</Text>
        </Button>
        <Button mode="elevated" style={styles.button} textColor='white' buttonColor='#D16A6A' onPress={handleSignup}>
        <Text style={{fontSize:18, fontWeight:'bold'}}>Sign Up</Text>
        </Button>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  logo: {
    flexDirection:'row',
    width:'100%',
    justifyContent:'center',
    marginTop:70
  },
  list: {
    fontSize:60,
    fontWeight:'900',
    color:'white'
  },
  pit: {
    fontSize:60,
    fontWeight:'900',
    color:'#D16A6A',
  },
  slogan: {
    color:'white',
    textAlign:'center',
    letterSpacing:3,
    fontWeight:'bold'
  },
  textinput: {
    width:300,
    backgroundColor:'#FFAEAE',
    fontWeight:'bold',
  },
  button: {
    width:300,
    height:50,
    justifyContent:'center'
  }
})