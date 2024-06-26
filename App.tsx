import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView, FlatList, Alert, StatusBar } from 'react-native';
import { Button } from 'react-native-paper';
import { useStore } from './store/store';
import Task from './components/Task';

export default function App() {
  const { task, setTask, taskList, setTaskList, deleteTask } = useStore((state) => ({
    task: state.task,
    setTask: state.setTask,
    taskList: state.taskList,
    setTaskList: state.setTaskList,
    deleteTask: state.deleteTask
  }));

  const handleAddTask = () => {
    if (task.trim()) {
      setTaskList(task);
      setTask('');
    }
  };

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
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input} 
            placeholder='Add new task' 
            value={task} 
            onChangeText={setTask}
          />
          <Button 
            mode="contained-tonal" 
            onPress={handleAddTask}
            disabled={task.length === 0}
            style={{ backgroundColor: task.length > 0 ? '#708090' : '#C0C0C0' }}
          >
            Create
          </Button>
        </View>
        <FlatList 
          data={taskList}
          renderItem={({ item, index }) => (
            <Task item={item} index={index} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 10
  },
  input: {
    backgroundColor: 'white',
    width: 250,
    height: 40,
    borderRadius: 10,
    padding: 11,
    marginRight: 10,
  },
});
