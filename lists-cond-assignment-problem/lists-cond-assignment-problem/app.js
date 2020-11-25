const app = Vue.createApp({
    data() {
      return { 
        enteredTaskValue: '',
        tasks: [],
        isShownList: true
      };
    },
    methods: {
      addTask(){
        this.tasks.push(this.enteredTaskValue);
      },
      removeTask(idx) {
        this.tasks.splice(idx, 1)
      },
      toggleList() {
        this.isShownList = !this.isShownList  
      }
    }
  });
  
  app.mount('#assignment');
  