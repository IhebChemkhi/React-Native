import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import View1 from './todoApp/View1'
import Todos from './todoApp/Todos'
import Item from './todoApp/Items'
import Category from './todoApp/Category'
import Date from './todoApp/Date'
import Location from './todoApp/Location'
import AllItems from './todoApp/AllItems'
import ModifyItem from './todoApp/ModifyItem'
import axios from 'axios';

const Stack = createStackNavigator();

export default class TodoApp extends Component {

  constructor(props) {

    super(props);
    this.state = {
      todos: [],
      todosC: [],
      todosL: [],
      todosD: []
    }    
  }

  componentDidMount() {
    fetch(this.props.apiURI + '/items/user', {
      method: 'GET',
      headers: {
        "Authorization": "Bearer " + this.props.jwt,
      }
    })
    .then(response => {
      if (response.ok == false) {
        throw new Error("HTTP Code " + response.status + " - " + JSON.stringify(response.json()));
      }
      return response.json();
    })
    .then(json => {
      console.log("Todos GET successful")
      console.log("Received following JSON");
      //console.log(json);

      this.setState({ todos: json})
    })
    .catch(error => {
      //console.log("Error message:")
      console.log(error.message)
    });
  }


  getItems = () =>
  {
    fetch(this.props.apiURI + '/items/user', {
      method: 'GET',
      headers: {
        "Authorization": "Bearer " + this.props.jwt,
      }
    })
    .then(response => {
      if (response.ok == false) {
        throw new Error("HTTP Code " + response.status + " - " + JSON.stringify(response.json()));
      }
      return response.json();
    })
    .then(json => {
      console.log("Todos GET successful")
      console.log("Received following JSON");
      //console.log(json);

      this.setState({todos : json})
    })
    .catch(error => {
      //console.log("Error message:")
      console.log(error.message)
    });

  }
  /*
  getUserItems = (userID) =>
  {
    axios({
      method: 'GET',
      url: this.props.apiURI+'/users/userID/items',
      headers: {
          "Authorization": "Bearer " + this.props.jwt,
          "Content-type": "application/json"
      }
    })
  }
*/
  addItemPressed = (title, description, category, location, images, price, type, shipping) =>
    {
      let items = {
        title: title,
        description: description,
        category: category,
        location: location,
        images: images,
        price: parseInt(price),
        type: type,
        shipping: shipping
      };
      //console.log(props.apiURI+'/users/items');
      axios({
        method: 'post',
        url: this.props.apiURI+'/users/items',
        data: items,
        headers: {
          "Authorization": "Bearer " + this.props.jwt,
          "Content-type": "application/json"}
        })
        .then(response => {
            //handle success
            this.getItems()
            alert("adding item good :)");

            this.props.navigation.reset({
              index: 0,
              routes: [{ name: 'View1' }],
            })
        })
        .catch(function (error) {
            //handle error
            console.log(error.response);
            alert("adding item failed ");
        });

      }



      SeachByCategory = (category) =>
  {
    axios({
      method: 'get',
      url: this.props.apiURI+'/items/searchByCategory/'+category,
      
      })
      .then(response => {
          //handle success
          // console.log(response.data);
          this.setState({ todosC: response.data})
          // this.getItems();
          //alert("DONE");
      })
      .catch(function (error) {
          //handle error
          console.log(error);
          alert("NO");
      });
  }

  SeachByLocation = (location) =>
  {
    axios({
      method: 'get',
      url: this.props.apiURI+'/items/searchByLocation/'+location,
      
      })
      .then(response => {
          //handle success
          console.log(response.data);
          this.setState({ todosL: response.data})
          //this.getItems();
          //alert("DONE");
      })
      .catch(function (error) {
          //handle error
          console.log(error);
          alert("NO");
      });
  }

  SeachByDate = (date) =>
  {
    axios({
      method: 'get',
      url: this.props.apiURI+'/items/searchByDate/'+date,
      
      })
      .then(response => {
          //handle success
          console.log(response.data);
          this.setState({ todosD: response.data})
          //this.getItems();
          //alert("DONE");
      })
      .catch(function (error) {
          //handle error
          console.log(error);
          alert("NO");
      });
  }


      modifyItemPressed = (title, description, category, location, images, price, type, shipping,id) =>
    {
      let items = {
        title: title,
        description: description,
        category: category,
        location: location,
        images: images,
        price: parseInt(price),
        type: type,
        shipping: shipping
      };
      //console.log(props.apiURI+'/users/items');
      axios({
        method: 'put',
        url: this.props.apiURI+'/users/items/'+id,
        data: items,
        headers: {
          "Authorization": "Bearer " + this.props.jwt,
          "Content-type": "application/json"}
        })
        .then(response => {
            //handle success
            this.getItems();
            alert("Item modified");
        })
        .catch(function (error) {
            //handle error
            console.log(error.response);
            alert("Modifying Item Failed");
        });

      }



      deleteItemPressed = (id) =>
      {
        axios({
          method: 'delete',
          url: this.props.apiURI+'/users/items/'+id,
          headers: {
            "Authorization": "Bearer " + this.props.jwt,
            "Content-type": "application/json"}
          })
          .then(response => {
              //handle success
              this.getItems();
              alert("Item deleted successfully");
          })
          .catch(function (error) {
              //handle error
              console.log(error.response);
              alert("Deleting Item Failed");
          });
      }


/*
  onTodoAdd = (description, dueDate) => {
    fetch(this.props.apiURI + '/todosJWT', {
      method: 'POST',
      headers: {
        "Authorization": "Bearer " + this.props.jwt,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ description, dueDate })
    })
    .then(response => {
      if (response.ok == false) {
        throw new Error("HTTP Code " + response.status + " - " + JSON.stringify(response.json()));
      }
      return response.json();
    })
    .then(json => {
      console.log("Todos POST successful")
      console.log("Received following JSON");
      console.log(json);

      this.setState({ todos: json})
    })
    .catch(error => {
      console.log("Error message:")
      console.log(error.message)
    });
  }
*/
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="View1">
          { props => <View1 {...props} onLogout={ this.props.onLogout }/>}
        </Stack.Screen>
        <Stack.Screen name="Todos" options={{ title: 'Todo List' }} >    
          { props => <Todos {...props} 
          addItemPressed={this.addItemPressed}  todos={ this.state.todos } onTodoAdd={ this.onTodoAdd }/>}
        </Stack.Screen>

        <Stack.Screen name="SearchItems" options={{ title: 'item List' }} >    
          { props =>  <AllItems {...props}/>}
        </Stack.Screen>

        <Stack.Screen
          name="Category"
          
        >
          { props => <Category SeachByCategory={this.SeachByCategory} data ={ this.state.todosC } {...props}></Category>}
        </Stack.Screen>
        
        <Stack.Screen
          name="Location"
          
        >
          { props => <Location SeachByLocation={this.SeachByLocation} data ={ this.state.todosL } {...props}></Location>}
        </Stack.Screen>

        <Stack.Screen
          name="Date"
          
        >
          { props => <Date SeachByDate={this.SeachByDate} data ={ this.state.todosD } {...props}></Date>}
        </Stack.Screen>

        <Stack.Screen name="items" options={{ title: 'item List' }} >    
          { props =>  <Item 
          {...props}
          deleteItemPressed={this.deleteItemPressed}
          itemsData={ this.state.todos } 
          onTodoAdd={ this.onTodoAdd }/>}
        </Stack.Screen>

        <Stack.Screen name="modifyItem" options={{ title: 'item List' }}>
          { props =>  <ModifyItem {...props}
          modifyItemPressed={this.modifyItemPressed}
          itemsData={ this.state.todos } />}
        </Stack.Screen>
        
      </Stack.Navigator>
    )
  }
}
