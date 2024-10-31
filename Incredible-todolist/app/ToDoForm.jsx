import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

// Custom tags for ToDoForm component
const TaskFormContainer = View;
const TaskInput = TextInput;
const AddButton = TouchableOpacity;
const AddButtonText = Text;

const ToDoForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <TaskFormContainer style={styles.form}>
      <TaskInput
        style={styles.input}
        placeholder="Add a new task..."
        value={task}
        onChangeText={setTask}
      />
      <AddButton style={styles.addButton} onPress={handleAddTask}>
        <AddButtonText style={styles.addButtonText}>+</AddButtonText>
      </AddButton>
    </TaskFormContainer>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  addButton: {
    width: 40,
    height: 40,
    backgroundColor: "#007AFF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  addButtonText: {
    color: "#FFF",
    fontSize: 24,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: "#FFF",
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    borderColor: "#ccc",
    borderWidth: 1,
  },
});

export default ToDoForm;
