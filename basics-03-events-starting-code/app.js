const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName:'',
      fullName: '',
      lastName: ''
    };
  },
  watch: {
    counter(value) {
      if (value>50) {
        this.counter = 0;
      }
    },
    name(value) {
      if (value ==='') {
        this.fullName = '';  
      } else {
        this.fullName = value + ' ' + this.lastName;
      }
    },
    lastName(value) {
      if (value ==='') {
        this.fullName = '';  
      } else {
        this.fullName = this.name + ' ' + value;
      }
    }
  },
  computed: {
    // fullName: function() {
    //   if (this.name ==='') {
    //     return '';
    //   }
      
    //   return this.name + ' ' +'Strutinsky';
    // }
  },
  methods: {
    add() {
      this.counter++;
    },
    reduce(){
        this.counter--;
    },
    setName: function($event) {
      this.name = $event.target.value;
    },
    confirm: function($event) {
      this.confirmedName = this.name;
    },
    submitForm: function(event) {
    //  event.preventDefault();
      alert(1);
    }
  }
});

app.mount('#events');
