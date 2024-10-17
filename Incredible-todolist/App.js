/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import ToDoList from './app/ToDoList';
import ToDoForm from './app/ToDoForm';


function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <ToDoList />
      </ScrollView>
      <ToDoForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;