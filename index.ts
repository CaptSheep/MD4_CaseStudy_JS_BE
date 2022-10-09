import express from 'express';
import mongoose from "mongoose";
import {router} from "./src/routes/router";
import bodyParser from "body-parser";
import session from "express-session"

const PORT = 3000;
const app = express();
app.set('views', './src/views/')
app.set('view engine', 'ejs')
app.use(express.json());

app.use(session({

    secret: 'SECRET',

    resave: false,

    saveUninitialized: true,

    cookie: { maxAge: 60 * 60 * 1000 }

}));
app.use(bodyParser.json());
app.use(session({
    secret: 'SECRET',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 }
}));
app.use(bodyParser.urlencoded({extended: true}));
// app.use(passport.initialize());
// app.use(passport.session());
app.use(express.urlencoded({ extended: false }));
// app.use(fileUpload({
//     createParentPath: true
// }));
app.use('', router)
app.use(express.static('public'))
mongoose.connect('mongodb+srv://root:shmily@jackie.af6j8kn.mongodb.net/MD4_CaseStudy').then(() => {
    console.log('Connect success!');
}).catch(() => {
    console.log('Connect error!');
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})