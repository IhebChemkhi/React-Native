import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, ScrollView,TextInput, TouchableHighlight } from 'react-native'
const category = (props) => {
    const [category, setCategory] = useState("");
    
return ( 

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 50}}>
       <TextInput
        style={ styles.input }
        value={ category }
        placeholder="Category"
        onChangeText={ value => setCategory(value)}
      />
      <TouchableHighlight onPress={ () => props.SeachByCategory(category) }>
        <View style={ styles.primaryButton }>
          <Text style={ styles.primaryButtonText }>search</Text>
        </View>
      </TouchableHighlight>

                <Text style={{ fontSize: 18, fontWeight: '500' }}>Items</Text>
                <ScrollView>
                {
                props.data.map(da => {
                    return (
                        <View key={da.id}>
                        
                        <Text>{da.title} </Text>
                        <Text>{da.description} </Text>
                        <Text>{da.category} </Text>
                        <Text>{da.location} </Text>
                        <Text>{da.images} </Text>
                        <Text>{da.date} </Text>
                        <Text>{da.type} </Text>
                        <Text>{da.shipping} </Text>
                        <Text>{da.seller.username} </Text>
                        <Text>{da.seller.email} </Text>
                        <Text></Text>
                        <Text></Text>
                        </View>
                    )
                } )
                }
                </ScrollView>

            </View>
)
}

const styles = StyleSheet.create({
    screen: {
      backgroundColor: 'white',
      flex: 1,
      alignItems: 'center'
    },
    header: {
      fontSize: 40,
      marginBottom: 20,
      color: 'white'
    },
    text: {
      padding: 10,
      fontSize: 20,
      color: 'black'
    },
    input: {
      borderWidth: 1,
      borderRadius: 20,
      height: 40,
      width: '90%',
      backgroundColor: 'white',
      textAlign: 'center',
      fontSize: 18,
      marginTop: 5,
      marginBottom: 20
    },
    primaryButton: {
      backgroundColor: 'rgb(0, 153, 51)',
      height: 60,
      width: 200,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'black',
      borderWidth: 2,
      marginTop: 20,
      marginBottom: 10
    },
    primaryButtonText: {
      color: 'white',
      fontSize: 20
  
    }
  });



export default category