// 4.hier erstellen wir den wegweiser womit wir veränderungen auf dem interface abbilden können, dafür verbinden wir
// die beiden dateien miteinander siehe "const {getMeal}"
const { Router } = require('express');
const { getMeal, saveMeals, deleteMeal, editMeal } = require('./MealController');
const router = Router();

// in diesem bereich werden wir unsere information ändern können sprich: ergänzen, löschen oder etwas neues dazu tun
// GET = ist dafür da um etwas auf dem interface oder postman abzubilden, dafür verbinden wir diese datei mit der
// datei im "MealController", das selbe machen wir auch mit "saveMeals" um die änderung POST zu speichern und mit
// "DELETE" um das objekt zu löschen, bei "POST" und "DELETE" dürfen wir nicht vergessen den "URL" hinzuzufügen damit
// das programm bzw "postman" weiß wo es suchen soll bzw was es machen soll, wie z.B. "/seveMeal", nur bei "GET" wird
// kein "URL" verwendet, außserdem müssen wir den "REPL" neustarten
// bei "POST; DELETE und PUT" können wir hier auch nur "post" verwenden, nur wenn wir es über "postman" es testen
// wollen, könen wir da auch nur "POST" eingeben einziger unterschied ist, wir müssen die "URL" immer die eingeben
// was wir haben wollen z.B. "/deleteMeal" oder "/editMeal", dann wird das objekt gelöscht bzw. geändert
// wenn etwas nicht funktioniert nachdem wir anfangen mit react zu arbeiten, dann müssen wir "delete und put" auf
// "post" ändern
router.get('/', getMeal);
router.post('/saveMeals', saveMeals);
router.post('/deleteMeal', deleteMeal);
router.post('/editMeal', editMeal);

module.exports = router;