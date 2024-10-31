import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Custom tag names for clarity
const TaskListContainer = View;
const TaskItem = View;
const TaskText = Text;

const ToDoList = ({ tasks }) => {
  return (
    <TaskListContainer style={styles.listContainer}>
      {tasks.map((task, index) => (
        <TaskItem key={index} style={styles.taskContainer}>
          <TaskText style={styles.taskText}>{task}</TaskText>
        </TaskItem>
      ))}
    </TaskListContainer>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "35%",
    marginTop: 10,
  },
  taskContainer: {
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 8,
    marginBottom: 6,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  taskText: {
    fontSize: 16,
    color: "#333",
  },
});

export default ToDoList;
