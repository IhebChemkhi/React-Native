import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput, TouchableHighlight, ScrollView } from 'react-native'
import axios from 'axios';


const SignUpScreen = (props) => {

  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [dateofbirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
 

  function signupPressed()
  {
    let body = {
      Username: username,
      FirstName: firstname,
      LastName: lastname,
      DateOfBirth: dateofbirth,
      Email: email,
      Gender: gender,
      City: city,
      CountryCode: country,
      Password: password
    };
    console.log(props.apiURI+'/users');
    axios({
      method: 'post',
      url: props.apiURI+'/users',
      data: body,
      headers: {"Content-type": "application/json"}
      })
      .then(response => {
          //handle success
          props.navigation.reset({
            index: 0,
            routes: [{ name: 'SignupCompleted' }],
          })
      })
      .catch(error => {
          //handle error
          //console.log(error.response.request);
          alert("Sign up failed please try again :)");
      });


  }

  return (
    <ScrollView>
    <View style={ styles.screen }>
      <Text style={ styles.header }>Sign Up</Text>
      <Text>Please enter your username</Text>
      <TextInput
        style={ styles.input }
        value={ username }
        placeholder="johndoe"
        onChangeText={ value => setUsername(value)}
      />

      <Text>Please enter your firstname</Text>
      <TextInput
        style={ styles.input }
        value={ firstname }
        placeholder="Mark"
        onChangeText={ value => setFirstname(value)}
      />

      <Text>Please enter your lastname</Text>
      <TextInput
        style={ styles.input }
        value={ lastname }
        placeholder="tozgar"
        onChangeText={ value => setLastname(value)}
      />

<Text>Please enter your birth date</Text>
      <TextInput
        style={ styles.input }
        value={ dateofbirth }
        placeholder="1999-09-09"
        onChangeText={ value => setDateOfBirth(value)}
      />

      <Text>Please enter your email</Text>
      <TextInput
        style={ styles.input }
        value={ email }
        placeholder="test@email.com"
        onChangeText={ value => setEmail(value)}
      />

      <Text>Please enter your gender</Text>
      <TextInput
        style={ styles.input }
        value={ gender }
        placeholder="male"
        onChangeText={ value => setGender(value)}
      />

      <Text>Please enter your countryCode</Text>
      <TextInput
        style={ styles.input }
        value={ country }
        placeholder="FI"
        onChangeText={ value => setCountry(value)}
      />

      <Text>Please enter your city</Text>
      <TextInput
        style={ styles.input }
        value={ city }
        placeholder="Oulu"
        onChangeText={ value => setCity(value)}
      />

      <Text>Please enter your password</Text>
      <TextInput
        style={ styles.input }
        value={ password }
        placeholder="password"
        onChangeText={ value => setPassword(value)}
      />
      <TouchableHighlight onPress={ () => signupPressed() }>
        <View style={ styles.primaryButton }>
          <Text style={ styles.primaryButtonText }>Sign up</Text>
        </View>
      </TouchableHighlight>
      <Button
        title="Cancel"
        color="#000000"
        onPress={
          () => props.navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          })
        } />
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'rgb(227, 178, 0)',
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


export default SignUpScreen
