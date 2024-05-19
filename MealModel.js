// 5. hier erstellen wir die datei für "model" und schreiben die untenstehende "schema" durch, wo wir die logik für
// unseren input durchschreiben unter "title" = der name kann variieren wie man den nennen möchte, somit weiß das
// programm was es annehmen soll bzw wenn es eine satz ist dann nimm es an, dann exportieren wir die datei in dem
// wir noch zwei argumente mit durchschreiben = 1. ein name für die erstellte kollektion, in diesem fall "Meal" den
// wir bei mongodb verwenden werden, 2. ist der namen von dem "schema" der dazu verwendet wird um ein "model" zu
// erstellen, in diesem fall ist es "mealSchema" und 
const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Meal', mealSchema);
