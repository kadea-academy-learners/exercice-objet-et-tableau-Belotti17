// 1. Crée un tableau nommé `baseDeDonnees` qui contiendra des objets représentant des utilisateurs.
//    Chaque utilisateur doit avoir les propriétés suivantes :
//    - id: number (identifiant unique)
//    - nom: string
//    - email: string
//    - password: string
//    - estConnecte: boolean (indique si l'utilisateur est connecté)
//    - estBloque: boolean (indique si l'utilisateur est bloqué)

// 2. Écris une fonction `signUp(nom, email, password, confirmPassword)` qui :
//    - Vérifie si l'email existe déjà dans `baseDeDonnees`. Si oui, retourne un message d'erreur.
//    - Vérifie si `password` et `confirmPassword` sont identiques. Si non, retourne un message d'erreur.
//    - Sinon, ajoute le nouvel utilisateur à `baseDeDonnees` (avec un id unique, estConnecte à false, estBloque à false) et retourne l'objet utilisateur créé.

// 3. Écris une fonction `login(email, password)` qui :
//    - Recherche l'utilisateur correspondant à l'email dans `baseDeDonnees`.
//    - Si l'utilisateur n'existe pas ou si le mot de passe est incorrect, retourne un message d'erreur.
//    - Si l'utilisateur est bloqué (`estBloque` à true), retourne un message d'erreur spécifique.
//    - Sinon, met à jour `estConnecte` à true pour cet utilisateur et retourne l'objet utilisateur connecté.

// Tableau servant de "base de données" pour stocker les utilisateurs
const baseDeDonnees = [];

// Fonction d'inscription (signUp)
function signUp(nom, email, password, confirmPassword) {
  // Vérifie si l'email existe déjà
  const utilisateurExiste = baseDeDonnees.find((user) => user.email === email);
  if (utilisateurExiste) {
    return "Erreur: cet email existe déjà";
  }

  // Vérifie si les deux mots de passe correspondent
  if (password !== confirmPassword) {
    return "Erreur: les mots de passe ne correspondent pas";
  }

  // Crée un nouvel utilisateur avec un id unique
  const nouvelUtilisateur = {
    id: baseDeDonnees.length + 1, // identifiant unique
    nom: nom,
    email: email,
    password: password,
    estConnecte: false,
    estBloque: false,
  };

  // Ajoute l'utilisateur à la base de données
  baseDeDonnees.push(nouvelUtilisateur);

  // Retourne l'objet utilisateur créé
  return nouvelUtilisateur;
}

// Fonction de connexion (login)
function login(email, password) {
  // Recherche de l'utilisateur correspondant à l'email
  const utilisateur = baseDeDonnees.find((user) => user.email === email);

  // Vérifie si l'utilisateur existe
  if (!utilisateur) {
    return "Erreur: utilisateur non trouvé";
  }

  // Vérifie si l'utilisateur est bloqué
  if (utilisateur.estBloque === true) {
    return "Erreur: utilisateur bloqué";
  }

  // Vérifie si le mot de passe est correct
  if (utilisateur.password !== password) {
    return "Erreur: mot de passe incorrect";
  }

  // Met à jour le statut de connexion
  utilisateur.estConnecte = true;

  // Retourne l'utilisateur connecté
  return utilisateur;
}

// Exemples d'utilisation
console.log(signUp("Belotti", "belotti@mail.com", "1234", "1234"));
// → { id: 1, nom: 'Belotti', email: 'belotti@mail.com', password: '1234', estConnecte: false, estBloque: false }

console.log(signUp("Alex", "belotti@mail.com", "test", "test"));
// → "Erreur: cet email existe déjà"

console.log(login("belotti@mail.com", "1234"));
// → { id: 1, nom: 'Belotti', email: 'belotti@mail.com', password: '1234', estConnecte: true, estBloque: false }

console.log(login("belotti@mail.com", "mauvais"));
// → "Erreur: mot de passe incorrect"

module.exports = { baseDeDonnees, signUp, login };
