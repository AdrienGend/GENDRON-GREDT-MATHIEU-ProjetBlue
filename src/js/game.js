let pseudo = document.querySelector("#pseudo");
let army = document.querySelector("#military");
let gold = document.querySelector("#gold");
let faith = document.querySelector("#faith");
let population = document.querySelector("#population");
let itemStockage = document.querySelector(".Item");
let background = document.querySelector(".WithOutHeader");
let player = getPlayer();






document.addEventListener('DOMContentLoaded', function () {
    const backpack = document.getElementById('backpack');
    const dropdown = document.getElementById('dropdown');
    const closeButton = document.getElementById('closeButton');

    backpack.addEventListener('click', function () {
        // Affiche le dropdown et masque le sac à dos
        dropdown.style.display = 'block';
        backpack.style.display = 'none';
    });

    closeButton.addEventListener('click', function () {
        // Masque le dropdown et affiche à nouveau le sac à dos
        dropdown.style.display = 'none';
        backpack.style.display = 'block';
    });
});

//récupération des données du joueur
function getPlayer() {
    let player = localStorage.getItem("player");
    player = JSON.parse(player);
    console.log(player);
    return player;
    
}
function getNote() {
    let note = localStorage.getItem("note");
    note = JSON.parse(note);
    return note;
}



//affichage informations joueur
function displayBackground() {
    let note = getNote();
    if (note > 1) {
        background.style.backgroundImage = "url('./image/chateauGentil.jpg')";
    } else if (note < -1) {
        background.style.backgroundImage = "url('./image/chateauSombre.jpg')";
    } else {
        background.style.backgroundImage = "url('./image/SalleDuTrone.png')";
    }
}

function displayPseudo() {
    
    pseudo.innerHTML = player._name;
}

function displayGold() {
    
    gold.innerHTML = player._gold;
}

function displayFaith() {
   
    faith.innerHTML = player._faith;
}

function displayArmy() {
    
    army.innerHTML = player._army;
}

function displayPopulation() {
   
    population.innerHTML = player._population;
}

function displayInventory() {
    itemStockage.innerHTML = "";
    let inventory = player.inventory;
    for (let i = 0; i < inventory.length; i++) {
        itemImage = inventory[i].image;
        itemDescription = inventory[i].description; // Ajout de la description
        console.log(itemImage);
        itemStockage.innerHTML += `
            <div class="inventory-item">
                <img src="${itemImage}" alt="item">
                <div class="description">
                    <p>${itemDescription}</p>
                </div>
            </div>
        `;
    }
}




displayBackground();
//function affichage Mage
function displayMageAvatar() {
    let center = document.querySelector(".center");

    // Créer une div pour le personnage et la bulle de dialogue
    let characterContainer = document.createElement("div");
    characterContainer.classList.add("character-container");

    // Créer l'image du personnage
    let characterImg = document.createElement("img");
    characterImg.src = "image/Personnage/Mage.png";
    characterImg.classList.add("gauche");

    // Créer la bulle de dialogue
    let dialogBox = document.createElement("div");
    dialogBox.classList.add("dialog-box");
    dialogBox.textContent = "Ceci est le texte de la bulle de dialogue.";

    // Ajouter l'image du personnage et la bulle de dialogue au conteneur
    characterContainer.appendChild(characterImg);
    characterContainer.appendChild(dialogBox);

    // Ajouter le conteneur du personnage et de la bulle de dialogue au centre
    center.appendChild(characterContainer);
}


//function affichage Archer
function displayArcherAvatar() {
    let center = document.querySelector(".center");

    // Créer une div pour le personnage et la bulle de dialogue
    let characterContainer = document.createElement("div");
    characterContainer.classList.add("character-container");

    // Créer l'image du personnage
    let characterImg = document.createElement("img");
    characterImg.src = "image/Personnage/Archer.png";
    characterImg.classList.add("droite");

    // Créer la bulle de dialogue
    let dialogBox = document.createElement("div");
    dialogBox.classList.add("dialog-box");
    dialogBox.textContent = "Ceci est le texte de la bulle de dialogue.";

    // Ajouter l'image du personnage et la bulle de dialogue au conteneur
    characterContainer.appendChild(characterImg);
    characterContainer.appendChild(dialogBox);

    // Ajouter le conteneur du personnage et de la bulle de dialogue au centre
    center.appendChild(characterContainer);
}

//function affichage Paysan 
function displayPeasantAvatar() {
    let center = document.querySelector(".center");

    // Créer une div pour le personnage et la bulle de dialogue
    let characterContainer = document.createElement("div");
    characterContainer.classList.add("character-container");

    // Créer l'image du personnage
    let characterImg = document.createElement("img");
    characterImg.src = "image/Personnage/Paysan.png";
    characterImg.classList.add("droite");

    // Créer la bulle de dialogue
    let dialogBox = document.createElement("div");
    dialogBox.classList.add("dialog-box");
    dialogBox.textContent = "Ceci est le texte de la bulle de dialogue.";

    // Ajouter l'image du personnage et la bulle de dialogue au conteneur
    characterContainer.appendChild(characterImg);
    characterContainer.appendChild(dialogBox);

    // Ajouter le conteneur du personnage et de la bulle de dialogue au centre
    center.appendChild(characterContainer);
}

//function affichage refugier
function displayRefugeeAvatar() {
    let center = document.querySelector(".center");

    // Créer une div pour le personnage et la bulle de dialogue
    let characterContainer = document.createElement("div");
    characterContainer.classList.add("character-container");

    // Créer l'image du personnage
    let characterImg = document.createElement("img");
    characterImg.src = "image/Personnage/Refugier.png";
    characterImg.classList.add("droite");

    // Créer la bulle de dialogue
    let dialogBox = document.createElement("div");
    dialogBox.classList.add("dialog-box");
    dialogBox.textContent = "Ceci est le texte de la bulle de dialogue.";

    // Ajouter l'image du personnage et la bulle de dialogue au conteneur
    characterContainer.appendChild(characterImg);
    characterContainer.appendChild(dialogBox);

    // Ajouter le conteneur du personnage et de la bulle de dialogue au centre
    center.appendChild(characterContainer);
}

//function affichage Pape  
function displayPapeAvatar() {
    let center = document.querySelector(".center");

    // Créer une div pour le personnage et la bulle de dialogue
    let characterContainer = document.createElement("div");
    characterContainer.classList.add("character-container");

    // Créer l'image du personnage
    let characterImg = document.createElement("img");
    characterImg.src = "image/Personnage/Pape.png";
    characterImg.classList.add("gauche");

    // Créer la bulle de dialogue
    let dialogBox = document.createElement("div");
    dialogBox.classList.add("dialog-box");
    dialogBox.textContent = "Ceci est le texte de la bulle de dialogue.";

    // Ajouter l'image du personnage et la bulle de dialogue au conteneur
    characterContainer.appendChild(characterImg);
    characterContainer.appendChild(dialogBox);

    // Ajouter le conteneur du personnage et de la bulle de dialogue au centre
    center.appendChild(characterContainer);
}


//function affichage Bouffon
function displayJesterAvatar() {
    let center = document.querySelector(".center");

    // Créer une div pour le personnage et la bulle de dialogue
    let characterContainer = document.createElement("div");
    characterContainer.classList.add("character-container");

    // Créer l'image du personnage
    let characterImg = document.createElement("img");
    characterImg.src = "image/Personnage/Bouffon.png";
    characterImg.classList.add("gauche");

    // Créer la bulle de dialogue
    let dialogBox = document.createElement("div");
    dialogBox.classList.add("dialog-box");
    dialogBox.textContent = "Ceci est le texte de la bulle de dialogue.";

    // Ajouter l'image du personnage et la bulle de dialogue au conteneur
    characterContainer.appendChild(characterImg);
    characterContainer.appendChild(dialogBox);

    // Ajouter le conteneur du personnage et de la bulle de dialogue au centre
    center.appendChild(characterContainer);
}

//function affichage Capitaine des soldats 
function displayCaptainAvatar() {
    let center = document.querySelector(".center");

    // Créer une div pour le personnage et la bulle de dialogue
    let characterContainer = document.createElement("div");
    characterContainer.classList.add("character-container");

    // Créer l'image du personnage
    let characterImg = document.createElement("img");
    characterImg.src = "image/Personnage/Capitaine.png";
    characterImg.classList.add("gauche");

    // Créer la bulle de dialogue
    let dialogBox = document.createElement("div");
    dialogBox.classList.add("dialog-box");
    dialogBox.textContent = "Ceci est le texte de la bulle de dialogue.";

    // Ajouter l'image du personnage et la bulle de dialogue au conteneur
    characterContainer.appendChild(characterImg);
    characterContainer.appendChild(dialogBox);

    // Ajouter le conteneur du personnage et de la bulle de dialogue au centre
    center.appendChild(characterContainer);
}

//function affichage Chevalier 
function displayKnightAvatar() {
    let center = document.querySelector(".center");

    // Créer une div pour le personnage et la bulle de dialogue
    let characterContainer = document.createElement("div");
    characterContainer.classList.add("character-container");

    // Créer l'image du personnage
    let characterImg = document.createElement("img");
    characterImg.src = "image/Personnage/Chevalier.png";
    characterImg.classList.add("gauche");

    // Créer la bulle de dialogue
    let dialogBox = document.createElement("div");
    dialogBox.classList.add("dialog-box");
    dialogBox.textContent = "Ceci est le texte de la bulle de dialogue.";

    // Ajouter l'image du personnage et la bulle de dialogue au conteneur
    characterContainer.appendChild(characterImg);
    characterContainer.appendChild(dialogBox);

    // Ajouter le conteneur du personnage et de la bulle de dialogue au centre
    center.appendChild(characterContainer);
}

//function affichage conseiller 
function displayAdvisorAvatar() {
    let center = document.querySelector(".center");

    // Créer une div pour le personnage et la bulle de dialogue
    let characterContainer = document.createElement("div");
    characterContainer.classList.add("character-container");

    // Créer l'image du personnage
    let characterImg = document.createElement("img");
    characterImg.src = "image/Personnage/Conseiller.png";
    characterImg.classList.add("droite");

    // Créer la bulle de dialogue
    let dialogBox = document.createElement("div");
    dialogBox.classList.add("dialog-box");
    dialogBox.textContent = "Ceci est le texte de la bulle de dialogue.";

    // Ajouter l'image du personnage et la bulle de dialogue au conteneur
    characterContainer.appendChild(characterImg);
    characterContainer.appendChild(dialogBox);

    // Ajouter le conteneur du personnage et de la bulle de dialogue au centre
    center.appendChild(characterContainer);

    // Ajouter un bouton dans la div "Left"
    let leftDiv = document.querySelector(".Left");
    let leftButton = document.createElement("button");
    leftButton.textContent = "Bouton Gauche";
    leftDiv.appendChild(leftButton);

    // Ajouter un bouton dans la div "Right"
    let rightDiv = document.querySelector(".Right");
    let rightButton = document.createElement("button");
    rightButton.textContent = "Bouton Droite";
    rightDiv.appendChild(rightButton);
}

function Getfromjson() {
    // Chargement des événements à partir du fichier JSON (assurez-vous de charger le fichier JSON correctement)
    fetch('./json/event.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('La récupération du fichier a échoué');
            }
            return response.json(); // Convertir la réponse en JSON
        })
        .then(data => {
            // Utiliser les données JSON ici
            console.log(data);
        })
        .catch(error => {
            console.error('Une erreur s\'est produite :', error);
        });

}

//function affichage Marchant
function displayMarchandAvatar() {
    let center = document.querySelector(".center");

    // Créer une div pour le personnage et la bulle de dialogue
    let characterContainer = document.createElement("div");
    characterContainer.classList.add("character-container");

    // Créer l'image du personnage
    let characterImg = document.createElement("img");
    characterImg.src = "image/Personnage/Marchand.png";
    characterImg.classList.add("gauche");

    // Créer la bulle de dialogue
    let dialogBox = document.createElement("div");
    dialogBox.classList.add("dialog-box");
    dialogBox.textContent = "Ceci est le texte de la bulle de dialogue.";

    // Ajouter l'image du personnage et la bulle de dialogue au conteneur
    characterContainer.appendChild(characterImg);
    characterContainer.appendChild(dialogBox);

    // Ajouter le conteneur du personnage et de la bulle de dialogue au centre
    center.appendChild(characterContainer);

    // Ajouter un bouton dans la div "Left"
    let leftDiv = document.querySelector(".Left");
    let leftButton = document.createElement("div");
    leftButton.classList.add("SpecialMarchandAcheter")
    leftButton.innerHTML = "<div class=" + "TitleShop" + ">Objets Achetable</div>";
    leftDiv.appendChild(leftButton);
    
    // Ajouter un bouton dans la div "Right"
    let rightDiv = document.querySelector(".Right");
    let rightButton = document.createElement("div");
    rightButton.classList.add("SpecialMarchandVendre")
    rightButton.innerHTML = "<div class=" + "TitleShop" + ">Objets Vendable</div>"
    "<div class=" + "ItemShop" + ">Objets Vendable</div>";
    rightDiv.appendChild(rightButton);
}
//function affichage perso 
function displayPersoAvatar(event) {
    console.log("displayPersoAvatar");
    character = event._personnage;
    console.log(character);
    if (character === "advisor") {
        displayAdvisorAvatar();
    } else if (character === "archer") {
        displayArcherAvatar();
    } else if (character === "capitaine") {
        displayCaptainAvatar();
    } else if (character === "chevalier") {
        displayKnightAvatar();
    } else if (character === "bouffon") {
        displayJesterAvatar();
    } else if (character === "mage") {
        displayMageAvatar();
    } else if (character === "marchand") {
        displayMarchandAvatar();
    } else if (character === "pape") {
        displayPapeAvatar();
    } else if (character === "paysan") {
        displayPeasantAvatar();
    } else if (character === "refugier") {
        displayRefugeeAvatar();
    }
    
}
  
  function lancerEvenementAleatoire() {
  // Générer un nombre aléatoire entre 1 et 15
  const randomNombre = Math.floor(Math.random() * 15) + 1;
    console.log(`Nombre aléatoire généré : ${randomNombre}`);

  // Déclencher l'événement correspondant au nombre aléatoire
  const evenementId = `event${randomNombre}`;
    console.log(`Déclenchement de l'événement ${evenementId}`);
  displayAdvisorAvatar(evenementId);
}



// Vous devrez ajouter des écouteurs d'événements pour chaque événement individuel (1 à 15)
for (let i = 1; i <= 15; i++) {
  const evenementId = `evenement${i}`;
  document.addEventListener(evenementId, function () {
    console.log(`Événement ${evenementId} déclenché.`);
    // Ajoutez ici le code que vous souhaitez exécuter lorsque l'événement est déclenché.
  });
}

  
//appel des fonctions
displayPseudo();
displayGold();
displayFaith();
displayArmy();
displayPopulation();
displayInventory();
lancerEvenementAleatoire();


