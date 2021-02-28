import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput,ScrollView , TouchableHighlight } from 'react-native'
const Todos = (props) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");
    const [images, setImages] = useState("");
    const [price, setPrice] = useState("");
    const [type, setType] = useState("");
    const [shipping, setShipping] = useState("");
        return (
          <ScrollView>
          <View style={ styles.screen }>
            <Text>Please enter the title of the item</Text>
            <TextInput
              style={ styles.input }
              value={ title }
              placeholder="johndoe"
              onChangeText={ value => setTitle(value)}
            />

            <Text>Please enter the description of the item</Text>
            <TextInput
              style={ styles.input }
              value={ description }
              placeholder="johndoe"
              onChangeText={ value => setDescription(value)}
            />

            <Text>Please enter the category of the item</Text>
            <TextInput
              style={ styles.input }
              value={ category }
              placeholder="johndoe"
              onChangeText={ value => setCategory(value)}
            />

            <Text>Please enter the location of the item</Text>
            <TextInput
              style={ styles.input }
              value={ location }
              placeholder="johndoe"
              onChangeText={ value => setLocation(value)}
            />
      
            <Text>Please enter the image of the item</Text>
            <TextInput
              style={ styles.input }
              value={ images }
              placeholder="johndoe"
              onChangeText={ value => setImages(value)}
            />

            <Text>Please enter the price of the item</Text>
            <TextInput
              style={ styles.input }
              value={ price }
              placeholder="johndoe"
              onChangeText={ value => setPrice(value)}
            />

            <Text>Please enter the type of the item</Text>
            <TextInput
              style={ styles.input }
              value={ type }
              placeholder="johndoe"
              onChangeText={ value => setType(value)}
            />

            <Text>Please enter the shipping of the item</Text>
            <TextInput
              style={ styles.input }
              value={ shipping }
              placeholder="johndoe"
              onChangeText={ value => setShipping(value)}
            />
            <TouchableHighlight onPress={ () => 
              props.addItemPressed(title, description, category, location, images, price, type, shipping)}>
              <View style={ styles.primaryButton }>
                <Text style={ styles.primaryButtonText }>ADD ITEM</Text>
              </View>
            </TouchableHighlight>
            <Button
              title="Cancel"
              color="#000000"
              onPress={
                () => props.navigation.reset({
                  index: 0,
                  routes: [{ name: 'View1' }],
                })
              } />
          </View>
          </ScrollView>
        )
  
    
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontSize: 40,
    marginBottom: 20,
    color: 'white'
  },
  text: {
    fontSize: 20,
    color: 'white'
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

export default Todos