//export class User {
/*
  ### Propriétés
  
  - Une ou plusieurs propriétés contenant les informations d’un utilisateur (nom, âge, email, photo etc…).
  - Une propriété indiquant si l’utilisateur est présent ou non. Celle-ci devrait être `false` par défaut.
  - Une propriété se référant à l’élément utilisateur qui sera généré par la méthode décrite directement **ci-dessous.**
  
  */
/*
  constructor(information, presence) {
    this.information = information;
    //cette propriété presence doit être false par défaut

    this.presence = presence;
    this.element = this.render();
  }
}*/
/*containerElement = document.createElement("section");
  user = containerElement.classList.add("user");

  childHTML = `
            <img src="https://randomuser.me/api/portraits/women/37.jpg">
            <div class="user--info">
                    <h1>Miss Mareike Bottenberg</h1>
                    <p>76 years old</p>
                    <p>"Baak, Netherlands"</p>
                    <a href="mailto:mareike.bottenberg@example.com">
                    <span class="mail">✉️</span>
                    </a>
            </div>
    `;

  childHMTL = containerElement.insertAdjacentHTML("afterbegin", childHTML);
  //afficher containerElement dans le DOM
  const =document.body.insertAdjacentElement("beforebegin", containerElement);

  //fonction pour afficher childHTML dans le dom
  render = () => {
    document.body.insertAdjacentElement("beforebegin", containerElement);
    return childHTML;
  };
}*/

/*
containerElement = document.createElement("section");
containerElement.classList.add("user");

const childHTML = `
          <img src="https://randomuser.me/api/portraits/women/37.jpg">
          <div class="user--info">
                  <h1>Miss Mareike Bottenberg</h1>
                  <p>76 years old</p>
                  <p>"Baak, Netherlands"</p>
                  <a href="mailto:mareike.bottenberg@example.com">
                  <span class="mail">✉️</span>
                  </a>
          </div>
  `;

containerElement.insertAdjacentHTML("afterbegin", childHTML);
//afficher containerElement dans le DOM
document.body.insertAdjacentElement("beforebegin", containerElement);

//fonction pour afficher childHTML dans le dom
const render = () => {
  document.body.insertAdjacentElement("beforebegin", containerElement);
  return childHTML;
};*/

//afficher toutes les personnes dans le DOM?

/*
  <div class="user" data-present="false">
          <img src="https://randomuser.me/api/portraits/women/37.jpg">
          <div class="user--info">
                  <h1>Miss Mareike Bottenberg</h1>
                  <p>76 years old</p>
                  <p>Baak, Netherlands</p>
          </div>
          <a href="mailto:mareike.bottenberg@example.com">
                  <span class="mail">✉️</span>
          </a>
  </div>
  
  
*/
//clic qui va déterminer si la personne est présente ou non à l'ade du CSS, je dois donc transformer en false et écrire en javascript ici
/*
//containerElement.dataset.present = "false";
let present = false; // Déclarer la variable `present` en dehors de la fonction

const setOnline = (isPresent) => {
  // Utiliser `=>` pour définir la fonction et accepter un paramètre `isPresent`
  const containerElement = document.querySelector(".user");

  containerElement.addEventListener("click", function () {
    if (isPresent === true) {
      containerElement.dataset.present = "false";
      isPresent = false; // Mettre à jour la variable `isPresent`
    } else {
      containerElement.dataset.present = "true";
      isPresent = true; // Mettre à jour la variable `isPresent`
    }
  });

  return isPresent; // Retourner la valeur mise à jour de `isPresent`
};

present = setOnline(present); // Appeler la fonction `setOnline` et mettre à jour la variable `present`
*/
/*main .user[data-present="true"] {
    background-color: #06d6a0;
    color: #ffffff;
  }
  
  main .user[data-present="true"] p {
    color: #ffffff;
  }*/

//export default User;
//export { render };

export class User {
  constructor(information) {
    // Le constructeur de la classe User est appelé lorsqu'une nouvelle instance est créée.
    // Il prend les informations d'un utilisateur en tant que paramètre.

    // Stocke les informations passées en paramètre dans la propriété "information".
    this.information = information;

    // Initialise l'état de présence à "false".
    this.present = false;

    // Appelle la méthode render() pour générer l'élément utilisateur.
    this.element = this.render();

    // Ajoute un écouteur d'événement "click" sur l'élément pour gérer le changement d'état de présence.
    this.element.addEventListener("click", this.togglePresence.bind(this));
  }

  updateCounter() {
    // Sélectionnez l'élément de compteur dans le DOM
    const counterElement = document.querySelector(".counter");

    // Comptez le nombre d'utilisateurs présents en parcourant les éléments d'utilisateurs
    const presentUsers = document.querySelectorAll(
      ".user[data-present='true']"
    ).length;

    // Mettez à jour le texte du compteur avec le nombre d'utilisateurs présents
    counterElement.textContent = `${presentUsers}/20 people are here`;
  }

  togglePresence() {
    // Cette méthode est appelée lorsque l'élément utilisateur est cliqué.
    // Elle inverse l'état de présence.
    this.present = !this.present;

    // Appelle la méthode updateElementStyle() pour mettre à jour les styles en fonction de l'état de présence.
    this.updateElementStyle();

    // Mettre à jour l'attribut data-present en fonction de l'état de présence
    this.element.setAttribute("data-present", this.present);

    this.updateCounter(); // Appel de la mise à jour du compteur
  }

  updateElementStyle() {
    // Cette méthode met à jour les styles de l'élément en fonction de l'état de présence.

    if (this.present) {
      // Si l'utilisateur est présent, les styles sont mis à jour pour afficher la couleur de présence.
      this.element.style.backgroundColor = "#06d6a0";
      this.element.style.color = "#ffffff";
      this.element.querySelector(".user--info p").style.color = "#ffffff";
    } else {
      // Si l'utilisateur n'est pas présent, les styles sont réinitialisés aux valeurs par défaut.
      this.element.style.backgroundColor = "#ffffff";
      this.element.style.color = "#010123";
      this.element.querySelector(".user--info p").style.color = "#666666";
    }
  }

  render() {
    // Cette méthode génère et retourne l'élément utilisateur.

    // Crée un élément "section" pour le conteneur de l'utilisateur.
    const containerElement = document.createElement("section");
    containerElement.classList.add("user"); // Ajoute la classe CSS "user" au conteneur.

    // Génère le code HTML pour l'élément utilisateur en utilisant les informations de l'utilisateur.
    const childHTML = `
        <img src="${this.information.image}">
        <div class="user--info">
          <h1>${this.information.name}</h1>
          <p>${this.information.age} years old</p>
          <p>${this.information.location}</p>
          <a href="mailto:${this.information.email}">
            <span class="mail">✉️</span>
          </a>
        </div>
      `;

    // Insère le code HTML généré dans le conteneur de l'utilisateur.
    containerElement.insertAdjacentHTML("afterbegin", childHTML);

    // Définit l'attribut de données "present" à "false" par défaut pour le toggle.
    containerElement.dataset.present = "false";

    // Définit les styles par défaut pour le conteneur de l'utilisateur.
    containerElement.style.backgroundColor = "#ffffff";
    containerElement.style.color = "#010123";

    // Retourne le conteneur de l'utilisateur.
    return containerElement;
  }
}
