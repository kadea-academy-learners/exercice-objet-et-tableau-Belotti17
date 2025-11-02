// Crée une fonction whoIsAdmin qui affiche les noms des utilisateurs qui sont admin
// Elle prend en paramètre un tableau d'objets d'utilisateurs.
// Chaque objet utilisateur a les propriétés suivantes :
// - nom (string)
// - age (number)
// - estAdmin (boolean)
// La fonction doit retourner un tableau contenant les noms des utilisateurs qui sont admin.

function whoIsAdmin(users) {
  // Vérifie que le paramètre est bien un tableau
  if (!Array.isArray(users)) {
    return [];
  }

  //Tableau vide pour stocker les noms des administrateurs
  const admins = [];

  // Parcourt le tableau d'utilisateurs
  for (let i = 0; i < users.length; i++) {
    const user = users[i]; // récupère l'utilisateur courant

    // Vérifie si l'utilisateur est admin
    if (user.estAdmin === true) {
      admins.push(user.nom); // ajoute le nom au tableau admins
    }
  }

  // Retourne le tableau des noms d'admins
  return admins;
}

const utilisateurs = [
  { nom: "Belotti", age: 20, estAdmin: true },
  { nom: "Randy", age: 22, estAdmin: false },
  { nom: "Judah", age: 25, estAdmin: true },
];

console.log(whoIsAdmin(utilisateurs));

module.exports = {
  whoIsAdmin,
};
