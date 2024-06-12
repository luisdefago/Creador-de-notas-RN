import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useStore } from '../store/store';

interface TaskProps {
  item: string;
  index: number;
}

const Task: React.FC<TaskProps> = ({ item, index }) => {
  const { deleteTask } = useStore((state) => ({
    deleteTask: state.deleteTask
  }));

  const confirmDeleteTask = (index: number) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this task?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: () => deleteTask(index),
          style: "destructive"
        }
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{item}</Text>
      <TouchableOpacity onPress={() => confirmDeleteTask(index)}>
        <Text style={styles.btnDelete}>x</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  taskText: {
    color: 'white',
  },
  btnDelete: {
    color: 'white',
    backgroundColor: 'red',
    fontSize: 20,
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 50,
  },
});
