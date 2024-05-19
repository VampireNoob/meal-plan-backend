// 6. diese datei ist dafür da um die anfragen zu kontrollieren um die dann zu "database" über "model" zu schicken
// um dann die antwort beim user auf dem interface abzubilden, dafür müssen wir diese datei mit der "MealModel.js"
// datei verbinden bzw. diese datei hierhin importieren und dafür verwenden wir den namen des "model" in diesem
// fall ist es "MealModel"
const MealModel = require('./MealModel');

// 7. hier schreiben wir die ereigniese die es uns ermöglichen werden etwas in unserem menü zu ändern
// GET = hier schreiben wir die logit für das abbilden durch und verbinden es dann bei "MealRoutes" unter "GET",
// außerdem verwenden wir hier die "ansynchrone" anfrage weil wir eine anfrage in die "database" schicken und erst
// dann eine antwort kriegen 
module.exports.getMeal = async(req, res) => {
    const myMeal  = await MealModel.find();
    res.send(myMeal)
}

// SAVE = hier ist die logik um die eingetragenen sachen bzw änderungen zu speichern, den "titel" entnehmen aus der
// "MealModal" und gleichen es dem "req.body" um die veränderung anzuzeigen, mit ".then" kriegen wir zugang zu der
// kompletten information die da gespeichert worden ist und mit "res.send(data)" wird die information auf dem
// interface abgebildet (POST)
module.exports.saveMeals = async(req, res) => {
    const { title } = req.body;
    MealModel.create({ title })
    .then((data) => {console.log('Objekt hinzugefügt!')
        res.send(data)
    })
}

// DELETE = hier schreiben wir die logik durch um unsere objekte zu löschen die wir dann bei "postman" testen können,
// dazu werden wir "id" verwenden weil die alle "unikate" sind und importieren es in die datei "MealRoutes"
module.exports.deleteMeal = async(req, res) => {
    const { _id } = req.body;
    MealModel.findByIdAndDelete(_id)
    .then(() => res.send('Objekt gelöscht!'))
}

// EDIT = wenn wir etwas in unserem objekt ändern wollen, brauchen wir hier zwei argumente, in diesem fall ist es "id"
// um das objekt zu finden und "title" um es z.B. bei "postman" ändern zu können
module.exports.editMeal = async(req, res) => {
    const { _id, title } = req.body;
    MealModel.findByIdAndUpdate(_id, { title })
    .then(() => res.send('Objekt geändert!'))
}

// 8. wir können prüfen ob alles richtig funktioniert in dem wir bei "postman" paar sachen eintragen über "POST" und
// bei und bei "GET" gucken ob es da ist und dannach auf "mongodb" gehen und bei unserem account auf "database" und
// dann auf "browse collection" gehen, dann müssten die sachen die wir über "postman" eingetragen haben dort stehen