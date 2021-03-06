import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './components/header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'study', key: '2'},
    {text: 'play', key: '3'}
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) => {

    if(text.length > 0){
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ];
      })
    } 
    else{
      Alert.alert('Error', 'No text found', [
        {text: 'Close', onPress: () => console.log('alert closed')}
      ]);
    }
  }

  return (
    <TouchableWithoutFeedback onPress = {() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />
        <View style = {styles.content}>
          <AddTodo submitHandler = {submitHandler} />
          <View style = {styles.list}>
            <FlatList 
              data = {todos}
              renderItem = {({item}) => (
                <TodoItem item = {item} pressHandler = {pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    flex: 1,
    padding: 40,
  },

  list: {
    flex: 1,
    marginTop: 20,
  }
});
