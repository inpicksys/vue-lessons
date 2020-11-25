const app = Vue.createApp({
    data() {
      return {
        message: "",
        userName: '',
        confirmedUserName:''
      };
    },
    methods: {
     showAlert: function(){
        this.message = 'You are welcome!';
     } ,
      register: function(event) {
        this.userName = event.target.value;
      },
      confirm: function() {
        this.confirmedName = this.userName;
      },
    }
  });
  
  app.mount('#assignment');
  