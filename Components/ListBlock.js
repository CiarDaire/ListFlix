import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { List } from 'react-native-paper'

const ListBlock = ({listName, listDesc}) => {
  return (
    <List.Item
        title={listName}
        description={listDesc}
        left={props => <List.Icon {...props} icon="folder" />}
    />
  )
}

export default ListBlock

const styles = StyleSheet.create({})