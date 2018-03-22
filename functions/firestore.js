const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

module.exports = {
  addMeal(meal) {
    // Example meal
    const ref = db.collection('meals').doc(meal.name.toLowerCase().replace(/ /g, '_'));
    ref.set(meal);
  }
}