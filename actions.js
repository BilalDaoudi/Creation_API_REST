import joueurs from './joueurs.json' assert {type:'json'};


export const AllJoueurs = (request, response) => {
  response.json(joueurs);
};


export const JoueurByid = (request, response) => {
  const id = request.params.id;
  const joueur = joueurs.find((p) => p.id === id);
  if (joueur) {
    response.json(joueur);
  } else {
    response.send("n'est pas joueur avec id donnée");
  }
};


export const SupprimerJoueur = (request, response) => {
  const id = request.params.id;
  let joueur = joueurs.find((j) => j.id === id);
  if (joueur) {
    joueurs = joueurs.filter((j) => j.id !== id);
    response.send(`joueur avec id : ${id} a été Supprimée `);
  } else {
    response.send("n'est pas joueur avec id donnée");
  }
  response.json(joueurs);
};


export const AjouterJoueur = (request, response) => {
  const joueur = request.body;
  joueurs.push(joueur);
  response.send(`joueur avec CIN : ${joueur.id} a été Ajoutée `);
};


export const ModifierJoueur = (request, response) => {
  const id = request.params.id;
  const { idEquipe, Nom, Numero } = request.body;
  let joueur = joueurs.find((j) => j.id === id);
  if (joueur) {
    joueur.Nom = Nom;
    joueur.Numero = Numero;
    joueur.idEquipe = idEquipe;
    response.send(`joueur avec id : ${id} a été Modifiée `);
  } else {
    response.send("n'est pas joueur avec id donnée");
  }
};
