// diese datei muss genauso heißen wie wir die in "package.js" durchschreiben, sonst wird es nicht funktionieren
// 1. wir inportieren durch "require" express, dann erstellen wir eine konstante für unseren "host" und schreiben
// die funktion unten durch
// 2. hier importieren wir "mongoose" damit wir mit der bibliothek von "JS" namens "MongoDB" arbeiten können
// die zweite zeile ist dafür wichtig, dass wir zugriff auf basisdaten kriegen
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./MealRoutes');
const cors = require('cors');

require('dotenv').config();

mongoose.set("strictQuery", false);

// hier schreiben wir zwei ports durch, einmal für den host und einmal mongodb, bei host NICHT DEN PORT 6000
// nutzen weil er als unsicher bei google zählt und nichts abgebildet wird
const PORT = 7000 || process.env.port

// "cors" ist wichtig damit unser unseren code mit anderen seiten z.B. POSTMAN interagieren und es richtig
// abgebildet werden kann, dafür verwenden wir "json", vorher müssen wir es instalieren und oben importieren
app.use(express.json())
app.use(cors())


// 3. hier verbinden wir ".env" worin sich der link zu "mongodb" befindet und bilden bei erfolgreicher verbindung
// den unten stehenden satz in "REPL" ab
mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('Wir sind mit MONGO DB verknüpft!'))
.catch((err) => console.log(err))

// 4.1 nachdem wir den wegweiser "MealRoutes" oben importiert haben, schreiben wir hier durch das wir den benutzen
app.use(routes);

app.listen(PORT, () => {
    console.log(`Ich bin PORT Nr. ${PORT}`)
})
