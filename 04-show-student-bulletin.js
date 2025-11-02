// Tu disposes d'un tableau nommé `eleves` dont chaque élément est un objet ayant la structure suivante :
// {
//   nom: string,      // Le nom de l'élève
//   notes: number[]   // Un tableau de notes (nombres) obtenues par l'élève
// }
//
// Écris une fonction `showStudentBulletin(eleves)` qui, pour chaque élève du tableau, retourne un bulletin scolaire contenant :
// - Son nom
// - Sa moyenne (calculée à partir de ses notes, arrondie à deux décimales)
// - Un commentaire basé sur la moyenne obtenue :
//     - Moyenne >= 16 : "Excellent"
//     - Moyenne >= 14 : "Très Bien"
//     - Moyenne >= 12 : "Bien"
//     - Moyenne >= 10 : "Passable"
//     - Moyenne < 10  : "À revoir"
// Dans le cas où l'élève n'a pas de notes, la moyenne doit être considérée comme 0 et le commentaire "À revoir".

function showStudentBulletin(eleves) {
  // Vérifie que 'eleves' est bien un tableau
  if (!Array.isArray(eleves)) {
    return [];
  }

  // Tableau pour stocker les bulletins finaux
  const bulletins = [];

  // Parcourir tous les élèves du tableau
  for (let i = 0; i < eleves.length; i++) {
    const eleve = eleves[i];
    const notes = eleve.notes;

    // Vérifie si l'élève a des notes
    let moyenne = 0;
    if (Array.isArray(notes) && notes.length > 0) {
      let somme = 0;
      for (let j = 0; j < notes.length; j++) {
        somme += notes[j];
      }
      moyenne = somme / notes.length;
    }

    // Arrondir la moyenne à deux décimales
    moyenne = Number(moyenne.toFixed(2));

    // Déterminer le commentaire selon la moyenne
    let commentaire = "";
    if (moyenne >= 16) {
      commentaire = "Excellent";
    } else if (moyenne >= 14) {
      commentaire = "Très Bien";
    } else if (moyenne >= 12) {
      commentaire = "Bien";
    } else if (moyenne >= 10) {
      commentaire = "Passable";
    } else {
      commentaire = "À revoir";
    }

    // Ajouter le bulletin de l'élève au tableau final
    bulletins.push({
      nom: eleve.nom,
      moyenne: moyenne,
      commentaire: commentaire,
    });
  }

  // Retourner le tableau de bulletins
  return bulletins;
}

// Exemple d'utilisation :
const eleves = [
  { nom: "Belotti", notes: [15, 17, 18] },
  { nom: "Marie", notes: [12, 10, 13] },
  { nom: "Alex", notes: [8, 9, 7] },
  { nom: "Sophie", notes: [] }, // aucune note
];

console.log(showStudentBulletin(eleves));

module.exports = {
  showStudentBulletin,
};
