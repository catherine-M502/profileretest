/*
Gestionnaire de présence, provenant d'une API
Cliquer sur un profil change son état de “absent” à “présent” et vice-versa. Les fonctionnalités de tri et le compteur sont considérés comme des fonctionnalités bonus

A faire : 
- mettre dan l'ordre par nom ou par âge (on peut en sélectionner plusieurs ou non, d'ailleurs leur nombre est inscrit au milieu et il faut que la couleur change)
- on peut cliquer sur chaque case profil sur l'icône email et après notif et ensuite créer l'email et après on peut quitter et une notif nous demande que faire


*/
/*
import { User } from "./User.js";
import { render } from "./User.js";

async function fetchProfilData() {
  const profil = `https://randomuser.me/api/?results=10`;
  const reponseProfil = await fetch(profil);
  const reponseProfilParsee = await reponseProfil.json();
  console.log(reponseProfilParsee);
}

fetchProfilData();
//afficher les profils dans le DOM
//const profil = new User();
render();
*/

import { User } from "./User.js";

// Fonction pour formater le nom pour la comparaison
function formatNameForSorting(name) {
  return name.toLowerCase();
}

async function fetchProfilData() {
  const profilUrl = `https://randomuser.me/api/?results=10`;
  const response = await fetch(profilUrl);
  const data = await response.json();
  return data.results;
}

function ordreAlphabetique(array) {
  array.sort((a, b) => {
    const lastNameA = formatNameForSorting(a.name.last);
    const lastNameB = formatNameForSorting(b.name.last);
    return lastNameA.localeCompare(lastNameB);
  });
  return array;
}

function ordreAge(array) {
  array.sort((a, b) => a.dob.age - b.dob.age);
  return array;
}

/*
Lorsque vous utilisez mainElement.innerHTML = "";, vous supprimez tous les éléments HTML enfants de l'élément <main>. 
Cela vous assure qu'aucun profil précédemment affiché n'est conservé lorsque vous mettez à jour la liste des profils triés. 
Cela garantit que la mise à jour visuelle est correcte et reflète uniquement les profils triés que vous souhaitez afficher.
*/
function updateMain(sortedProfiles) {
  const mainElement = document.querySelector("main");
  mainElement.innerHTML = ""; // Efface le contenu actuel

  const profileElements = sortedProfiles.map((profile) => {
    const user = new User({
      image: profile.picture.large,
      name: `${profile.name.first} ${profile.name.last}`,
      age: profile.dob.age,
      location: profile.location.country,
      email: profile.email,
    });
    return user.element;
  });

  profileElements.forEach((element) => {
    mainElement.appendChild(element);
  });
}

async function render() {
  const profiles = await fetchProfilData();

  const sortByNameButton = document.getElementById("sort--name");
  const sortByAgeButton = document.getElementById("sort--age");

  sortByNameButton.addEventListener("click", () => {
    //La déconstruction [...profiles] est utilisée pour créer une nouvelle copie du tableau profiles avant de le trier, afin de ne pas modifier l'ordre des profils d'origine.
    const sortedProfiles = ordreAlphabetique([...profiles]);
    updateMain(sortedProfiles);

    // Réinitialise la couleur en retirant la classe "selected"
    sortByNameButton.classList.add("selected");
    sortByAgeButton.classList.remove("selected");
  });

  sortByAgeButton.addEventListener("click", () => {
    const sortedProfiles = ordreAge([...profiles]);
    updateMain(sortedProfiles);

    // Réinitialise la couleur en retirant la classe "selected"
    sortByAgeButton.classList.add("selected");
    sortByNameButton.classList.remove("selected");
  });

  // Tri par ordre alphabétique par défaut
  const sortedProfiles = ordreAlphabetique([...profiles]);
  updateMain(sortedProfiles);
  sortByNameButton.classList.add("selected");
}

render();
