import { create } from "zustand";

interface StoreInterface {
  taskList: string[];
  setTaskList: (task: string) => void;
  deleteTask: (index: number) => void;
}

export const useStore = create<StoreInterface>((set) => ({
  taskList: [],
  setTaskList: (task) => set((state) => ({ taskList: [...state.taskList, task.trim()] })),
  deleteTask: (index) => set((state) => ({
    taskList: state.taskList.filter((_, i) => i !== index)
  }))
}));
