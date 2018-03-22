<template>
  <div>Hello</div>
</template>

<script>
import firebase from 'firebase';

export default {
  methods: {
    createMeal() {
      const meal = {
        name: 'Hamburger Helper',
        ingredients: [
          {
            name: 'Hamburger',
            quantity: 1,
            uom: 'lb',
          },
          {
            name: 'Hamburger Helper',
            quantity: 1,
            uom: 'box',
          },
        ],
      };
      const collection = firebase.firestore().collection('meals');
      return collection.add(meal);
    },
  },
  created() {
    this.createMeal();
  },
};
</script>

<style>

</style>
