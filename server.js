import express from "express";
import path from "node:path";
import { fileURLToPath } from 'node:url';
import { config } from "dotenv";

config();

const app= express();
const PORT= process.env.PORT || 3000;

const __filename= fileURLToPath(import.meta.url);
const __dirname= path.dirname(__filename);

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname,'public')));

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render("index");
})
