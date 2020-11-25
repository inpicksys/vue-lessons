const app = Vue.createApp({
    data: function() {
        return {
            firstName: 'Misha',
            lastName: 'Strutinsky',
            myAge: 37,
            JLLinkImage: 'https://www.udiscovermusic.com/wp-content/uploads/2018/09/photo-by-Spud-Murphy-COPYRIGHT-Yoko-Ono-3-web-optimised-1000.jpg'
        };
    },
    methods: {
        getName() {
            return `${this.firstName} ${this.lastName}`;
        },
        agePlus: function() {
            return (this.myAge+5);
        },
        getRandom: function () {
            const randomNumber = Math.random();
            return randomNumber;
        }
    }

});
app.mount('#assignment');