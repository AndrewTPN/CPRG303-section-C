import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

const TaskListContainer = View; // Custom container tag
const TaskHeader = Text;

export default function App() {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <TaskListContainer style={styles.container}>
      <TaskHeader style={styles.header}>To Do List</TaskHeader>
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} />
    </TaskListContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f7",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 16,
  },
});

