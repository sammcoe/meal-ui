const functions = require('firebase-functions');
const database = require('./firestore');

exports.createMeal = functions.https.onRequest((req, res) => {
  const meal = req.query;
  return database.addMeal(meal)
    .then((result) => {
      return res.json({ result:  `Meal added with new ID: ${result.id}`});
    });
});