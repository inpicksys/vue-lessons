const app = Vue.createApp({
    data() { //: function(){} {
        return {
            courseGoalA: 'Pass fucking vue js!',
            courseGoalB: 'Fuck them all!',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal: function () {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }

});
app.mount('#user-goal');