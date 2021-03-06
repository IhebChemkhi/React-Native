import React from 'react'
import { View, Text, Button } from 'react-native'

const View1 = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 50, fontWeight: '700' }}>Application content</Text>
      <Text>You have successfully logged in</Text>
      <Button
        title="Search for an item"
        onPress={() => props.navigation.navigate('SearchItems')}
      />
      <Button
        title="See all your items"
        onPress={() => props.navigation.navigate('items')}
      />
      <Button
        title="Add a new Item"
        onPress={() => props.navigation.navigate('Todos')}
      />
      <Button
        title="Logout"
        onPress={ props.onLogout }
      />
    </View>
  )
}

export default View1
