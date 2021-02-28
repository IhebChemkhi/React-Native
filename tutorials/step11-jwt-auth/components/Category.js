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
                props.data.map(d => {
                    return (
                      <View key={d.id}>
                  
                        <Text>{d.title} </Text>
                        <Text>{d.description} </Text>
                        <Text>{d.category} </Text>
                        <Text>{d.location} </Text>
                        <Text>{d.images} </Text>
                        <Text>{d.date} </Text>
                        <Text>{d.type} </Text>
                        <Text>{d.shipping} </Text>
                        <Text>{d.seller.username} </Text>
                        <Text>{d.seller.email} </Text>
                        <Text></Text>
                        <Text></Text>
                      </View>
                    )
                } )
                }
                <Button
                        title="Return"
                        color="#000000"
                        onPress={
                        () => props.navigation.reset({
                            index: 0,
                            routes: [{ name: 'AllItems' }],
                        })
                        } 
                />
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






/*import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, ScrollView, TouchableHighlight } from 'react-native'
const category = (props) => {
    let i=0;
   // console.log (props.itemsData);
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{ fontSize: 18, fontWeight: '500' }}>Items</Text>
                <ScrollView>
                {
                props.itemsData.map(item => {
                    return (
                        <>
                        <Text>Item-{i=i+1}-</Text>
                        <Text>{item.title} </Text>
                        <Text>{item.description} </Text>
                        <Text>{item.category} </Text>
                        <Text>{item.location} </Text>
                        <Text>{item.images} </Text>
                        <Text>{item.date} </Text>
                        <Text>{item.type} </Text>
                        <Text>{item.shipping} </Text>
                        <Text>{item.seller.username} </Text>
                        <Text>{item.seller.email} </Text>
                        <Text></Text>
                        <Text></Text>

                        </>
                    )
                } )
                }
                </ScrollView>

            </View>
)}
*/
export default category