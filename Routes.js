import express, { request, response } from "express";

import {AllJoueurs,JoueurByid,SupprimerJoueur,AjouterJoueur,ModifierJoueur} from "./actions.js";




const router = express.Router();

router.get("/", AllJoueurs);
router.get("/:id", JoueurByid);
router.delete("/:id", SupprimerJoueur);
router.post("/", AjouterJoueur);
router.put("/:id", ModifierJoueur);

export default router;
