const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            result: ''
        }
    },
    watch: {
        counter(value) {
            if (value > 37) {
              this.result = 'Not there yet';
            } else {
              this.result = 'Too much!';
            }  
            setTimeout(() => {
                this.counter = 0;
            }, 5000);
          }
    },
    computed: {

    },
    methods: {
        add: function(val) {
            this.counter += val;
        }
    }
});

app.mount('#assignment');