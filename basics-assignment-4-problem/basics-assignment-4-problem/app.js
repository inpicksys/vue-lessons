const app = Vue.createApp({
    data() {
        return {
            inputClass: '',
            pVisibility: true,
            inputBackgroundColor: ''
        };
    },
    computed: {
        paraClasses() {
           return  {
               user1: this.inputClass === 'user1', 
               user2: this.inputClass==='user2',
               visible: this.pVisibility,
               hidden: !this.pVisibility
            }
        }
    },
    methods: {
        toggle(){
            this.pVisibility = !this.pVisibility;
        }
    }
});

app.mount("#assignment");