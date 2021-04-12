<template>
     <li>
        <h2>{{ name}} </h2>
        <h3> {{age}}  </h3>
    </li>
</template>
<script>
export default {
  props:{
     id: {
         type: Number,
         required: true
     },
     name: {
        type: String,
        required: true
     },
     age: {
       type: String,
       required: true
     }
     
  },
  emits: ['delete'],
data() {
      return {
          name: '',
          age: ''
      };
  },
  methods: {
        // toggleDetails() {
        //     this.detailsAreVisible = !this.detailsAreVisible;
        // },
        // toggleFavorite() {
        //     this.$emit('toggle-favorite', this.id);
        // },
        // deleteFriend() {
        //     this.$emit('delete', this.id);
        // }
    }
};
</script>