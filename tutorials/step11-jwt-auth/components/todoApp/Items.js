import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, ScrollView, TouchableHighlight } from 'react-native'
const items = (props) => {
    let i=0;
   // console.log (props.itemsData);
        return (
            <View style={{ flex: 1, justifyContent: 'center', }}>
                <Text style={{ fontSize: 18, fontWeight: '500',alignSelf:'center' }}>Items</Text>
                <ScrollView>
                {
                props.itemsData.map(item => {
                    return (
                        <View key={item.id}>
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
                        <Button
                            title="Modify item"
                            onPress={() => props.navigation.navigate('modifyItem', {id: item.id})}
                        />
                        <Text></Text>
                        <Button
                            title="Delete item"
                             onPress={ () => 
                                props.deleteItemPressed(item.id)}
                        />
                        <Text></Text>

                        </View>
                    )
                } )
                }
                </ScrollView>

            </View>
)}

export default items