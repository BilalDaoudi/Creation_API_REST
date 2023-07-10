import express, { request, response } from "express";
import routes from "./Routes.js";


const app = express() ;
app.use(express.json());
app.get("/", (request, response)=>{
    response.send('Créer API REST');
});

app.use("/joueurs",routes)

app.listen(5000, ()=> console.log(`The server is running on port 5000`))