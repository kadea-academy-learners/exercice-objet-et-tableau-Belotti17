// Crée un tableau `notes` contenant 5 nombres
// Écrire une fonction averageNote avec `notes` comme parametre qui effectue les opérations suivantes :
// - Calcule la moyenne des notes
// - retourne un message "Réussi" si la moyenne est >= 10, sinon "Échoué"

const notes = [12, 8, 15, 9, 10];
function averageNote(notes) {
  // Vérifie que notes est bien un tableau et qu'il n'est pas vide

  if (!Array.isArray(notes) || notes.length === 0) {
    return "Aucune note fournie";
  }

  //Initialisatin d'une variable pour la somme
  let somme = 0;

  //Parcourir le tableau avec une boucle for
  for (let i = 0; i < notes.length; i++) {
    somme += notes[i];
  }

  //Calculer la moyenne
  const moyenne = somme / notes.length;

  //Vérifie si la moyenne est suffisante pour réussir
  if (moyenne >= 10) {
    return "Réussi";
  } else {
    return "Échoué";
  }
}

// affiche "Réussi" ou "Échoué" selon les notes
console.log(averageNote(notes));

module.exports = {
  averageNote,
};
