import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "Task 1", isFav: true },
      { id: 2, title: "Task 2", isFav: false },
    ],
    name: "Krisko",
  }),
  getters: {
    totalCount: (state) => {
      return state.tasks.length;
    },
    favs() {
      return this.tasks.filter((task) => task.isFav);
    },
    favCount() {
      return this.tasks.reduce((prev, curr) => {
        return curr.isFav ? prev + 1 : prev;
      }, 0);
    },
    totalCount: (state) => {
      return state.tasks.length;
    },
  },
});
