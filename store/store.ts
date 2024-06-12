import { create } from "zustand";

interface StoreInterface {
  task: string;
  setTask: (taskText: string) => void;
  taskList: string[];
  setTaskList: (task: string) => void;
  deleteTask: (index: number) => void;
}

export const useStore = create<StoreInterface>((set) => ({
  task: '',
  taskList: [],
  setTask: (taskText) => set(() => ({ task: taskText })),
  setTaskList: (task) => set((state) => ({ taskList: [...state.taskList, task.trim()] })),
  deleteTask: (index) => set((state) => ({
    taskList: state.taskList.filter((_, i) => i !== index)
  }))
}));