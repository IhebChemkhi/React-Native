import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput, TouchableHighlight, ScrollView } from 'react-native'
const AllItems = (props) => 
{
return(

<View style ={ styles.screen }>
            <View style ={ {justifyContent : 'center'}, {alignItems: 'center'}}>
                <Text style= {styles.text} >Search item by</Text>
                <View style={{flexDirection:"row"}}>
                    <View style={{flex:1}}>
                        <Button title="Category" color="blue" onPress={() => props.navigation.navigate('Category')}> </Button>
                    </View>
                    <View style={{flex:1}}>
                        <Button title="Location" color="blue" onPress={() => props.navigation.navigate('Location')}> </Button>
                    </View>
                    <View style={{flex:1}}>
                        <Button title="Date" color="blue" onPress={() => props.navigation.navigate('Date')}> </Button>
                    </View>
                </View>

                <View style={{flex:1, justifyContent: 'flex-end', padding: 20}}>
                        <Button title="Cancel" color="#000000" onPress={
          () => props.navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          })
        } > </Button>
                </View>
            </View>
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
export default AllItems